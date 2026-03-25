import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HandHeart, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#003D73] via-[#003D73] to-[#001a33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Get Involved with Atmosera Alliance
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Every action matters — join us in building a sustainable future for communities and the planet
            </p>
          </div>
        </div>
      </section>

      {/* Involvement Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/tree-planting-community-volunteers-in-forest.jpg"
                alt="Community involvement with Atmosera Alliance"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {[
              {
                icon: HandHeart,
                title: "Volunteer",
                description:
                  "Join Atmosera Alliance field teams, help organize events, mentor youth, or contribute your professional skills to advance our climate mission.",
                action: "Sign Up to Volunteer",
                href: "/contact",
                color: "from-[#6ECFF6] to-[#003D73]",
              },
              {
                icon: Building2,
                title: "Partner",
                description:
                  "Organizations, corporations, and institutions can collaborate with Atmosera Alliance on research, technology deployment, or funding initiatives.",
                action: "Explore Partnerships",
                href: "/contact",
                color: "from-[#6ECFF6] to-[#2AA948]",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 bg-white shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center`}
                  >
                    <option.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#003D73] mb-4">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>
                <Link href={option.href}>
                  <Button className="bg-[#003D73] hover:bg-[#003D73]/90 text-white font-semibold w-full">
                    {option.action}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-[#003D73] via-[#003D73] to-[#001a33] rounded-2xl p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-5">
                <div className="grid-background" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Be Part of the Change</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Whether you volunteer your time or partner with Atmosera Alliance, your involvement directly contributes
                  to climate monitoring technology, youth training programs, and community environmental projects.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#2AA948] hover:bg-[#2AA948]/90 text-white font-semibold px-12">
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link href="/our-work">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 font-semibold px-12 bg-transparent"
                    >
                      See Our Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}