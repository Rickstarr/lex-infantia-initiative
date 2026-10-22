
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipient = "lexinfantia.official@gmail.com";


export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // Validate the submitted fields.
    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !subject ||
      !["Partnership", "Programmes", "Volunteering", "General enquiry"].includes(subject) ||
      !message ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { message: "Please check your details and try again." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Lex Infantia Website <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `Website Enquiry: ${subject}`,
      text: [
        "New enquiry from the Lex Infantia Initiative website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Enquiry type: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "We couldn't send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Your enquiry has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
