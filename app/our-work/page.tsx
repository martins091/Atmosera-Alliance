import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Brain, Trees, Sprout, GraduationCap, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OurWorkPage() {
  const projects = [
    {
      icon: Brain,
      title: "AI Climate Monitoring",
      description:
        "State-of-the-art monitoring stations equipped with IoT sensors and machine learning algorithms track temperature, rainfall, air quality, and environmental changes in real-time. Data feeds into predictive models that provide early warnings and adaptation strategies for vulnerable communities.",
      impact: [
        "45+ monitoring stations deployed",
        "1.2M data points analyzed daily",
        "150+ communities receiving alerts",
      ],
      color: "from-[#6ECFF6] to-[#003D73]",
    },
    {
      icon: Trees,
      title: "Reforestation & Restoration",
      description:
        "Community-led tree planting initiatives restore degraded landscapes, enhance biodiversity, and sequester carbon. We combine indigenous knowledge with modern forestry science to select native species and ensure long-term ecosystem health.",
      impact: ["100,000+ trees planted", "2,500 hectares restored", "75 local communities involved"],
      color: "from-[#2AA948] to-[#1a7d34]",
    },
    {
      icon: Sprout,
      title: "Climate-Smart Agriculture",
      description:
        "Training farmers in sustainable practices that increase resilience to climate variability. Programs include drought-resistant crops, soil conservation, water harvesting, and digital tools for weather forecasting and market access.",
      impact: ["1,200+ farmers trained", "30% yield increase", "Water usage reduced by 40%"],
      color: "from-[#2AA948] to-[#6ECFF6]",
    },
    {
      icon: GraduationCap,
      title: "School Climate Education",
      description:
        "Interactive curriculum that brings climate science to life through hands-on experiments, field visits, and digital simulations. Students learn about environmental systems, sustainable living, and become ambassadors for change in their communities.",
      impact: ["85 schools reached", "12,000+ students engaged", "500+ eco-clubs formed"],
      color: "from-[#6ECFF6] to-[#2AA948]",
    },
    {
      icon: Users,
      title: "Community Clean-Ups",
      description:
        "Mobilizing volunteers for regular cleanup campaigns targeting rivers, beaches, and urban areas. Events combine immediate environmental impact with education on waste management, recycling, and circular economy principles.",
      impact: ["200+ cleanup events", "50 tons of waste collected", "5,000+ volunteers mobilized"],
      color: "from-[#003D73] to-[#6ECFF6]",
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
              Our Work at Atmosera Alliance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Transforming climate action through technology-driven initiatives and community empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center max-w-6xl mx-auto`}
              >
                <div className="w-full lg:w-1/3">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={
                        index === 0
                          ? "/ai-climate-monitoring-station-with-digital-screens.jpg"
                          : index === 1
                            ? "/tree-planting-community-volunteers-in-forest.jpg"
                            : index === 2
                              ? "/placeholder.svg?height=400&width=400&query=climate smart agriculture with technology"
                              : index === 3
                                ? "/young-people-presenting-at-technology-conference.jpg"
                                : "/placeholder.svg?height=400&width=400&query=community volunteers cleanup beach environment"
                      }
                      alt={project.title}
                      className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#003D73] mb-6">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Impact Stats */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
                    <h4 className="text-sm font-bold text-[#003D73] mb-3 uppercase tracking-wide">Impact Highlights</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#2AA948]" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-[#003D73] hover:bg-[#003D73]/90 text-white font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}