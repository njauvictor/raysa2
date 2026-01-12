import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Projects() {
  const projects = [
    {
      title: "Commercial Building Steel Frame",
      category: "Structural Steel",
      description:
        "Complete structural steel fabrication and installation for a 12-story commercial complex in Nairobi CBD",
      image: "/modern-commercial-building-steel-structure.jpg",
      year: "2023",
    },
    {
      title: "Industrial Machinery Components",
      category: "Custom Fabrication",
      description: "Precision-engineered metal components for heavy machinery used in manufacturing facilities",
      image: "/industrial-metal-machinery-parts-fabrication.jpg",
      year: "2023",
    },
    {
      title: "Water Treatment Plant Structure",
      category: "Engineering",
      description: "Large-scale stainless steel fabrication for water treatment facility infrastructure",
      image: "/water-treatment-facility-metal-structures.jpg",
      year: "2022",
    },
    {
      title: "Transportation Hub Canopy",
      category: "Structural Design",
      description: "Innovative curved steel structure for bus station canopy with architectural appeal",
      image: "/modern-canopy-structure-steel-design.jpg",
      year: "2022",
    },
    {
      title: "Security Gate & Fencing",
      category: "Custom Works",
      description: "Bespoke metal gate and perimeter fencing systems for residential and commercial properties",
      image: "/modern-metal-security-gate-design.jpg",
      year: "2023",
    },
    {
      title: "Industrial Oven Framework",
      category: "Fabrication",
      description: "Heavy-duty metal framework fabrication for industrial heat treatment equipment",
      image: "/industrial-oven-metal-frame-construction.jpg",
      year: "2023",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our portfolio of completed metal fabrication and engineering projects across various industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-lg border border-border overflow-hidden hover:border-primary transition"
              >
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6 bg-secondary/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Have a Project in Mind?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our team to discuss your requirements and get a detailed quote for your fabrication project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
