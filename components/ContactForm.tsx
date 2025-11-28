// components/ContactForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { eventTypes } from "@/data/services";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  message: "",
};

export default function ContactForm() {
  const {
    values,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleSubmit,
    resetForm,
    getFieldError,
    isFieldValid,
  } = useFormValidation<ContactFormValues>(initialValues);

  const onSubmit = async (): Promise<void> => {
    // In production, this would send data to an API
    // For now, we just simulate success
  };

  // Success State
  if (isSuccess) {
    return (
      <div className="glass rounded-2xl p-8 md:p-10 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#4ade80] flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-[#1a0a2e]" />
        </div>
        <h3 className="text-white text-2xl font-bold mt-6">Message Sent!</h3>
        <p className="text-[#a0a0b0] mt-2">
          Thank you for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
        <Button
          onClick={resetForm}
          variant="outline"
          className="mt-8 border-[#00d4aa] text-[#00d4aa] hover:bg-[#00d4aa] hover:text-[#1a0a2e]"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
      className="glass rounded-2xl p-8 md:p-10"
      noValidate
    >
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
            Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`h-12 rounded-lg ${
              getFieldError("name")
                ? "border-red-500 focus:border-red-500"
                : isFieldValid("name")
                ? "border-[#4ade80]"
                : ""
            }`}
            placeholder="Your full name"
          />
          {getFieldError("name") && (
            <p className="text-red-400 text-sm mt-1">{getFieldError("name")}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
            Email <span className="text-red-400">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`h-12 rounded-lg ${
              getFieldError("email")
                ? "border-red-500 focus:border-red-500"
                : isFieldValid("email")
                ? "border-[#4ade80]"
                : ""
            }`}
            placeholder="your@email.com"
          />
          {getFieldError("email") && (
            <p className="text-red-400 text-sm mt-1">{getFieldError("email")}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <Label htmlFor="phone" className="text-white text-sm font-medium mb-2 block">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`h-12 rounded-lg ${
              getFieldError("phone") ? "border-red-500 focus:border-red-500" : ""
            }`}
            placeholder="(555) 123-4567"
          />
          {getFieldError("phone") && (
            <p className="text-red-400 text-sm mt-1">{getFieldError("phone")}</p>
          )}
        </div>

        {/* Event Type Select */}
        <div>
          <Label htmlFor="eventType" className="text-white text-sm font-medium mb-2 block">
            Event Type <span className="text-red-400">*</span>
          </Label>
          <Select
            value={values.eventType}
            onValueChange={(value: string) => handleSelectChange("eventType", value)}
          >
            <SelectTrigger
              className={`h-12 rounded-lg ${
                getFieldError("eventType")
                  ? "border-red-500"
                  : isFieldValid("eventType")
                  ? "border-[#4ade80]"
                  : ""
              }`}
            >
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent className="bg-[#2d1b4e] border-[#00d4aa]/20">
              {eventTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className="text-white hover:bg-[#00d4aa]/20 focus:bg-[#00d4aa]/20 focus:text-white"
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {getFieldError("eventType") && (
            <p className="text-red-400 text-sm mt-1">{getFieldError("eventType")}</p>
          )}
        </div>

        {/* Event Date */}
        <div>
          <Label htmlFor="eventDate" className="text-white text-sm font-medium mb-2 block">
            Event Date
          </Label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={values.eventDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className="h-12 rounded-lg"
          />
        </div>

        {/* Message Field */}
        <div>
          <Label htmlFor="message" className="text-white text-sm font-medium mb-2 block">
            Message <span className="text-red-400">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={5}
            className={`rounded-lg resize-none ${
              getFieldError("message")
                ? "border-red-500 focus:border-red-500"
                : isFieldValid("message")
                ? "border-[#4ade80]"
                : ""
            }`}
            placeholder="Tell us about your event and what you're looking for... (at least 20 characters)"
          />
          {getFieldError("message") && (
            <p className="text-red-400 text-sm mt-1">{getFieldError("message")}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-gradient-to-r from-[#00d4aa] to-[#4ade80] text-[#1a0a2e] font-semibold uppercase tracking-wider px-8 py-6 rounded-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
