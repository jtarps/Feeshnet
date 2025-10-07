import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VideoEditorJobPage() {
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
              Video Editor
            </h1>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">About the Role</h2>
              <p>
                We're seeking a skilled video editor to transform raw footage
                into engaging, scroll-stopping content across multiple social
                media platforms. You'll be editing content for three distinct
                channels covering viral facts, health/prediabetes education, and
                lifestyle/travel content.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                What You'll Be Editing
              </h2>
              <h3 className="text-xl font-medium mb-2">
                Short-Form Content (Primary Focus):
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>TikTok videos (15-60 seconds)</li>
                <li>Instagram Reels (15-90 seconds)</li>
                <li>YouTube Shorts (under 60 seconds)</li>
                <li>Quick-cut food comparison videos</li>
                <li>Blood sugar testing reaction videos</li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Long-Form Content (Occasional):
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>YouTube videos (8-15 minutes)</li>
                <li>Travel vlogs</li>
                <li>In-depth educational content</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Edit 12-20 short-form videos per week</li>
                <li>Edit 1-3 long-form videos per month</li>
                <li>Create eye-catching thumbnails for YouTube content</li>
                <li>Add text overlays, captions, and graphics</li>
                <li>Color correction and audio enhancement</li>
                <li>Select and sync background music</li>
                <li>
                  Apply transitions, effects, and animations that match current
                  trends
                </li>
                <li>
                  Repurpose content across multiple platforms with
                  platform-specific optimizations
                </li>
                <li>Maintain consistent visual branding across all content</li>
                <li>Archive and organize all project files</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                What We're Looking For
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Experience: 1-2+ years editing social media content (creator
                  or brand experience preferred)
                </li>
                <li>
                  Technical Skills: Proficient in editing software (Adobe
                  Premiere, Final Cut Pro, DaVinci Resolve, or CapCut Pro)
                </li>
                <li>
                  Platform Knowledge: Deep understanding of what works on
                  TikTok, Instagram, and YouTube
                </li>
                <li>
                  Trend Awareness: Stays current with viral editing styles,
                  transitions, and effects
                </li>
                <li>
                  Speed & Efficiency: Can turn around short-form edits within
                  24-48 hours
                </li>
                <li>
                  Creative Eye: Strong sense of pacing, storytelling, and visual
                  composition
                </li>
                <li>
                  Attention to Detail: Clean cuts, smooth transitions, balanced
                  audio
                </li>
                <li>
                  Communication: Responsive and able to implement feedback
                  quickly
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                Technical Requirements
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reliable computer capable of handling video editing</li>
                <li>Stable internet connection for file transfers</li>
                <li>Access to professional editing software</li>
                <li>Ability to work with 4K footage</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Nice to Have</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Experience editing health/wellness or educational content
                </li>
                <li>Motion graphics skills (After Effects)</li>
                <li>Thumbnail design experience (Photoshop, Canva)</li>
                <li>
                  Understanding of accessibility (captions, visual clarity)
                </li>
                <li>
                  Portfolio showing work in lifestyle, travel, or health niches
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Style Reference</h2>
              <p>Our content style includes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fast-paced, engaging edits with strong hooks</li>
                <li>Clean, professional look (not overly flashy)</li>
                <li>Strategic use of text overlays and captions</li>
                <li>
                  Smooth transitions that enhance (not distract from) content
                </li>
                <li>Consistent branding elements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Details</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Type: Freelance/Contract</li>
                <li>Workload: 15-20 hours per week</li>
                <li>Rate: Competitive based on experience</li>
                <li>Location: Remote</li>
                <li>Start Date: Immediate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-3">How to Apply</h2>
              <p className="mb-3">Please submit:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Your resume or relevant experience to{" "}
                  <a className="underline" href="mailto:hello@feeshnet.com">
                    hello@feeshnet.com
                  </a>
                </li>
                <li>
                  Portfolio or reel showing 5-8 examples of your work (must
                  include short-form content)
                </li>
                <li>
                  Links to social media accounts you've edited for (if
                  available)
                </li>
                <li>
                  Your typical turnaround time for a 30-second short-form video
                </li>
                <li>Your preferred editing software</li>
              </ul>
              <p className="mt-4">
                Bonus: If you want to stand out, edit a 30-second sample video
                using any stock footage showing your style and skills.
              </p>
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
                    value="Application: Video Editor"
                  />
                  <input type="hidden" name="role" value="Video Editor" />

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
                      Portfolio or reel URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      placeholder="https://..."
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Notes (experience, tools, turnaround)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-vertical"
                    ></textarea>
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
