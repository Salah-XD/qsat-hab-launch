import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_aFGL7xtw_6hH9jovhPHQnFxaKt1AEzXL6")

export async function POST(req: NextRequest) {
  console.log('=== Registration API Called ===')
  
  try {
    const body = await req.json()
    console.log('Request body received:', { fullName: body.fullName, email: body.email, participationStatus: body.participationStatus })
    
    const { fullName, email, participationStatus } = body

    // Validate input
    if (!fullName || !email || !participationStatus) {
      console.log('Validation failed: Missing fields')
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format')
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      )
    }

    console.log('Sending confirmation email to user...')
    // Send email to user (confirmation)
    const userEmailResult = await resend.emails.send({
      from: "QSAT Mission <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to the QSAT Mission! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 Welcome to QSAT Mission!</h1>
              </div>
              <div class="content">
                <h2>Hello ${fullName}!</h2>
                <p>Thank you for registering with the QSAT mission. We're thrilled to have you on board!</p>
                
                <p><strong>Your Registration Details:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${fullName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Status:</strong> ${participationStatus}</li>
                </ul>

                <p>As a registered member, you'll receive:</p>
                <ul>
                  <li>✅ Exclusive mission updates</li>
                  <li>✅ Free educational courses</li>
                  <li>✅ Early access to special events</li>
                  <li>✅ Community resources and support</li>
                </ul>

                <div style="text-align: center;">
                  <a href="https://yourwebsite.com" class="button">Access Your Dashboard</a>
                </div>

                <p>Stay tuned for more updates. The future of quantum technology is here!</p>
                
                <p>Best regards,<br><strong>The QSAT Team</strong></p>
              </div>
              <div class="footer">
                <p>© 2024 QSAT Mission. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })
    console.log('User email sent successfully:', userEmailResult)

    console.log('Sending notification email to admin...')
    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: "QSAT Mission <onboarding@resend.dev>",
      to: "qsattech@gmail.com",
      subject: "New QSAT Registration",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>New Registration Received</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Participation Status:</strong> ${participationStatus}</p>
            <p><strong>Registered at:</strong> ${new Date().toLocaleString()}</p>
          </body>
        </html>
      `,
    })
    console.log('Admin email sent successfully:', adminEmailResult)

    console.log('Registration completed successfully')
    return NextResponse.json(
      { message: "Registration successful" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Registration error:", error)
    let errorMessage = "Unknown error";
    let errorName = "";
    let errorStack = "";

    if (typeof error === "object" && error !== null) {
      errorMessage = (error as { message?: string }).message ?? "Unknown error";
      errorName = (error as { name?: string }).name ?? "";
      errorStack = (error as { stack?: string }).stack ?? "";
    }

    console.error("Error details:", {
      message: errorMessage,
      name: errorName,
      stack: errorStack
    })
    return NextResponse.json(
      { message: `Failed to process registration: ${errorMessage}` },
      { status: 500 }
    )
  }
}