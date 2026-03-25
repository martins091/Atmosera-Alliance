import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Eye, Zap, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const differentiators = [
    "AI-powered climate modeling and predictive analytics",
    "Real-time environmental monitoring with IoT sensors",
    "Community-centered grassroots action programs",
    "Science-backed policy recommendations",
    "Youth leadership and innovation programs",
    "Transparent impact measurement and reporting",
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
              About Atmosera Alliance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Pioneering the convergence of technology and environmental action to build climate resilience
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-[#003D73] mb-8">Who We Are</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Atmosera Alliance is a cutting-edge climate-tech organization at the forefront of
                    environmental innovation. We combine advanced artificial intelligence, data science, and grassroots
                    community engagement to address the most pressing challenges of climate change.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Founded on the belief that technology can amplify human action, we bridge the gap between scientific
                    research and on-the-ground implementation. Our multidisciplinary team of climate scientists, data
                    engineers, community organizers, and youth leaders work collaboratively to create scalable solutions
                    that protect vulnerable communities and restore ecosystems.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/ai-climate-monitoring-station-with-digital-screens.jpg"
                  alt="Climate monitoring technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                From deploying AI-powered monitoring networks to mobilizing youth climate movements, we operate at the
                intersection of innovation and impact — turning climate data into actionable insights and community
                dreams into environmental victories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="rounded-2xl p-8 bg-white shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6ECFF6] to-[#003D73] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#003D73] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every community has access to climate intelligence, where technology empowers
                environmental stewardship, and where collective action creates a sustainable, resilient future for all.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl p-8 bg-white shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2AA948] to-[#1a7d34] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#003D73] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To leverage cutting-edge technology and community-driven action to monitor climate patterns, implement
                sustainable solutions, educate future leaders, and build resilience in vulnerable regions across the
                globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-10 h-10 text-[#2AA948]" />
              <h2 className="text-4xl font-bold text-[#003D73]">What Makes Us Different</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just study climate change — we deploy technology that creates measurable impact while empowering
              communities to lead their own environmental transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#2AA948] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-gradient-to-b from-[#003D73] via-[#003D73] to-[#001a33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-12 bg-white/10 backdrop-blur-sm border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Message from Our Founder</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/90 leading-relaxed mb-6">
                  "Atmosera Alliance was born from a simple belief: climate action must evolve beyond traditional
                  approaches. As I witnessed communities struggling with environmental degradation while lacking access
                  to actionable data, I realized that the intersection of technology and grassroots mobilization held
                  the key to transformative change.
                </p>
                <p className="text-white/90 leading-relaxed mb-6">
                  We built Atmosera Alliance to be more than an organization — it's a movement that equips communities with
                  AI-powered tools, empowers youth to lead innovation, and turns climate science into community
                  resilience. Every monitoring station we deploy, every young leader we train, and every tree we plant
                  represents a step toward a future where technology serves humanity's greatest challenge.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Join us in building that future. Together, we are the horizon."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white font-bold text-xl">Ezugorie Obel</p>
                <p className="text-white/70">Founder & Executive Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}