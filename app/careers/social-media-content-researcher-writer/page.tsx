import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialMediaContentResearcherWriterJobPage() {
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
              Social Media Content Researcher & Writer
            </h1>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">About the Role</h2>
              <p>
                We're looking for a creative content researcher and writer to
                help scale our social media presence across three distinct
                channels. You'll be responsible for researching trending topics,
                writing engaging scripts, and developing content that drives
                comments, shares, and community engagement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                What You'll Be Working On
              </h2>
              <h3 className="text-xl font-medium mb-2">
                Channel 1: Viral Facts & Stories
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Research and curate fascinating facts, interesting stories,
                  and engaging content
                </li>
                <li>
                  Write scripts designed to spark conversation and drive
                  comments
                </li>
                <li>
                  Identify trending topics and viral content formats to adapt
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Channel 2: Prediabetes & Health Content
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Write scripts for blood sugar testing videos and food
                  comparison content
                </li>
                <li>
                  Research nutrition facts and develop "food vs. food"
                  comparison shorts
                </li>
                <li>
                  Create educational content that's engaging and accessible (not
                  clinical)
                </li>
                <li>Stay current on health trends and audience questions</li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Channel 3: Lifestyle & Travel
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Write travel video scripts based on our experiences</li>
                <li>
                  Brainstorm and script creative ideas for couple's content
                </li>
                <li>Develop storylines and concepts for lifestyle content</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Research 10-15 content ideas per week across all three
                  channels
                </li>
                <li>
                  Write 8-12 scripts per week (mix of long-form and short-form)
                </li>
                <li>
                  Develop content calendars and maintain posting consistency
                </li>
                <li>Analyze top-performing content and identify patterns</li>
                <li>Create engaging hooks, captions, and calls-to-action</li>
                <li>
                  Adapt content for different platforms (YouTube, TikTok,
                  Instagram, etc.)
                </li>
                <li>
                  Monitor comments and suggest content based on audience
                  questions
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">
                What We're Looking For
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Writing Experience: 1-2+ years writing social media content,
                  preferably for creators or brands
                </li>
                <li>
                  Research Skills: Ability to quickly find credible sources,
                  trending topics, and interesting angles
                </li>
                <li>
                  Health Knowledge: Basic understanding of nutrition, blood
                  sugar, and prediabetes (willing to learn)
                </li>
                <li>
                  Platform Savvy: Deep understanding of what works on TikTok,
                  Instagram Reels, and YouTube Shorts
                </li>
                <li>
                  Audience Understanding: Knows how to write content that drives
                  engagement and comments
                </li>
                <li>
                  Voice Matching: Ability to write in different tones -
                  educational, entertaining, personal
                </li>
                <li>
                  Self-Starter: Can work independently with minimal direction
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Nice to Have</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Experience writing for health/wellness creators</li>
                <li>
                  Background in nutrition, health coaching, or related field
                </li>
                <li>Personal experience creating content on social media</li>
                <li>Understanding of SEO and keyword optimization</li>
                <li>Familiarity with content planning tools</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-3">Details</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Type: Freelance/Contract</li>
                <li>Hours: 15-20 hours per week (flexible schedule)</li>
                <li>Rate: Competitive based on experience</li>
                <li>Location: Remote</li>
                <li>Start Date: Immediate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-3">How to Apply</h2>
              <p className="mb-3">Please submit:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your resume or relevant experience</li>
                <li>
                  3-5 writing samples (social media scripts, captions, or
                  similar content)
                </li>
                <li>
                  Brief explanation of your experience with health/wellness
                  content (if any)
                </li>
                <li>
                  2-3 content ideas for a prediabetes channel (just brief
                  concepts)
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
                    value="Application: Social Media Content Researcher & Writer"
                  />
                  <input
                    type="hidden"
                    name="role"
                    value="Social Media Content Researcher & Writer"
                  />

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
                      htmlFor="samples"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Links to 3-5 writing samples
                    </label>
                    <textarea
                      id="samples"
                      name="samples"
                      rows={3}
                      placeholder="Paste URLs to your scripts, posts, or docs"
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-vertical"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="ideas"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      2-3 short ideas for a prediabetes channel
                    </label>
                    <textarea
                      id="ideas"
                      name="ideas"
                      rows={4}
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
