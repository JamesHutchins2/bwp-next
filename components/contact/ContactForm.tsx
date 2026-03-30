"use client";

import { useState, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { usePlausible } from "next-plausible";
import { useDropzone } from "react-dropzone";
import {
  PaperClipIcon,
  XMarkIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  validateForm,
  validateFiles,
  checkRateLimit,
  recordSubmission,
  formatCooldown,
  type FormValues,
  type FormErrors,
} from "@/lib/formHelpers";

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  primaryDate: "",
  secondaryDate: "",
  serviceType: "",
  otherService: "",
  details: "",
  emailConsent: false,
  website: "", // honeypot
};

const SERVICE_OPTIONS = [
  { value: "pool-open", label: "Pool Opening" },
  { value: "pool-close", label: "Pool Closing" },
  { value: "liner-replacement", label: "Liner Replacement" },
  { value: "weekly-maintenance", label: "Weekly Maintenance" },
  { value: "repair", label: "Repair / Leak Detection" },
  { value: "other", label: "Other (please specify below)" },
];

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ id, label, error, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-bwp-dark mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
          <ExclamationCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "block w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-bwp-dark placeholder-gray-400 shadow-sm focus:border-bwp-blue focus:ring-1 focus:ring-bwp-blue transition-colors";
const errorInputClass = "border-red-400 focus:border-red-500 focus:ring-red-500";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const plausible = usePlausible();
  const [values, setValues] = useState<FormValues>(() => ({
    ...INITIAL_VALUES,
    serviceType: searchParams.get("service") ?? "",
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [cooldownMs, setCooldownMs] = useState(0);
  const cooldownRef = useRef<NodeJS.Timeout | null>(null);

  const onDrop = useCallback((accepted: File[]) => {
    const all = [...files, ...accepted];
    const err = validateFiles(all);
    if (err) {
      setFileError(err);
    } else {
      setFileError(null);
      setFiles(all);
    }
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".webp", ".heic"],
      "application/pdf": [".pdf"],
    },
    maxSize: 10 * 1024 * 1024,
  });

  function removeFile(index: number) {
    setFiles(files.filter((_, i) => i !== index));
    setFileError(null);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setValues((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function startCooldownTimer(ms: number) {
    setCooldownMs(ms);
    const tick = () => {
      setCooldownMs((prev) => {
        if (prev <= 1000) {
          setStatus("idle");
          return 0;
        }
        cooldownRef.current = setTimeout(tick, 1000);
        return prev - 1000;
      });
    };
    cooldownRef.current = setTimeout(tick, 1000);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check — silent success if triggered
    if (values.website) {
      setStatus("success");
      return;
    }

    // Rate limit check
    const { allowed, remainingMs } = checkRateLimit();
    if (!allowed) {
      setStatus("rate_limited");
      startCooldownTimer(remainingMs);
      return;
    }

    // Validate
    const formErrors = validateForm(values);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      const firstErrorEl = document.querySelector("[data-error-field]");
      firstErrorEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (fileError) return;

    setStatus("submitting");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error("Webhook URL not configured");
      }

      let body: FormData | string;
      const headers: Record<string, string> = {};

      if (files.length > 0) {
        const fd = new FormData();
        Object.entries(values).forEach(([k, v]) => {
          if (k !== "website") fd.append(k, String(v));
        });
        files.forEach((f) => fd.append("attachments", f));
        body = fd;
      } else {
        const { website: _website, ...payload } = values; // eslint-disable-line @typescript-eslint/no-unused-vars
        body = JSON.stringify(payload);
        headers["Content-Type"] = "application/json";
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      recordSubmission();
      // Track successful form submission with service type (no personal data)
      plausible("Contact Form Submitted", {
        props: { service: values.serviceType || "unspecified" },
      });
      setStatus("success");
      setValues(INITIAL_VALUES);
      setFiles([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <CheckCircleIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-heading font-bold text-xl text-green-900 mb-2">
          Request Received!
        </h3>
        <p className="text-green-800 text-sm leading-relaxed mb-4">
          Thank you — we&apos;ve received your service request. A member of our team
          will contact you within one business day to confirm your appointment
          details and provide a quote.
        </p>
        <p className="text-green-700 text-sm font-semibold">
          Questions? Call us: (905) 857-3830
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <h2 className="font-heading text-2xl font-bold text-bwp-dark mb-1">
        Request a Service Quote
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Fill in your details below and we&apos;ll get back to you within one business
        day. Fields marked * are required.
      </p>

      {/* Honeypot — hidden from real users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={values.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <Field id="name" label="Full Name" error={errors.name} required>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
          placeholder="Jane Smith"
          data-error-field={errors.name ? "true" : undefined}
        />
      </Field>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="email" label="Email Address" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
            placeholder="jane@example.com"
          />
        </Field>
        <Field id="phone" label="Phone Number" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            className={`${inputClass} ${errors.phone ? errorInputClass : ""}`}
            placeholder="(905) 555-1234"
          />
        </Field>
      </div>

      {/* Address */}
      <Field id="address" label="Street Address" error={errors.address} required>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          value={values.address}
          onChange={handleChange}
          className={`${inputClass} ${errors.address ? errorInputClass : ""}`}
          placeholder="123 Main Street"
        />
      </Field>

      {/* City + Postal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="city" label="City" error={errors.city} required>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={handleChange}
            className={`${inputClass} ${errors.city ? errorInputClass : ""}`}
            placeholder="Bolton"
          />
        </Field>
        <Field id="postalCode" label="Postal Code" error={errors.postalCode} required>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            autoComplete="postal-code"
            value={values.postalCode}
            onChange={handleChange}
            className={`${inputClass} ${errors.postalCode ? errorInputClass : ""}`}
            placeholder="L7E 4Z5"
          />
        </Field>
      </div>

      {/* Service type */}
      <Field
        id="serviceType"
        label="Type of Service"
        error={errors.serviceType}
        required
      >
        <select
          id="serviceType"
          name="serviceType"
          value={values.serviceType}
          onChange={handleChange}
          className={`${inputClass} ${errors.serviceType ? errorInputClass : ""}`}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Other service specification */}
      {values.serviceType === "other" && (
        <Field
          id="otherService"
          label="Please Describe the Service Needed"
          error={errors.otherService}
          required
        >
          <input
            id="otherService"
            name="otherService"
            type="text"
            value={values.otherService}
            onChange={handleChange}
            className={`${inputClass} ${errors.otherService ? errorInputClass : ""}`}
            placeholder="Briefly describe the service you need"
          />
        </Field>
      )}

      {/* Preferred dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="primaryDate" label="Primary Preferred Date">
          <input
            id="primaryDate"
            name="primaryDate"
            type="date"
            value={values.primaryDate}
            onChange={handleChange}
            className={inputClass}
            min={new Date().toISOString().split("T")[0]}
          />
        </Field>
        <Field id="secondaryDate" label="Secondary Preferred Date">
          <input
            id="secondaryDate"
            name="secondaryDate"
            type="date"
            value={values.secondaryDate}
            onChange={handleChange}
            className={inputClass}
            min={new Date().toISOString().split("T")[0]}
          />
        </Field>
      </div>

      {/* Details */}
      <Field id="details" label="Service Details">
        <textarea
          id="details"
          name="details"
          rows={4}
          value={values.details}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us about your pool — size, current condition, specific concerns or questions..."
        />
      </Field>

      {/* File upload */}
      <div>
        <p className="block text-sm font-medium text-bwp-dark mb-1.5">
          Photos or Documents{" "}
          <span className="font-normal text-gray-500">(optional, up to 10MB)</span>
        </p>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-bwp-blue bg-bwp-blue-light"
              : "border-gray-300 hover:border-bwp-blue hover:bg-gray-50"
          }`}
        >
          <input {...getInputProps()} />
          <PaperClipIcon className="w-7 h-7 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            {isDragActive
              ? "Drop files here..."
              : "Drag & drop photos or PDFs here, or click to select"}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            JPG, PNG, WEBP, HEIC, PDF · Max 10MB total
          </p>
        </div>

        {fileError && (
          <p className="mt-1.5 text-xs text-red-600">{fileError}</p>
        )}

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
              >
                <PaperClipIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-xs text-gray-700 flex-1 truncate">
                  {f.name}
                </span>
                <span className="text-xs text-gray-400">
                  {(f.size / 1024).toFixed(0)}KB
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={`Remove ${f.name}`}
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Email consent (CASL) */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="emailConsent"
          name="emailConsent"
          type="checkbox"
          checked={values.emailConsent}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-bwp-blue focus:ring-bwp-blue"
        />
        <label htmlFor="emailConsent" className="text-xs text-gray-600 leading-relaxed">
          I authorize Breezewood Pools Inc. to send me correspondence by email
          regarding their promotions, products, and services. You may unsubscribe
          at any time. (Optional)
        </label>
      </div>

      {/* Error states */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
          <strong>Something went wrong.</strong> Please try again or call us
          directly at (905) 857-3830.
        </div>
      )}

      {status === "rate_limited" && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          Please wait {formatCooldown(cooldownMs)} before submitting another
          request.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting" || status === "rate_limited"}
        className="w-full bg-bwp-blue hover:bg-bwp-blue-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base px-6 py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Submit Service Request"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respond within one business day. You can also call us at{" "}
        <a href="tel:+19058573830" className="text-bwp-blue font-semibold">
          (905) 857-3830
        </a>
        .
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 rounded-2xl" />}>
      <ContactFormInner />
    </Suspense>
  );
}
