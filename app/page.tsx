import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { RiskCards } from "@/components/risk-cards"
import { Pillars } from "@/components/pillars"
import { FrameworkSection } from "@/components/framework-section"
import { SocialProof } from "@/components/social-proof"
import { AboutSection } from "@/components/about-section"
import { DiagnosisSection } from "@/components/diagnosis-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RiskCards />
      <Pillars />
      <FrameworkSection />
      <SocialProof />
      <AboutSection />
      <DiagnosisSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
