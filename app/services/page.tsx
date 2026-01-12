import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Metal Fabrication",
      description: "Custom fabrication of metal components and structures",
      features: [
        "Structural steel work",
        "Stainless steel components",
        "Aluminum fabrication",
        "Custom metal parts",
        "CNC cutting and bending",
        "Assembly and welding",
      ],
    },
    {
      title: "Welding Services",
      description: "Professional welding solutions for all types of joints",
      features: [
        "MIG/MAG welding",
        "TIG welding",
        "Stick welding",
        "Submerged arc welding",
        "Pipe welding",
        "Quality inspections",
      ],
    },
    {
      title: "Steel Structures",
      description: "Design and fabrication of complete steel structures",
      features: [
        "Building frameworks",
        "Industrial structures",
        "Bridge components",
        "Roof trusses",
        "Support structures",
        "Installations",
      ],
    },
    {
      title: "Custom Engineering",
      description: "Bespoke solutions tailored to your requirements",
      features: [
        "Design consultation",
        "Technical drawings",
        "Project management",
        "Quality assurance",
        "Delivery support",
        "Maintenance advice",
      ],
    },
    {
      title: "Surface Treatment",
      description: "Finishing and protective treatments for metal products",
      features: ["Sandblasting", "Powder coating", "Painting", "Galvanizing", "Polishing", "Chrome plating"],
    },
    {
      title: "Maintenance & Repair",
      description: "Ongoing support and emergency repair services",
      features: [
        "Equipment repair",
        "Structural repairs",
        "Welding repairs",
        "Emergency response",
        "Preventive maintenance",
        "24/7 availability",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive metal fabrication and welding services designed to meet diverse industrial and commercial
            needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-secondary/50 p-8 hover:border-primary hover:bg-secondary/80 transition"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Raysa?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Over 15 years of expertise in metal fabrication and welding industries
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  All work meets international standards and passes rigorous quality checks
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Equipment</h3>
                <p className="text-muted-foreground">State-of-the-art machinery and tools for precision fabrication</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">Best value for money with transparent quotes and fair rates</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">On-Time Delivery</h3>
                <p className="text-muted-foreground">We respect deadlines and deliver projects on schedule</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Client Support</h3>
                <p className="text-muted-foreground">
                  Dedicated support team available for consultations and assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
