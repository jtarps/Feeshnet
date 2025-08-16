import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const openings = [
    {
      title: "Creative Producer",
      location: "Remote / Lagos",
      type: "Full-time",
    },
    {
      title: "Events Manager",
      location: "Remote / Global",
      type: "Full-time",
    },
    {
      title: "Talent Partnerships Lead",
      location: "Remote / US",
      type: "Full-time",
    },
    {
      title: "Growth & Distribution Strategist",
      location: "Remote",
      type: "Full-time",
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Navbar alwaysHamburger={true} />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="fade-in space-y-16">
            <section className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-navy mb-8">Careers</h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We're looking for creatives, operators, and strategists who share our vision of connecting global
                communities through storytelling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-navy mb-8">Current Openings</h2>
              <div className="space-y-6">
                {openings.map((job, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium text-navy mb-2">{job.title}</h3>
                      <p className="text-gray-600">
                        {job.location} • {job.type}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-navy text-navy hover:bg-navy hover:text-white minimal-hover bg-transparent"
                    >
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center border-t border-gray-200 pt-16">
              <h2 className="text-2xl font-light text-navy mb-6">Don't see your role?</h2>
              <p className="text-lg text-gray-700 mb-8">We're always open to exceptional talent.</p>
              <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3">Pitch us your role</Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
