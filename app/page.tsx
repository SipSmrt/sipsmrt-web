"use client"

import Link from "next/link"
import Image from "next/image"
import { User, ChevronDown } from "lucide-react"
import { useScrollPosition } from "@/hooks/use-scroll-position"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AppShowcase from "@/components/app-showcase"
import ProductShowcase from "@/components/product-showcase"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"

export default function Home() {
  const { isScrolled } = useScrollPosition()

  return (
    <main className="flex min-h-screen flex-col">
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container flex h-16 items-center">
          <div className="flex w-1/3 justify-start">
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="link"
                    className={`flex items-center gap-1 ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    About <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <Link href="/team" className="w-full">
                      The Team
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/research" className="w-full">
                      Research
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/fitness" className="w-full">
                      Fitness
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/healthcare" className="w-full">
                      Healthcare
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/mobile-app"
                className={`transition-colors hover:text-foreground/80 ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                Mobile App
              </Link>
              <Link
                href="/smrtboot"
                className={`transition-colors hover:text-foreground/80 ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                SmrtBoot
              </Link>
              <Link
                href="/contact"
                className={`transition-colors hover:text-foreground/80 ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                Contact
              </Link>
            </nav>
            <Button
              variant="outline"
              size="icon"
              className={`md:hidden ${isScrolled ? "bg-background/20" : "bg-transparent text-white border-white/20"}`}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>

          <div className="flex w-1/3 justify-center">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/img/branding/logo_blue_dark.svg?height=40&width=120"
                alt="SipSmrt Logo"
                width={120}
                height={40}
                className={`h-10 transition-all ${isScrolled ? "" : "brightness-0 invert"}`}
              />
            </Link>
          </div>

          <div className={`flex w-1/3 justify-end gap-4 ${isScrolled ? "" : "text-white"}`}>
            <CartSidebar />
            <Link href="/profile">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Profile"
                className={isScrolled ? "" : "text-white hover:bg-white/10"}
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

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
