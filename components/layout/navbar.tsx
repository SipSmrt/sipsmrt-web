"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, ShoppingCart, ChevronDown } from "lucide-react"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { MobileNav } from "@/components/layout/mobile-nav"
import CartSidebar from "@/components/layout/cart-sidebar"

type NavbarProps = {
  staticStyle?: boolean
}

export default function Navbar({ staticStyle = false }: NavbarProps) {
  const { isScrolled: scrollState } = useScrollPosition()
  const [cartOpen, setCartOpen] = useState(false)

  const isScrolled = staticStyle ? true : scrollState
  const navLinkClasses = `text-lg font-medium whitespace-nowrap transition-colors hover:underline hover:underline-offset-4`

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 sm:h-18 md:h-22 items-center px-4" style={{ paddingRight: "15px" }}>
        {/* LEFT */}
        <div className="flex w-1/3 justify-start">
          <nav className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={`flex items-center gap-1 ${navLinkClasses} ${isScrolled ? "text-foreground hover:text-sky-600" : "text-white"}`}
                >
                  About
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="z-[9999]">
                <DropdownMenuItem>
                  <Link href="/team" className="w-full">The Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/research" className="w-full">Research</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <Link href="/fitness" className="w-full">Fitness</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/healthcare" className="w-full">Healthcare</Link>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/mobile-app"
              className={`${navLinkClasses} pl-2 xl:pl-3 ${isScrolled ? "text-foreground hover:text-sky-600" : "text-white"}`}
            >
              The App
            </Link>
            <Link
              href="/smrtboot"
              className={`${navLinkClasses} pl-4 xl:pl-5 ${isScrolled ? "text-foreground hover:text-sky-600" : "text-white"}`}
            >
              SmrtBoot
            </Link>
            <Link
              href="/contact"
              className={`${navLinkClasses} pl-4 xl:pl-5 ${isScrolled ? "text-foreground hover:text-sky-600" : "text-white"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          <MobileNav isScrolled={isScrolled} />
        </div>

        {/* CENTER */}
        <div className="flex w-1/3 justify-center">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/img/branding/logo_blue_dark.svg?"
              alt="SipSmrt Logo"
              width={200}
              height={60}
              className={`py-2 transition-all ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>
        </div>

        {/* RIGHT */}
        <div className={`flex w-1/3 justify-end md:gap-4 ${isScrolled ? "" : "text-white"}`}>
          <Button
            onClick={() => setCartOpen(true)}
            variant="ghost"
            className={`size-14 p-0 flex items-center justify-center transform transition-transform duration-150 hover:scale-90 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            <ShoppingCart className="size-5 stroke-[2.5]" />
          </Button>

          <Link href="/profile">
            <Button
              variant="ghost"
              className={`size-14 p-0 flex items-center justify-center transform transition-transform duration-150 hover:scale-90 ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              <User className="size-5 stroke-[2.5]" />
            </Button>
          </Link>

          <CartSidebar isOpen={cartOpen} setIsOpen={setCartOpen} />
        </div>
      </div>
    </header>
  )
}
