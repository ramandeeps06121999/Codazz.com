import { NextRequest, NextResponse } from 'next/server';

interface LeadRequestBody {
  name: string;
  email: string;
  phone?: string;
  details?: string;
  source?: string;
  honeypot?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body: LeadRequestBody = await request.json();
    const { name, email, phone, details, source, honeypot } = body;

    // Honeypot check — if filled, it's a bot. Silently return 200.
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "We'll be in touch within 24 hours" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Log the lead (for development / debugging)
    console.log('--- NEW LEAD ---');
    console.log('Name:', name.trim());
    console.log('Email:', email.trim());
    if (phone) console.log('Phone:', phone.trim());
    if (details) console.log('Details:', details.trim());
    if (source) console.log('Source:', source);
    console.log('Timestamp:', new Date().toISOString());
    console.log('----------------');

    // ─────────────────────────────────────────────
    // Integration points — add your services here:
    //
    // 1. EMAIL NOTIFICATION (SendGrid / Resend)
    //    await resend.emails.send({
    //      from: 'leads@codazz.com',
    //      to: 'hello@codazz.com',
    //      subject: `New Lead: ${name} — ${source || 'website'}`,
    //      html: `<p>Name: ${name}</p><p>Email: ${email}</p>...`,
    //    });
    //
    // 2. CRM (HubSpot / Salesforce)
    //    await hubspotClient.crm.contacts.basicApi.create({
    //      properties: { firstname: name, email, phone, message: details },
    //    });
    //
    // 3. SLACK WEBHOOK
    //    await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json' },
    //      body: JSON.stringify({
    //        text: `New lead from ${source || 'website'}: ${name} (${email})`,
    //      }),
    //    });
    // ─────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: "We'll be in touch within 24 hours" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
