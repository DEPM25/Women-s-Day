import { HeroSection } from "@/components/hero-section"
import { QualitiesSection } from "@/components/qualities-section"
import { MessageSection } from "@/components/message-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { FooterSection } from "@/components/footer-section"

export default function WomensDayPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <QualitiesSection />
      <CapabilitiesSection />
      <MessageSection />
      <FooterSection />
    </main>
  )
}
