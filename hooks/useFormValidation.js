// hooks/useFormValidation.js
"use client";

import { useState, useCallback } from "react";

const defaultValidationRules = {
  name: {
    required: true,
    minLength: 2,
    message: "Please enter your name (at least 2 characters)",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    required: false,
    pattern: /^[\d\s\-\(\)\+]*$/,
    message: "Please enter a valid phone number",
  },
  eventType: {
    required: true,
    message: "Please select an event type",
  },
  eventDate: {
    required: false,
  },
  message: {
    required: true,
    minLength: 20,
    message: "Please enter a message (at least 20 characters)",
  },
};

export function useFormValidation(initialValues = {}, customRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationRules = { ...defaultValidationRules, ...customRules };

  const validateField = useCallback(
    (name, value) => {
      const rules = validationRules[name];
      if (!rules) return "";

      // Required check
      if (rules.required && (!value || value.trim() === "")) {
        return rules.message || `${name} is required`;
      }

      // Skip other validations if field is empty and not required
      if (!value || value.trim() === "") return "";

      // Min length check
      if (rules.minLength && value.length < rules.minLength) {
        return rules.message || `${name} must be at least ${rules.minLength} characters`;
      }

      // Pattern check
      if (rules.pattern && !rules.pattern.test(value)) {
        return rules.message || `${name} is invalid`;
      }

      return "";
    },
    [validationRules]
  );

  const validateAllFields = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName] || "");
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules, validateField]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleSelectChange = useCallback(
    (name, value) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      // Clear error when user selects
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const handleSubmit = useCallback(
    async (onSubmit) => {
      // Mark all fields as touched
      const allTouched = {};
      Object.keys(validationRules).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched(allTouched);

      // Validate all fields
      const isValid = validateAllFields();

      if (!isValid) {
        return false;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (onSubmit) {
          await onSubmit(values);
        }

        setIsSuccess(true);
        return true;
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          submit: "Something went wrong. Please try again.",
        }));
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validationRules, validateAllFields]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSuccess(false);
  }, [initialValues]);

  const getFieldProps = useCallback(
    (name) => ({
      name,
      value: values[name] || "",
      onChange: handleChange,
      onBlur: handleBlur,
    }),
    [values, handleChange, handleBlur]
  );

  const getFieldError = useCallback(
    (name) => (touched[name] ? errors[name] : ""),
    [errors, touched]
  );

  const isFieldValid = useCallback(
    (name) => touched[name] && !errors[name] && values[name],
    [errors, touched, values]
  );

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
    resetForm,
    getFieldProps,
    getFieldError,
    isFieldValid,
    setValues,
  };
}
