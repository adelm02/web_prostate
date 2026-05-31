import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { GlossarySection } from "@/components/glossary-section"
import { MythsSection } from "@/components/myths-section"
import { HelpBanner } from "@/components/help-banner"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <TimelineSection />
        <GlossarySection />
        <MythsSection />
        <HelpBanner />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
