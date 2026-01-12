import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Award, Wrench, Flame } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                <span className="text-primary">Engineering Excellence</span> in Metal Fabrication
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Raysa Welders & Fabricators delivers premium metal fabrication and engineering solutions. From custom
                welding to structural steel work, we combine precision with expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition inline-flex items-center gap-2 justify-center"
                >
                  Get Free Quote <ArrowRight size={20} />
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-3 border border-primary text-primary rounded font-semibold hover:bg-primary/10 transition inline-flex items-center gap-2 justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                <img
                  src="/industrial-metal-fabrication-workshop-welding.jpg"
                  alt="Metal fabrication workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Specialized Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive metal fabrication and welding solutions with precision and expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wrench,
                title: "Metal Fabrication",
                description:
                  "Custom metal fabrication for structural and decorative applications with precision cutting and bending.",
                image: "/metal-fabrication-workshop.jpg",
              },
              {
                icon: Flame,
                title: "MIG & TIG Welding",
                description:
                  "Professional MIG and TIG welding services ensuring strong, durable joints with superior finish quality.",
                image: "/tig-mig-welding-process.jpg",
              },
              {
                icon: Shield,
                title: "Industrial Welding",
                description:
                  "Heavy-duty industrial welding for machinery, pipelines, and structural assemblies to ISO standards.",
                image: "/industrial-welding-fabrication.jpg",
              },
              {
                icon: Award,
                title: "Structural Welding",
                description:
                  "Certified structural welding for buildings, bridges, and frameworks meeting all safety regulations.",
                image: "/structural-steel-welding.jpg",
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group rounded-lg border border-border bg-secondary/50 overflow-hidden hover:border-primary transition hover:shadow-lg"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <Icon size={20} className="text-primary group-hover:text-primary-foreground transition" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in precision metal work and engineering solutions tailored to your needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Metal Fabrication",
                description:
                  "Custom metal fabrication for structural and decorative applications using latest techniques.",
              },
              {
                icon: Shield,
                title: "Welding Services",
                description:
                  "Expert welding and joinery work meeting international standards and quality specifications.",
              },
              {
                icon: Award,
                title: "Engineering Design",
                description:
                  "Complete design and engineering support for your fabrication projects from concept to delivery.",
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-lg border border-border bg-secondary/50 hover:bg-secondary/80 hover:border-primary transition"
                >
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon size={24} className="text-primary group-hover:text-primary-foreground transition" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition"
            >
              Explore All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcase of our finest metal fabrication and welding projects completed for satisfied clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Industrial Gate Fabrication",
                category: "Metal Fabrication",
                image: "/industrial-metal-gates-fabrication.jpg",
              },
              {
                title: "Structural Steel Framework",
                category: "Structural Welding",
                image: "/structural-steel-framework-construction.jpg",
              },
              {
                title: "Pipeline Welding Project",
                category: "Industrial Welding",
                image: "/industrial-pipeline-welding.jpg",
              },
              {
                title: "Custom Metal Stairs",
                category: "Metal Fabrication",
                image: "/custom-metal-stairs-fabrication.jpg",
              },
              {
                title: "Heavy Equipment Repair",
                category: "TIG Welding",
                image: "/heavy-equipment-welding-repair.jpg",
              },
              {
                title: "Commercial Building Support",
                category: "Structural Welding",
                image: "/commercial-building-structural-steel.jpg",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg overflow-hidden border border-border hover:border-primary transition hover:shadow-xl"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-secondary/50 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get in touch with our team for a free consultation and quote. We're ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition inline-flex items-center gap-2 justify-center"
            >
              Contact Us Now <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+254712371475"
              className="px-8 py-3 border border-primary text-primary rounded font-semibold hover:bg-primary/10 transition"
            >
              Call: +254 712 371 475
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
