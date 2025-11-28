// hooks/useFormValidation.ts
"use client";

import { useState, useCallback } from "react";

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  message?: string;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface FormErrors {
  [key: string]: string;
}

interface TouchedFields {
  [key: string]: boolean;
}

const defaultValidationRules: ValidationRules = {
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

interface UseFormValidationReturn<T> {
  values: T;
  errors: FormErrors;
  touched: TouchedFields;
  isSubmitting: boolean;
  isSuccess: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (onSubmit?: (values: T) => Promise<void>) => Promise<boolean>;
  resetForm: () => void;
  getFieldProps: (name: string) => {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
  getFieldError: (name: string) => string;
  isFieldValid: (name: string) => boolean;
  setValues: React.Dispatch<React.SetStateAction<T>>;
}

export function useFormValidation<T extends { [K in keyof T]: string }>(
  initialValues: T,
  customRules: ValidationRules = {}
): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationRules: ValidationRules = { ...defaultValidationRules, ...customRules };

  const validateField = useCallback(
    (name: string, value: string): string => {
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

  const validateAllFields = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName as keyof T] || "");
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules, validateField]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value } as T));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleSelectChange = useCallback(
    (name: string, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value } as T));

      // Clear error when user selects
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const handleSubmit = useCallback(
    async (onSubmit?: (values: T) => Promise<void>): Promise<boolean> => {
      // Mark all fields as touched
      const allTouched: TouchedFields = {};
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
      } catch {
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
    (name: string) => ({
      name,
      value: values[name as keyof T] || "",
      onChange: handleChange,
      onBlur: handleBlur,
    }),
    [values, handleChange, handleBlur]
  );

  const getFieldError = useCallback(
    (name: string): string => (touched[name] ? errors[name] || "" : ""),
    [errors, touched]
  );

  const isFieldValid = useCallback(
    (name: string): boolean => !!(touched[name] && !errors[name] && values[name as keyof T]),
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
