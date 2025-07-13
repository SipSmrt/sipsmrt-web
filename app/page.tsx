"use client"

import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AppShowcase from "@/components/app-showcase"
import ProductShowcase from "@/components/product-showcase"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

// The main page - starting entry point
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <AppShowcase />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
