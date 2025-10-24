"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionDataSection } from "@/components/mission-data-section"
import { ParkSatSection } from "@/components/parksat-section"
import { RegistrationSection } from "@/components/registration-section"
import { GallerySection } from "@/components/gallery-section"
import { SupportersSection } from "@/components/supporters-section"
import { AboutQSATSection } from "@/components/about-qsat-section"
import { UpcomingEventsSection } from "@/components/upcoming-events-section"
import { RegistrationPopup } from "@/components/registration-popup"
import { Footer } from "@/components/footer"

export default function QSATHABLaunchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionDataSection />
      <ParkSatSection />
      <RegistrationPopup />
      <RegistrationSection />
      <GallerySection />
      <SupportersSection />
      <AboutQSATSection />
      <UpcomingEventsSection />
      <Footer />
    </div>
  )
}
