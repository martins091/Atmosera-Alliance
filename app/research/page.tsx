import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BarChart3, Map, Trees, Building, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  const research = [
    {
      icon: BarChart3,
      title: "Climate Trends Analysis",
      description:
        "Long-term rainfall and temperature pattern analysis using historical data and predictive modeling to identify climate change signatures in local contexts.",
    },
    {
      icon: Map,
      title: "Vulnerability Mapping",
      description:
        "GIS-based assessment of climate risk hotspots, combining exposure, sensitivity, and adaptive capacity indicators to guide targeted interventions.",
    },
    {
      icon: Trees,
      title: "Forest & Land Monitoring",
      description:
        "Satellite imagery analysis tracking deforestation, land degradation, and ecosystem health with monthly updates and change detection algorithms.",
    },
    {
      icon: Building,
      title: "Urban Climate Impact",
      description:
        "Heat island mapping, air quality monitoring, and urban resilience assessments for sustainable city planning and policy recommendations.",
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
              Research & Insights at Atmosera Alliance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Data-driven climate intelligence powering evidence-based action
            </p>
          </div>
        </div>
      </section>

      {/* Research Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/coastal-community-with-digital-overlay-showing-cli.jpg"
                alt="Climate research and monitoring"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003D73] mb-6">Our Research Focus</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rigorous analysis and continuous monitoring by Atmosera Alliance to understand climate dynamics and inform adaptive strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {research.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 bg-white shadow-lg border border-gray-100 hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6ECFF6] to-[#003D73] flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#003D73] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003D73] mb-6">Climate Risk Reports</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Download free community-focused climate risk assessments and adaptation guides from Atmosera Alliance
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { title: "2024 Regional Climate Assessment Report", size: "2.4 MB", format: "PDF" },
              { title: "Community Adaptation Planning Guide", size: "1.8 MB", format: "PDF" },
              { title: "Agricultural Climate Risk Analysis", size: "3.1 MB", format: "PDF" },
              { title: "Urban Heat Island Mapping Study", size: "4.2 MB", format: "PDF" },
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6ECFF6] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#003D73]/10 flex items-center justify-center">
                    <Download className="w-6 h-6 text-[#003D73]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D73] mb-1">{report.title}</h3>
                    <p className="text-sm text-gray-500">
                      {report.format} • {report.size}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-[#003D73] text-[#003D73] hover:bg-[#003D73] hover:text-white font-semibold bg-transparent"
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}