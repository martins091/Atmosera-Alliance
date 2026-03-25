import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
              Contact Atmosera Alliance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Let's collaborate on climate action — reach out to our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#003D73] mb-6">Get In Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're interested in volunteering, partnering with Atmosera Alliance, or learning more about our work, we'd love to hear from you. Our team typically responds within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6ECFF6]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#003D73]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D73] mb-1">Email</h3>
                    <p className="text-gray-600">info@atmoseraalliance.org</p>
                    <p className="text-gray-600">partnerships@atmoseraalliance.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2AA948]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#003D73]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D73] mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6ECFF6]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#003D73]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003D73] mb-1">Address</h3>
                    <p className="text-gray-600">123 Climate Action Plaza</p>
                    <p className="text-gray-600">Green City, EC 12345</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-bold text-[#003D73] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#003D73] flex items-center justify-center hover:bg-[#2AA948] transition-colors text-white"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 bg-white shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#003D73] mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#003D73] mb-2">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#003D73] mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#003D73] mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#003D73] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button className="bg-[#2AA948] hover:bg-[#2AA948]/90 text-white font-semibold w-full">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}