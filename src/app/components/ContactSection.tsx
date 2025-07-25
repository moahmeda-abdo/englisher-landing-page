"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
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
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full h-[700px] flex items-center !bg-[#F3F3F3] relative">
      {/* Left Side - Dark Form Section */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center py-[75px] px-8 lg:px-16 lg:rounded-r-lg">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              A concise guide to mastering American English pronunciation with
              essential techniques, practical exercises, and strategies for
              confident, fluent communication.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                placeholder="Name"
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Message"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-900/30 border border-green-500 text-green-400 rounded-lg text-sm">
                Thank you for your message! We&apos;ll get back to you within 24
                hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-900/30 border border-red-500 text-red-400 rounded-lg text-sm">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Right Side - Red Englisher Logo Section */}
      <div className="hidden lg:flex w-1/2 h-[80%] bg-[url('/images/assets/send_message.png')] bg-cover bg-top">
        {/* Background Image */}

      </div>
    </section>
  );
}
