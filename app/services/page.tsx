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
          <div className="fade-in space-y-16">
            <section className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-navy mb-8">
                Services
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you're a creator looking to scale or a brand seeking
                authentic connections, we bridge the gap between culture and
                commerce.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-16">
              <section>
                <div className="mb-8">
                  <Image
                    src="/jay_riceman.jpg"
                    alt="Jay Riceman - Creator"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-3xl font-light text-navy mb-8">
                  For Creators
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    More reach. Better deals. Real support.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">
                        International brand partnerships
                      </p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Audience growth strategy</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">Creator collaborations</p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">
                        Content production support
                      </p>
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
                    alt="Brand marketing"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-3xl font-light text-navy mb-8">
                  For Brands
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tap into culture that travels.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">
                        Culturally fluent campaigns
                      </p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">
                        ROI-driven influencer marketing
                      </p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">
                        Branded events & experiences
                      </p>
                    </div>
                    <div className="border-l-2 border-orange pl-4">
                      <p className="text-gray-700">
                        Cross-border audience insights
                      </p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 bg-transparent"
                      >
                        Request media kit
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
