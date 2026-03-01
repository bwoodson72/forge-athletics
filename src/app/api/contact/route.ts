import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas/contact';

/**
 * POST /api/contact
 *
 * Validates the submitted contact form and (in production) would hand off
 * to an email provider.
 *
 * ── Production email integration ──────────────────────────────────────────
 * Replace the simulated delay below with a real send, e.g.:
 *
 *   // Resend
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: 'noreply@forgeathletics.com',
 *     to: 'info@forgeathletics.com',
 *     subject: `New contact form — ${data.firstName} ${data.lastName}`,
 *     text: JSON.stringify(data, null, 2),
 *   });
 *
 *   // SendGrid
 *   import sgMail from '@sendgrid/mail';
 *   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
 *   await sgMail.send({ ... });
 * ──────────────────────────────────────────────────────────────────────────
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const data = result.data;

    // Simulate async work (replace with real email send in production)
    await new Promise<void>((resolve) => setTimeout(resolve, 500));

    console.log('[/api/contact] New submission:', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      interest: data.interest,
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
