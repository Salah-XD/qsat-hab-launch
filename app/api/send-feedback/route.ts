import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_aFGL7xtw_6hH9jovhPHQnFxaKt1AEzXL6")

export async function POST(req: NextRequest) {
  console.log('=== Feedback API Called ===')
  
  try {
    const body = await req.json()
    console.log('Request body received:', { experience: body.experience?.substring(0, 50), interestLevel: body.interestLevel })
    
    const { experience, interestLevel } = body

    // Validate input
    if (!experience || !interestLevel) {
      console.log('Validation failed: Missing fields')
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    console.log('Sending feedback email to admin...')
    // Send feedback notification to admin
    const feedbackEmailResult = await resend.emails.send({
      from: "QSAT Mission <onboarding@resend.dev>",
      to: "qsattech@gmail.com",
      subject: "New QSAT Feedback Received 💬",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .feedback-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 5px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💬 New Feedback Received</h1>
              </div>
              <div class="content">
                <h2>Feedback Details</h2>
                
                <div class="feedback-box">
                  <div class="label">Interest Level:</div>
                  <p>${interestLevel}</p>
                </div>

                <div class="feedback-box">
                  <div class="label">Experience Shared:</div>
                  <p>${experience}</p>
                </div>

                <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })
    console.log('Feedback email sent successfully:', feedbackEmailResult)

    console.log('Feedback submitted successfully')
    return NextResponse.json(
      { message: "Feedback submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Feedback error:", error)
    console.error("Error details:", {
      message: error instanceof Error ? error.message : String(error),
      name: error instanceof Error ? error.name : "Unknown",
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { message: `Failed to submit feedback: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}