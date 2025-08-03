import nodemailer from 'nodemailer';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

// Gmail SMTP configuration
export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    console.warn('Email credentials not configured. Email will not be sent.');
    throw new Error('Email service is not properly configured');
  }

  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Bubble Barrel" <${process.env.EMAIL_FROM || 'noreply@bubblebarrel.nl'}>`,
      to,
      subject,
      html,
    });

    console.log('Message sent: %s', info.messageId);
    
    // Log the preview URL (for debugging)
    if (process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: https://mail.google.com');
    }

    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function sendSubscriptionConfirmation(email: string) {
  const unsubscribeUrl = `${process.env.NEXTAUTH_URL}/unsubscribe?email=${encodeURIComponent(email)}`;
  const subject = 'Thanks for Subscribing to Bubble Barrel!';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #3b82f6; font-size: 24px; margin-bottom: 10px;">Welcome to Bubble Barrel! 🧋</h1>
        <div style="height: 4px; width: 60px; background: #3b82f6; margin: 0 auto 20px;"></div>
      </div>
      
      <p>Hello there,</p>
      <p>Thank you for subscribing to our newsletter! You'll be the first to know about:</p>
      <ul style="margin: 15px 0; padding-left: 20px;">
        <li>🎉 New bubble tea flavors</li>
        <li>💝 Exclusive member offers</li>
        <li>📅 Upcoming events and promotions</li>
      </ul>
      
      <p>We're thrilled to have you in our bubble tea community! If you have any questions or need assistance, feel free to reply to this email.</p>
      
      <div style="margin: 30px 0; text-align: center;">
        <a href="${process.env.NEXTAUTH_URL}" style="display: inline-block; padding: 10px 20px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Store</a>
      </div>
      
      <p>Cheers,<br><strong>The Bubble Barrel Team</strong></p>
      
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
        <p style="margin: 0 0 10px 0;">
          You're receiving this email because you signed up for updates from Bubble Barrel.
          <br>
          Don't want to receive these emails anymore? 
          <a href="${unsubscribeUrl}" style="color: #3b82f6; text-decoration: underline;">Unsubscribe here</a>.
        </p>
        <p style="margin: 5px 0 0 0; font-size: 11px;">
          © ${new Date().getFullYear()} Bubble Barrel. All rights reserved.
          <br>
          <a href="${process.env.NEXTAUTH_URL}/privacy" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a> | 
          <a href="${process.env.NEXTAUTH_URL}/terms" style="color: #3b82f6; text-decoration: none; margin-left: 5px;">Terms of Service</a>
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: email,
    subject,
    html,
  });
}
