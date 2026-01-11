import { HeroSection } from "@/components/hero-section"
import { FrameworksSection } from "@/components/frameworks-section"
import { WorkHubSection } from "@/components/work-hub-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FrameworksSection />
      <WorkHubSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
