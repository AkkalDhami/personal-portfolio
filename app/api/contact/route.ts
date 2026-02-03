import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/validators/contact";
import { getClientIP, checkRateLimit } from "@/lib/rate-limit";
import { SECONDARY_EMAIL } from "@/lib/constants";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const { allowed, remaining } = checkRateLimit(clientIP);

  if (!allowed) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later."
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: z.flattenError(result.error).fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message, device } = result.data;
    const location = await fetch(`https://ipapi.co/${clientIP}/json/`)
      .then(res => res.json())
      .then(data => `${data.city}, ${data.country_name}, ${data.region}`);

    await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: process.env.CONTACT_EMAIL || SECONDARY_EMAIL,
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ccc;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Date:</strong> ${new Date().toDateString()}</p>
        <p><strong>Ip:</strong> ${clientIP}</p>
        <p><strong>Location:</strong> ${location || "Unknown"}</p>
        <p><strong>Device:</strong> ${device || "Unknown"}</p>
      </div>
      `
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      remaining
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later."
      },
      { status: 500 }
    );
  }
}
