import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Users, Target, Zap } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Raysa Welders</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Leading metal fabrication and engineering specialists serving Nairobi and beyond.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, Raysa Welders & Fabricators emerged from a simple vision: to provide exceptional
                  metal fabrication and welding services that exceed client expectations. What started as a small
                  workshop has grown into a full-scale operation serving diverse industrial sectors.
                </p>
                <p>
                  Over the past 15 years, we have successfully completed 500+ projects ranging from small custom
                  components to large-scale structural steel works. Our commitment to quality, precision, and innovation
                  has made us a trusted partner for businesses across Kenya.
                </p>
                <p>
                  Today, we continue to invest in the latest technology and talent to remain at the forefront of the
                  metal fabrication industry. Our team of experienced engineers and skilled craftsmen work
                  collaboratively to transform your vision into reality.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                <img src="/welding-workshop-team-professional.jpg" alt="Raysa Welders team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in every project we undertake.",
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Honest communication and reliable service in all client relationships.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Continuous improvement through adoption of modern techniques and technology.",
              },
              {
                icon: Target,
                title: "Reliability",
                description: "Consistent delivery on time and within budget, every single time.",
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background">
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Expertise</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Professional Team",
                description:
                  "A dedicated team of certified welders, engineers, and technicians with industry experience.",
              },
              {
                title: "Modern Equipment",
                description:
                  "State-of-the-art machinery including CNC cutting, plasma cutting, and advanced welding systems.",
              },
              {
                title: "Quality Systems",
                description:
                  "Implemented quality management systems ensuring consistency and compliance with standards.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border border-border bg-secondary/50 hover:border-primary transition"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how Raysa Welders can help bring your metal fabrication project to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
