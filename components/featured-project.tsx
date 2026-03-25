"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function FeaturedProject() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D73] mb-4 text-balance">
              Flagship Initiative
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Highlighting innovative solutions driving measurable environmental change
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden group h-full">
                <img
                  src="/ai-climate-monitoring-station-with-digital-screens.jpg"
                  alt="Climate Intelligence Project"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003D73]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white/90 text-sm mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>East Africa Region</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2024 - Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={400}>
              <div>
                <div className="inline-block px-4 py-1 bg-[#2AA948]/10 text-[#2AA948] rounded-full text-sm font-semibold mb-4">
                  Climate Innovation
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#003D73] mb-6 text-balance">
                  Smart Climate Intelligence Network
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Implementing advanced climate intelligence systems across high-risk regions to capture real-time
                  environmental data, forecast changes, and support proactive decision-making. This initiative integrates
                  satellite data, connected sensors, and predictive analytics to deliver actionable insights.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-[#2AA948] mb-1">45+</div>
                    <div className="text-sm text-gray-600">Active Stations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#6ECFF6] mb-1">1.2M</div>
                    <div className="text-sm text-gray-600">Daily Data Insights</div>
                  </div>
                </div>

                <Link href="/our-work">
                  <Button className="bg-[#003D73] hover:bg-[#003D73]/90 text-white font-semibold">
                    View Full Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}