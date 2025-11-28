// types/index.ts

// Image types
export interface ImageData {
  id: number;
  src: string;
  alt: string;
  category?: string;
  title?: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

// Service types
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface BrandInfo {
  name: string;
  tagline: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  location: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  social: {
    facebook: string;
    instagram: string;
  };
}

// Media Day types
export interface PricingOption {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  highlight: string | null;
  description: string;
  requirement: string;
  additionalInfo: string;
  features: string[];
}

export interface IncludedItem {
  title: string;
  description: string;
}

export interface BannerOption {
  size: string;
  price: string;
  priceNote: string;
}

export interface BannerInfo {
  title: string;
  description: string;
  includes: string[];
  note: string;
}

// Component props
export interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  showLine?: boolean;
  className?: string;
}

export interface PageHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
  centered?: boolean;
}

export interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  description?: string;
  requirement?: string;
  additionalInfo?: string;
  features: string[];
  highlight?: string | null;
}

export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Form types
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Hook return types
export interface UseIntersectionObserverReturn {
  ref: React.RefCallback<Element>;
  isVisible: boolean;
}

export interface UseStaggeredIntersectionReturn {
  setRef: (index: number) => React.RefCallback<Element>;
  isItemVisible: (index: number) => boolean;
}

export interface UseFormValidationReturn<T> {
  values: T;
  errors: FormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}
