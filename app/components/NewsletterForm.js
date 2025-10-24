'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create the email content
      const emailContent = {
        name: "Newsletter Subscription",
        message: `
New Newsletter Subscription from Website

Email: ${email}
Date: ${new Date().toLocaleString()}

---
IMPORTANT: Please add this email to the newsletter mailing list.
        `.trim()
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: 'Newsletter Subscriber',
          from_email: email,
          to_name: 'TFC Limited',
          message: emailContent.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Newsletter subscription sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setEmail('');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full px-6 py-3 rounded-full text-white placeholder-white focus:outline-none focus:ring-2 ${
              errorMessage ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-white'
            }`}
            disabled={isSubmitting}
          />
          {errorMessage && (
            <p className="text-red-200 text-sm mt-2 px-2">{errorMessage}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="text-center">
          <p className="text-white bg-green-600/30 border border-green-400 rounded-full px-6 py-2 inline-block">
            ✓ Thank you for subscribing! Check your email for confirmation.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="text-center">
          <p className="text-white bg-red-600/30 border border-red-400 rounded-full px-6 py-2 inline-block">
            ✗ Oops! Something went wrong. Please try again.
          </p>
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;
