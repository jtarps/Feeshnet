"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function RosterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("subject", "Request Full Roster");

    try {
      const response = await fetch("https://formspree.io/f/mgvznrba", {
        method: "POST",
        body: formDataToSend,
      });

      // Formspree returns 200 for successful submissions
      if (response.status === 200 || response.status === 302) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus("");
        }, 2000);
      } else {
        console.log("Formspree response status:", response.status);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const creators = [
    {
      name: "Jaydee Tarps",
      handle: "@jaydeespeaks",
      segment: "Education & Entertainment",
      image: "/jaydee_point.jpg",
      mainLink: "https://tiktok.com/@jaydeespeaks",
    },
    {
      name: "Jaydee & Mini",
      handle: "@jaydeeandmini",
      segment: "Family & Lifestyle",
      image: "/jaydee_mini.jpg",
      mainLink: "https://tiktok.com/@jaydeeandmini",
    },
    {
      name: "Jay Riceman",
      handle: "@jaydeetarps",
      segment: "Health and Wellness",
      image: "/jay_riceman.jpg",
      mainLink: "https://instagram.com/jaydeetarps",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar alwaysHamburger={true} />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-light text-navy mb-16 text-center">
              Our Roster
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              {creators.map((creator, index) => (
                <div key={index} className="text-center minimal-hover">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-navy mb-1">
                    {creator.name}
                  </h3>
                  <a
                    href={creator.mainLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange mb-1 hover:text-navy transition-colors cursor-pointer"
                  >
                    {creator.handle}
                  </a>
                  <p className="text-gray-600 mb-3">{creator.segment}</p>
                </div>
              ))}
            </div>

            {/* Request Full Roster Button */}
            <div className="text-center mt-20">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-orange text-white px-8 py-4 rounded-lg hover:bg-navy transition-colors duration-300 font-medium"
              >
                Request Full Roster
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-navy">
                Request Full Roster
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-6xl mb-4">✓</div>
                <h3 className="text-xl font-medium text-navy mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you soon with our full roster.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent resize-none"
                    placeholder="Tell us about your project or specific requirements..."
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">
                    Something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange text-white py-3 px-6 rounded-lg hover:bg-navy transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
