'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/schemas/contact';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const interestOptions: { value: ContactFormData['interest']; label: string }[] =
  [
    { value: 'free-trial', label: 'Free Trial' },
    { value: 'membership', label: 'Membership Info' },
    { value: 'personal-training', label: 'Personal Training' },
    { value: 'general-inquiry', label: 'General Inquiry' },
  ];

const fieldClasses =
  'w-full rounded-lg border border-border bg-surface px-4 py-3 text-primary placeholder:text-secondary/50 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

const labelClasses =
  'mb-1.5 block text-sm font-semibold uppercase tracking-wider text-primary';

const errorClasses = 'mt-1 text-sm text-red-500';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const messageValue = watch('message') ?? '';

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-accent/40 bg-surface p-8 text-center">
        <svg
          className="mx-auto mb-4 h-10 w-10 text-accent"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-heading text-xl font-bold uppercase text-accent">
          Message sent!
        </p>
        <p className="mt-2 text-secondary">
          {"Thanks! We'll be in touch within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* ── Name row ───────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name <span className="text-accent">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            className={cn(fieldClasses, errors.firstName && 'border-red-500')}
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className={errorClasses}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Smith"
            className={cn(fieldClasses, errors.lastName && 'border-red-500')}
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className={errorClasses}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* ── Email ──────────────────────────────────────────────────────────── */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          className={cn(fieldClasses, errors.email && 'border-red-500')}
          {...register('email')}
        />
        {errors.email && (
          <p className={errorClasses}>{errors.email.message}</p>
        )}
      </div>

      {/* ── Phone ──────────────────────────────────────────────────────────── */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone{' '}
          <span className="text-xs font-normal normal-case tracking-normal text-secondary">
            (optional)
          </span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(817) 555-0100"
          className={fieldClasses}
          {...register('phone')}
        />
      </div>

      {/* ── Interest ───────────────────────────────────────────────────────── */}
      <div>
        <label htmlFor="interest" className={labelClasses}>
          I&rsquo;m interested in <span className="text-accent">*</span>
        </label>
        <div className="relative">
          <select
            id="interest"
            className={cn(
              fieldClasses,
              'cursor-pointer appearance-none pr-10',
              errors.interest && 'border-red-500',
            )}
            defaultValue=""
            {...register('interest')}
          >
            <option value="" disabled>
              Select an area of interest…
            </option>
            {interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-secondary">
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6L8 11L13 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        {errors.interest && (
          <p className={errorClasses}>{errors.interest.message}</p>
        )}
      </div>

      {/* ── Message ────────────────────────────────────────────────────────── */}
      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <label htmlFor="message" className={labelClasses}>
            Message{' '}
            <span className="text-xs font-normal normal-case tracking-normal text-secondary">
              (optional)
            </span>
          </label>
          <span
            className={cn(
              'text-xs',
              messageValue.length > 450 ? 'text-accent' : 'text-secondary',
            )}
          >
            {messageValue.length}/500
          </span>
        </div>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us a bit about your goals or what you're looking for…"
          className={cn(
            fieldClasses,
            'resize-y',
            errors.message && 'border-red-500',
          )}
          {...register('message')}
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      {/* ── Error banner ───────────────────────────────────────────────────── */}
      {status === 'error' && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      {/* ── Submit ─────────────────────────────────────────────────────────── */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full sm:w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
