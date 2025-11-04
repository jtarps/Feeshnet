import Navbar from "@/components/navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar alwaysHamburger={true} />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            <section>
              <h1 className="text-4xl md:text-5xl font-light text-navy mb-8 leading-tight">
                Powering Global Creators
              </h1>
              <div className="text-xl text-gray-700 space-y-6 leading-relaxed">
                <p>
                  Feeshnet Media connects creators with opportunities beyond
                  their local markets and helps companies tell compelling
                  stories. Our focus is twofold: cross‑border influencer
                  partnerships—linking creators (especially across Africa and
                  the diaspora) with brands in North America—and
                  end‑to‑end marketing, content, and branding for companies,
                  including hiring and running content teams.
                </p>
                {/* <p>
                  From managing international talent to launching viral content
                  and unforgettable in-person experiences, we create moments
                  that connect people across borders.
                </p> */}
                {/* <p>
                  We are proudly born in the diaspora and built for the world.
                </p> */}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-navy mb-12">
                What We Do
              </h2>
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="h-auto">
                    <h3 className="text-xl font-medium text-navy mb-3">
                      Cross‑Border Influencer Partnerships
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We connect global creators with brands outside their local markets. Creators
                      gain access to better‑funded campaigns and new audiences,
                      while brands reach diaspora communities with culturally
                      fluent storytellers.
                    </p>
                  </div>
                  <div className="h-auto">
                    <h3 className="text-xl font-medium text-navy mb-3">
                      Marketing, Content & Branding
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We plan, produce, and manage marketing and content
                      end‑to‑end for companies. We hire and run dedicated content teams (video
                      editors, graphic designers, and more) for healthcare and service-based businesses.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* <section>
              <h2 className="text-3xl font-light text-navy mb-12">
                Our Founder
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/jaydee_point.jpg"
                      alt="Jaydee Tarpeh - Founder & Chairman"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-navy mb-1">
                    Jaydee Tarpeh
                  </h3>
                  <p className="text-orange mb-2">Founder & Chairman</p>
                  <p className="text-sm text-gray-600">
                    Leading global creator strategy
                  </p>
                </div> */}
            {/* <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Team Member"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-navy mb-1">
                    Marcus Chen
                  </h3>
                  <p className="text-orange mb-2">Head of Content</p>
                  <p className="text-sm text-gray-600">
                    AI-powered storytelling expert
                  </p>
                </div> */}
            {/* <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Team Member"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-navy mb-1">
                    Amara Okafor
                  </h3>
                  <p className="text-orange mb-2">VP of Talent</p>
                  <p className="text-sm text-gray-600">
                    Global talent partnerships
                  </p>
                </div> */}
            {/* </div>
            </section> */}

            {/* <section className="border-t border-gray-200 pt-16">
              <h2 className="text-3xl font-light text-navy mb-8">
                Using Creativity to Power Change
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe media can inspire global transformation. That's why
                10% of all revenue goes to the{" "}
                <a
                  href="https://www.reimagineafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-medium hover:text-navy transition-colors"
                >
                  Reimagine Africa Foundation
                </a>
                —a nonprofit driving innovation and opportunity across Africa.
              </p>
            </section> */}
          </div>
        </div>
      </main>
    </div>
  );
}
