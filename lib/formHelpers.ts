// ============================================================
// FORM HELPERS — Validation, rate limiting, honeypot
// ============================================================

const RATE_LIMIT_KEY = "bwp_last_submit";
const RATE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Check if the user is within the rate limit window.
 * Returns true if the user CAN submit (no rate limit active).
 */
export function checkRateLimit(): { allowed: boolean; remainingMs: number } {
  if (typeof window === "undefined") return { allowed: true, remainingMs: 0 };

  const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
  if (!lastSubmit) return { allowed: true, remainingMs: 0 };

  const elapsed = Date.now() - parseInt(lastSubmit, 10);
  if (elapsed >= RATE_LIMIT_MS) return { allowed: true, remainingMs: 0 };

  return { allowed: false, remainingMs: RATE_LIMIT_MS - elapsed };
}

/**
 * Record a successful submission timestamp.
 */
export function recordSubmission() {
  if (typeof window === "undefined") return;
  localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
}

/**
 * Format remaining cooldown time as a human-readable string.
 */
export function formatCooldown(ms: number): string {
  const seconds = Math.ceil(ms / 1000);
  if (seconds < 60) return `${seconds} seconds`;
  const minutes = Math.ceil(seconds / 60);
  return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
}

// ============================================================
// VALIDATION
// ============================================================

export function validatePhone(phone: string): boolean {
  return /^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
    phone.trim()
  );
}

export function validatePostalCode(postal: string): boolean {
  return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postal.trim());
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  primaryDate: string;
  secondaryDate: string;
  serviceType: string;
  otherService: string;
  details: string;
  emailConsent: boolean;
  // Honeypot — must be empty
  website: string;
}

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!validatePhone(values.phone)) {
    errors.phone = "Please enter a valid North American phone number.";
  }

  if (!values.address.trim()) {
    errors.address = "Street address is required.";
  }

  if (!values.city.trim()) {
    errors.city = "City is required.";
  }

  if (!values.postalCode.trim()) {
    errors.postalCode = "Postal code is required.";
  } else if (!validatePostalCode(values.postalCode)) {
    errors.postalCode = "Please enter a valid Canadian postal code (e.g. L7E 4Z5).";
  }

  if (!values.serviceType) {
    errors.serviceType = "Please select a service type.";
  }

  if (values.serviceType === "other" && !values.otherService.trim()) {
    errors.otherService = "Please describe the service you need.";
  }

  return errors;
}

// ============================================================
// FILE VALIDATION
// ============================================================

const MAX_TOTAL_SIZE_MB = 10;
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
];

export function validateFiles(files: File[]): string | null {
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  if (totalSize > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
    return `Total file size must be under ${MAX_TOTAL_SIZE_MB}MB.`;
  }

  for (const file of files) {
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return `"${file.name}" is not an accepted file type. Please upload images or PDFs.`;
    }
  }

  return null;
}
