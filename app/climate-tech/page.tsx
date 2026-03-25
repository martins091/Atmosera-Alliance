import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Lightbulb, Rocket, Code, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClimateTechPage() {
  const programs = [
    {
      icon: Lightbulb,
      title: "Climate Leadership Bootcamp",
      description:
        "Intensive 6-month program combining climate science, leadership skills, and innovation workshops. Participants work on real-world projects, learn from industry experts, and develop actionable climate solutions for their communities.",
      outcomes: [
        "Technical climate knowledge",
        "Project management skills",
        "Public speaking & advocacy",
        "Network of changemakers",
      ],
    },
    {
      icon: Code,
      title: "Innovation Lab",
      description:
        "Hands-on maker space where youth design, prototype, and test climate-tech solutions. Access to 3D printers, IoT kits, sensors, and mentorship from engineers and entrepreneurs to bring innovative ideas to life.",
      outcomes: ["Design thinking skills", "Prototyping & testing", "Tech entrepreneurship", "Patent & IP guidance"],
    },
    {
      icon: Rocket,
      title: "Campus Climate Movement",
      description:
        "Student-led initiative spreading across universities and high schools. Members organize awareness campaigns, sustainability audits, policy advocacy, and collaborative projects that drive institutional change.",
      outcomes: ["Campus-wide impact", "Policy change skills", "Coalition building", "Media & communications"],
    },
  ]

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
              Youth Climate Hub at Atmosera Alliance
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Empowering the next generation of climate leaders and innovators
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src="/young-people-presenting-at-technology-conference.jpg"
                alt="Youth climate leaders"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#003D73] mb-6">Building Tomorrow's Climate Leaders</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Young people are not just the future — they are the present drivers of climate action. Atmosera
                Alliance provides the training, tools, and support system for youth to develop innovative solutions,
                lead community projects, and advocate for systemic change.
              </p>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className="max-w-5xl mx-auto">
                <div className="rounded-2xl p-8 md:p-12 bg-white shadow-lg border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2AA948] to-[#6ECFF6] flex items-center justify-center">
                        <program.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#003D73] mb-4">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="text-sm font-bold text-[#003D73] mb-4 uppercase tracking-wide flex items-center gap-2">
                          <Trophy className="w-4 h-4" />
                          Key Outcomes
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#2AA948]" />
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003D73] mb-4">Youth Hub Impact</h2>
            <p className="text-lg text-gray-600">Measurable results from Atmosera Alliance youth empowerment programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: "2,500+", label: "Youth Trained", color: "from-[#6ECFF6] to-[#003D73]" },
              { number: "150+", label: "Projects Launched", color: "from-[#2AA948] to-[#1a7d34]" },
              { number: "35", label: "Awards Won", color: "from-[#6ECFF6] to-[#2AA948]" },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-100 hover:scale-105 transition-transform"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#003D73] via-[#003D73] to-[#001a33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Lead Climate Action?</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join Atmosera Alliance youth programs and become part of a global movement building sustainable futures
            </p>
            <Button
              size="lg"
              className="bg-[#2AA948] hover:bg-[#2AA948]/90 text-white font-semibold px-12 py-6 text-lg"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}