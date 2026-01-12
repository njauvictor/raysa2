import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-sm">
                RW
              </div>
              <h3 className="font-bold text-foreground">Raysa Welders</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional metal fabrication and engineering services in Nairobi, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Metal Fabrication
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Welding Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Steel Structures
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Custom Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                <Phone size={16} />
                <a href="tel:+254712371475">+254 712 371 475</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                <Mail size={16} />
                <a href="mailto:samuelwambulwa45@gmail.com">samuelwambulwa45@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 Raysa Welders & Fabricators. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
