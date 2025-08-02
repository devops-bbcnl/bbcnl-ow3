import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
	console.log('Received request to /api/contact');

	try {
		const body = await request.json();
		console.log('Request body:', JSON.stringify(body, null, 2));

		const { name, email, subject, message } = body;

		if (!process.env.SMTP_HOST || !process.env.SMTP_PORT) {
			console.error('Missing required SMTP configuration');
			return NextResponse.json(
				{ error: 'Server configuration error' },
				{ status: 500 }
			);
		}

		console.log('Creating SMTP transporter with config:', {
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: process.env.SMTP_SECURE,
			user: process.env.SMTP_USER ? '***' : 'Not set',
			hasPass: !!process.env.SMTP_PASS,
		});

		// Gmail SMTP configuration
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 587,
			secure: false, // upgrade later with STARTTLS
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			tls: {
				rejectUnauthorized: false // For self-signed certificates
			},
			requireTLS: true,
			connectionTimeout: 10000, // 10 seconds
			socketTimeout: 10000, // 10 seconds
			debug: true,
			logger: true
		});

		console.log('Connecting to Gmail SMTP with user:', 
			process.env.SMTP_USER ? `${process.env.SMTP_USER.split('@')[0].substring(0, 3)}...@gmail.com` : 'Not set'
		);

		// Test SMTP connection
		try {
			console.log('Testing SMTP connection...');
			await transporter.verify();
			console.log('SMTP connection successful');
		} catch (error) {
			console.error('SMTP connection failed:', error);
			throw new Error(
				`SMTP connection failed: ${
					error instanceof Error ? error.message : 'Unknown error'
				}`
			);
		}

		// Send mail with defined transport object
		console.log('Attempting to send email...');
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.EMAIL_TO, // Your email where you want to receive messages
			subject: subject || 'New Contact Form Submission',
			text: message,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		});

		return NextResponse.json({ message: 'Message sent successfully!' });
	} catch (error) {
		console.error('Error in contact form submission:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error';
		console.error('Full error details:', JSON.stringify(error, null, 2));

		return NextResponse.json(
			{
				error: 'Failed to send message. Please try again later.',
				details:
					process.env.NODE_ENV === 'development' ? errorMessage : undefined,
			},
			{ status: 500 }
		);
	}
}
