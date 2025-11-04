import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar alwaysHamburger={true} />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            <section className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-navy mb-8">
                What We Do
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We focus on two things: connecting global creators with brands beyond
                their local markets, and providing end-to-end marketing, content, and
                branding for companies—including hiring and running content teams.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-16">
              <section>
                <div className="mb-8">
                  <Image
                    src="/jay_riceman.jpg"
                    alt="Creator partnerships"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-3xl font-light text-navy mb-8">
                  Cross‑Border Influencer Partnerships
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We connect global creators with
                    well‑funded brands in North America and other markets to unlock
                    bigger opportunities and audiences.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">International brand partnerships</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Diaspora audience growth</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Creator collaborations</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Content production support</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3">
                        Apply to be represented
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-8">
                  <Image
                    src="/forbrands.png"
                    alt="Marketing and content teams for companies"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-3xl font-light text-navy mb-8">
                  Marketing, Content & Branding for Companies
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We plan, produce, and run marketing, content, and branding for
                    companies—and we hire and manage content teams (video editors,
                    graphic designers, and more).
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">End‑to‑end marketing & content</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Brand strategy & creative direction</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Hire and run content teams</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Cross‑border audience insights</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 bg-transparent"
                      >
                        Book a consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
