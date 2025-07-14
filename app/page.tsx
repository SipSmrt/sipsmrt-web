"use client"

import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import AppShowcase from "@/components/home/app-showcase"
import ProductShowcase from "@/components/home/product-showcase"
import TestimonialsSection from "@/components/home/testimonials-section"
import CtaSection from "@/components/home/cta-section"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

// The main page - starting entry point
export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen overflow-x-hidden">
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
