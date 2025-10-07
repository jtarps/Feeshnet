import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GraphicDesignerJobPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar alwaysHamburger={true} />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article className="prose prose-neutral max-w-none text-navy">
            <div className="mb-6">
              <Button
                asChild
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white minimal-hover bg-transparent"
              >
                <Link href="/careers">← Back to careers</Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Graphic Designer
            </h1>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">About Feeshnet Media</h2>
              <p>
                Feeshnet Media is a digital marketing agency specializing in
                healthcare and service-based businesses. We create authentic,
                compelling content that helps our clients connect with their
                audiences and grow their impact.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">About This Role</h2>
              <p>
                You'll be creating visual content for a home healthcare company
                that provides compassionate care services to seniors and their
                families. This is an opportunity to use your design skills to
                help families discover and connect with quality care services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Position Overview</h2>
              <p>
                We're seeking a versatile Graphic Designer to join our team and
                create visual content supporting our home healthcare client's
                marketing efforts across digital and print channels. This
                part-time remote role requires someone who can translate a warm,
                professional brand into compelling visuals that resonate with
                adult children caring for aging parents.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Key Responsibilities</h2>
              <h3 className="text-xl font-medium mb-2">
                Social Media Graphics
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Design 15-20 social media graphics per week (Instagram,
                  Facebook, LinkedIn, TikTok)
                </li>
                <li>
                  Create templates for recurring post types (quotes, tips,
                  announcements)
                </li>
                <li>Design Instagram Story and Highlight covers</li>
                <li>
                  Develop carousel posts and infographics for educational
                  content
                </li>
                <li>
                  Ensure all social graphics are optimized for each platform's
                  specifications
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Marketing Materials
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Design email newsletter templates and promotional graphics
                </li>
                <li>
                  Create blog post featured images and in-article graphics
                </li>
                <li>
                  Develop downloadable resources (PDF guides, checklists,
                  worksheets)
                </li>
                <li>
                  Design one-pagers, brochures, and print materials as needed
                </li>
                <li>
                  Create presentation templates for sales and business
                  development
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Brand Consistency
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Maintain and expand brand style guide with templates and
                  assets
                </li>
                <li>
                  Ensure visual consistency across all marketing touchpoints
                </li>
                <li>Organize and maintain digital asset library</li>
                <li>Create brand guidelines for team reference</li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-2">Collaboration</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Work closely with Content Writer and Social Media Manager on
                  the team
                </li>
                <li>Translate content briefs into visual concepts</li>
                <li>Incorporate feedback efficiently with quick turnaround</li>
                <li>Suggest visual improvements to enhance message delivery</li>
                <li>Communicate effectively in a remote agency environment</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                Required Skills & Qualifications
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>2-4 years of professional graphic design experience</li>
                <li>
                  Strong portfolio showcasing social media graphics and digital
                  marketing materials
                </li>
                <li>
                  Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                  InDesign)
                </li>
                <li>
                  Experience with Canva and creating templates for non-designers
                </li>
                <li>
                  Understanding of design principles (typography, color theory,
                  composition)
                </li>
                <li>
                  Ability to design for accessibility (contrast, readability,
                  alt text considerations)
                </li>
                <li>Fast turnaround time with strong attention to detail</li>
                <li>
                  Comfortable working in a remote agency environment with
                  multiple stakeholders
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                Preferred Qualifications
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Experience designing for healthcare, senior care, or service
                  industries
                </li>
                <li>
                  Motion graphics or basic video editing skills (After Effects,
                  Premiere Pro)
                </li>
                <li>Understanding of print production and file preparation</li>
                <li>Photography editing and retouching skills</li>
                <li>
                  Knowledge of current design trends, especially in healthcare
                  marketing
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                Technical Requirements
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Adobe Creative Cloud subscription (or proficiency with
                  alternatives)
                </li>
                <li>
                  Reliable internet connection for file sharing and
                  collaboration
                </li>
                <li>
                  Ability to work with Google Drive, Dropbox, or similar
                  platforms
                </li>
                <li>
                  Access to stock photo resources (we can provide if needed)
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Work Schedule</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Part-time remote position (20 hours/week)</li>
                <li>Flexible hours with 24-48 hour turnaround expectations</li>
                <li>
                  Some availability during US business hours for meetings and
                  quick requests
                </li>
                <li>Potential to grow to full-time as needs expand</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                Compensation & Benefits
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Competitive rates based on experience and location</li>
                <li>Fully remote work environment with flexible scheduling</li>
                <li>
                  Opportunity to work with a mission-driven healthcare client
                </li>
                <li>
                  Collaborative team environment with regular feedback and
                  support
                </li>
                <li>Professional development opportunities</li>
                <li>Potential for growth as the agency and client expand</li>
                <li>
                  Work that makes a meaningful difference in people's lives
                </li>
              </ul>
              <p className="mt-2">
                Payment: Paid monthly via international payment platform.
                Performance bonuses for exceptional work and results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-3">How to Apply</h2>
              <p className="mb-3">Please submit:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Resume/CV highlighting relevant experience</li>
                <li>
                  Portfolio link or PDF with 8-10 samples showing (social
                  graphics, marketing materials, brand consistency)
                </li>
                <li>
                  Send your application to{" "}
                  <a className="underline" href="mailto:hello@feeshnet.com">
                    hello@feeshnet.com
                  </a>
                </li>
              </ul>

              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-medium mb-4">
                  Apply with this form
                </h3>
                <form
                  action="https://formspree.io/f/mgvznrba"
                  method="POST"
                  className="space-y-5"
                >
                  <input
                    type="hidden"
                    name="subject"
                    value="Application: Graphic Designer"
                  />
                  <input type="hidden" name="role" value="Graphic Designer" />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full name
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
                      Email
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
                      htmlFor="portfolio"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      placeholder="https://..."
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-navy hover:bg-navy/90 text-white px-8 py-3 text-lg rounded-md transition-colors duration-200 cursor-pointer border-none outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                  >
                    Submit application
                  </button>
                </form>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
