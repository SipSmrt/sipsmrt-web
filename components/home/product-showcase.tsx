import Image from "next/image"
import { Button } from "@/components/ui/button"
import CheckBullet from "@/components/ui/check-bullet"

export default function ProductShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50" id="products">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* LEFT SIDE – IMAGE */}
          <div className="flex items-center justify-center relative w-full">

            {/* Mobile image */}
            <Image
              src="/img/mockups/bottles/wet_hydro_half.png"
              alt="SipSmrt Smart Boot (Mobile)"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto max-w-md object-contain block lg:hidden"
            />
            {/* Fade top on mobile image */}
            <div className="absolute top-0 left-0 w-full h-7 bg-gradient-to-b from-sky-50 to-transparent lg:hidden pointer-events-none z-10" />


            {/* Desktop image */}
            <Image
              src="/img/mockups/bottles/wet_hydro_full.png"
              alt="SipSmrt Smart Boot"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto max-w-md object-contain hidden lg:block"
            />
          </div>


          {/* RIGHT SIDE – HEADLINE + BULLETS + CTA */}
          <div className="flex flex-col justify-center space-y-6 pr-8">
            <div className="space-y-2 ml-auto max-w-[600px] text-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Smart Hydration Boot
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Engineered with precision to track every sip and keep you perfectly hydrated throughout the day.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-left">
              {/* Bulleted List */}
              <ul className="grid gap-2 py-4 pl-30">
                <li className="flex items-center gap-2">
                  <CheckBullet />
                  <span>Precision sensors track every sip</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckBullet />
                  <span>LED indicators remind you when it's time to hydrate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckBullet />
                  <span>Rechargeable battery lasts up to 30 days</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckBullet />
                  <span>Available in multiple colors and sizes</span>
                </li>
              </ul>
              {/* Shop Now */}
              <div className="flex items-center justify-end gap-4">
                <div className="text-3xl font-bold">$49.99</div>
                <Button
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700"
                  asChild
                >
                  <a href="/smrtboot">Shop Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
