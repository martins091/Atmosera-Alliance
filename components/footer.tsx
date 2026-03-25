import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative bg-[#003D73] text-white py-16 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6ECFF6] to-[#2AA948] flex items-center justify-center">
                <span className="text-white font-bold text-xl">AA</span>
              </div>
              <span className="font-bold text-lg">Atmosera Alliance</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Building a climate-resilient future through technology, innovation, and community action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/climate-tech" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Climate-Tech
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources - removed non-functional links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Research & Reports
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  Volunteer Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#6ECFF6] transition-colors text-sm">
                  FAQs & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter for climate insights and updates.</p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#2AA948] hover:bg-[#2AA948]/90">
                <Mail size={18} />
              </Button>
            </div>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <span
                  key={index}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6ECFF6] transition-colors cursor-pointer"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm">© 2025 Atmosera Alliance. All rights reserved.</p>
            <p className="text-white/50 text-xs mt-1">Developed by TinzWave Technology</p>
          </div>
          <Link href="/get-involved">
            <Button className="bg-[#2AA948] hover:bg-[#2AA948]/90 text-white font-semibold">Get Involved</Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
