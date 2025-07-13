import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-sky-600 text-white" id="contact">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src="/img/branding/logo_light.png"
            alt="SipSmrt Logo"
            width={160}
            height={48}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="text-center text-sm leading-loose text-sky-100 md:text-left">
            © 2025 SipSmrt LLC. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {/* Instagram */}
          {/* <Link href="#" className="text-sky-100 hover:text-white">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link> */}
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/company/sipsmrt/" className="text-sky-100 hover:text-white">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          {/* YouTube */}
          {/* <Link href="#" className="text-sky-100 hover:text-white">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link> */}
        </div>
      </div>
    </footer>
  )
}
