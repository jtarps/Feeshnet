import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar alwaysHamburger={true} />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-light text-navy mb-16 text-center">
              Contact
            </h1>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <form
                  action="https://formspree.io/f/mgvznrba"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      I am a...
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="creator">Creator</option>
                      <option value="business">Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="social_handle"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Social Media Handle (optional)
                    </label>
                    <input
                      type="text"
                      id="social_handle"
                      name="social_handle"
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-vertical"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-navy hover:bg-navy/90 text-white px-8 py-3 text-lg rounded-md transition-colors duration-200 cursor-pointer border-none outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-navy mb-2">
                    General
                  </h3>
                  <a
                    href="mailto:hello@feeshnet.com"
                    className="text-gray-700 minimal-hover"
                  >
                    hello@feeshnet.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy mb-2">Press</h3>
                  <a
                    href="mailto:hello@feeshnet.com"
                    className="text-gray-700 minimal-hover"
                  >
                    hello@feeshnet.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy mb-2">
                    Partnerships
                  </h3>
                  <a
                    href="mailto:hello@feeshnet.com"
                    className="text-gray-700 minimal-hover"
                  >
                    hello@feeshnet.com
                  </a>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-navy mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/feeshnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-orange transition-colors"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.663.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/feeshnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-orange transition-colors"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
