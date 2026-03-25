"use client"

import { Brain, Users, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function FeaturedCards() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Climate Intelligence",
      description:
        "Harnessing advanced analytics and artificial intelligence to track environmental trends, generate insights, and support smarter climate decision-making.",
      color: "from-[#6ECFF6] to-[#003D73]",
      href: "/climate-tech",
    },
    {
      icon: Users,
      title: "Collaborative Community Impact",
      description:
        "Working alongside communities to implement sustainable initiatives, drive environmental awareness, and create measurable impact at the grassroots level.",
      color: "from-[#2AA948] to-[#1a7d34]",
      href: "/our-work",
    },
    {
      icon: Lightbulb,
      title: "Emerging Climate Leaders",
      description:
        "Equipping young innovators with the tools, knowledge, and opportunities needed to lead transformative climate solutions for the future.",
      color: "from-[#6ECFF6] to-[#2AA948]",
      href: "/climate-tech",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D73] mb-4 text-balance">
              Our Strategic Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Innovative pathways powering climate progress and long-term environmental impact
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 200} className="h-full">
              <div className="group relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-[#6ECFF6] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#003D73] mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <Link href={feature.href}>
                    <Button
                      variant="ghost"
                      className="text-[#2AA948] hover:text-[#2AA948]/80 p-0 h-auto font-semibold group/btn"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}