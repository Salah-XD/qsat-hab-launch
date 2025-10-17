import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_aFGL7xtw_6hH9jovhPHQnFxaKt1AEzXL6');

export async function POST(request: Request) {
  try {
    const { fullName, email, participationStatus } = await request.json();

    const data = await resend.emails.send({
      from: 'QSAT Registration <onboarding@resend.dev>',
      to: ['qsattech@gmail.com'],
      subject: '🚀 New QSAT Registration',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6; 
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
              }
              .container { 
                max-width: 600px; 
                margin: 20px auto; 
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              }
              .header { 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white; 
                padding: 30px 20px;
                text-align: center;
              }
              .header h2 {
                margin: 0;
                font-size: 24px;
              }
              .content { 
                padding: 30px;
              }
              .intro {
                font-size: 16px;
                color: #555;
                margin-bottom: 25px;
              }
              .field { 
                margin-bottom: 20px;
                border-left: 4px solid #667eea;
                padding-left: 15px;
              }
              .label { 
                font-weight: bold;
                color: #667eea;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value { 
                margin-top: 8px;
                font-size: 16px;
                color: #333;
              }
              .footer {
                background: #f9f9f9;
                padding: 20px;
                text-align: center;
                color: #777;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🚀 New QSAT Registration</h2>
              </div>
              <div class="content">
                <p class="intro">A new user has registered for the QSAT HAB Launch Program!</p>
                
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${fullName}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Participation Status</div>
                  <div class="value">${participationStatus}</div>
                </div>
                
                <div class="field">
                  <div class="label">Registration Time</div>
                  <div class="value">${new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the QSAT registration form</p>
                <p>© ${new Date().getFullYear()} QSAT HAB Launch Program</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending registration email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send registration email' },
      { status: 500 }
    );
  }
}