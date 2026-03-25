"use client"

import { useEffect, useState, useRef } from "react"
import { Users, MapPin, GraduationCap, Database } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ImpactCounter() {
  const [counts, setCounts] = useState({ communities: 0, projects: 0, youth: 0, tools: 0 })
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const targets = {
    communities: 150,
    projects: 85,
    youth: 2500,
    tools: 12,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2500
    const steps = 80
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = Math.min(step / steps, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounts({
        communities: Math.floor(targets.communities * easeOutQuart),
        projects: Math.floor(targets.projects * easeOutQuart),
        youth: Math.floor(targets.youth * easeOutQuart),
        tools: Math.floor(targets.tools * easeOutQuart),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [hasStarted])

  const stats = [
    { icon: MapPin, label: "Communities Engaged", value: `${counts.communities}+`, color: "text-[#6ECFF6]" },
    { icon: Database, label: "Initiatives Delivered", value: `${counts.projects}+`, color: "text-[#2AA948]" },
    { icon: GraduationCap, label: "Youth Empowered", value: `${counts.youth}+`, color: "text-[#6ECFF6]" },
    { icon: Users, label: "Digital Climate Tools", value: `${counts.tools}+`, color: "text-[#2AA948]" },
  ]

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/renewable-energy-wind-solar-farm-landscape.jpg"
          alt="Climate Impact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003D73]/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text text-balance">
              Impact at Scale
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Delivering measurable results through innovation, data, and collaborative climate action
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="rounded-2xl p-8 text-center hover:scale-105 h-full">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2 glow-text">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}