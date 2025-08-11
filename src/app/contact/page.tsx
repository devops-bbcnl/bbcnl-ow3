'use client';

import { useState } from 'react';
import {
	FiMail,
	FiPhone,
	FiMapPin,
	FiSend,
	FiCheck,
	FiAlertCircle,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Something went wrong');
			}

			setIsSubmitted(true);
			// Reset form after successful submission
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
		} catch (err) {
			console.error('Error submitting form:', err);
			setError(
				err instanceof Error
					? err.message
					: 'Failed to send message. Please try again.'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
			{/* Hero Section */}
			<section className="relative py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto px-4 sm:px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
					>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-gold-400">
							Get In Touch
						</h1>
						<p className="text-base sm:text-lg md:text-xl text-gray-300 px-2 sm:px-0">
							Have a project in mind or want to discuss potential opportunities?
							We&apos;d love to hear from you.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl"
						>
							<h2 className="text-2xl font-bold mb-6">Send us a message</h2>

							{isSubmitted ? (
								<div className="text-center py-12">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
										<FiCheck className="w-8 h-8 text-green-400" />
									</div>
									<h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
									<p className="text-gray-400">
										We&apos;ll get back to you soon.
									</p>
								</div>
							) : (
								<div>
									{error && (
										<div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 flex items-start">
											<FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
											<span>{error}</span>
										</div>
									)}
									<form
										onSubmit={handleSubmit}
										className="space-y-4 sm:space-y-6"
									>
										<div>
											<label
												htmlFor="name"
												className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2"
											>
												Your Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
												placeholder="John Doe"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2"
											>
												Email Address
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
												placeholder="you@example.com"
											/>
										</div>

										<div>
											<label
												htmlFor="subject"
												className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2"
											>
												Subject
											</label>
											<input
												type="text"
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												required
												className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
												placeholder="How can we help?"
											/>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2"
											>
												Your Message
											</label>
											<textarea
												id="message"
												name="message"
												rows={4}
												value={formData.message}
												onChange={handleChange}
												required
												className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all min-h-[120px]"
												placeholder="Tell us about your project..."
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className={`w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all text-sm sm:text-base ${
												isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
											}`}
										>
											{isSubmitting ? (
												<span className="flex items-center justify-center">
													<svg
														className="animate-spin -ml-1 mr-3 h-5 w-5 text-gold-400"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
													Sending...
												</span>
											) : (
												<span className="flex items-center justify-center text-gold-400">
													<FiSend className="mr-2" /> Send Message
												</span>
											)}
										</button>
									</form>
								</div>
							)}
						</motion.div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="space-y-6 sm:space-8 mt-8 lg:mt-0"
						>
							<div>
								<h2 className="text-2xl font-bold mb-6">Contact Information</h2>
								<p className="text-gray-400 mb-8">
									Have questions or want to discuss a project? Reach out to us
									using the information below or fill out the contact form.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="flex-shrink-0 bg-gold-400/10 p-2 sm:p-3 rounded-lg text-gold-400">
										<FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
									</div>
									<div className="ml-3 sm:ml-4">
										<h3 className="text-base sm:text-lg font-semibold">
											Email Us
										</h3>
										<a
											href="mailto:contact@bubblebarrel.dev"
											className="text-sm sm:text-base text-gray-400 hover:text-gold-400 transition-colors break-all"
										>
											contact@bubblebarrel.dev
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 bg-gold-400/10 p-2 sm:p-3 rounded-lg text-gold-400">
										<FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
									</div>
									<div className="ml-3 sm:ml-4">
										<h3 className="text-base sm:text-lg font-semibold">
											Call Us
										</h3>
										<a
											href="tel:+2348037674195"
											className="text-sm sm:text-base text-gray-400 hover:text-gold-400 transition-colors"
										>
											+234 803 767 4195
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 bg-gold-400/10 p-2 sm:p-3 rounded-lg text-gold-400">
										<FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />
									</div>
									<div className="ml-3 sm:ml-4">
										<h3 className="text-base sm:text-lg font-semibold">
											Visit Us
										</h3>
										<address className="text-sm sm:text-base text-gray-400 not-italic">
											7th Avenue Federal Housing Estate
											<br />
											Egbeada-Irete, Owerri
											<br />
											Imo State, Nigeria
										</address>
									</div>
								</div>
							</div>

							<div className="pt-4 sm:pt-6 border-t border-gray-800">
								<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
									Business Hours
								</h3>
								<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-400">
									<li className="flex justify-between">
										<span>Monday - Friday</span>
										<span>9:00 AM - 6:00 PM</span>
									</li>
									<li className="flex justify-between">
										<span>Saturday</span>
										<span>10:00 AM - 4:00 PM</span>
									</li>
									<li className="flex justify-between text-gray-600">
										<span>Sunday</span>
										<span>Closed</span>
									</li>
								</ul>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
