import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ShoppingCart,
  Droplets,
  Battery,
  Bluetooth,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Footer from "@/components/footer"

const colorVariants = [
  {
    value: "blue",
    label: "Ocean Blue",
    img: "/img/mockups/boots/blue_boot.png",
    alt: "Ocean Blue SmrtBoot",
  },
  {
    value: "white",
    label: "Alpine White",
    img: "/img/mockups/boots/white_boot.png",
    alt: "Glacier White SmrtBoot",
  },
  {
    value: "black",
    label: "Midnight Black",
    img: "/img/mockups/boots/black_boot.png",
    alt: "Midnight Black SmrtBoot",
  },
]

export default function SmrtBootPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* LEFT COLUMN: Description */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                SmrtBoot Smart Hydration Tracker
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Transform any water bottle into a smart hydration tracker.
                Our innovative silicon boot attachment brings precision
                tracking to your favorite bottle.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                {[
                  "Fits most standard water bottles",
                  "Easy snap-on installation",
                  "Seamless app integration",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <div className="rounded-full bg-sky-600 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">$49.99</div>
                <Button
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN: Image + Color Tabs */}
            <Tabs defaultValue="blue" className="w-full">
              {colorVariants.map((variant) => (
                <TabsContent
                  key={variant.value}
                  value={variant.value}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative h-[300px] w-[400px]">
                    <Image
                      src={variant.img}
                      alt={variant.alt}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <TabsList className={`grid grid-cols-3 w-full max-w-md`}>
                    {colorVariants.map((tab) => (
                      <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-sky-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="h-6 w-6 text-sky-600" />
                    <h3 className="text-lg font-semibold">Sensor Technology</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accuracy:</span>
                      <span className="font-medium">99.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precision:</span>
                      <span className="font-medium">5ml increments</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span className="font-medium">{"<"}0.5 seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Detection Method:</span>
                      <span className="font-medium">Ultrasonic flow</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Battery className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold">Power & Charging</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Battery Life:</span>
                      <span className="font-medium">30 days typical use</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Charging Method:</span>
                      <span className="font-medium">USB-C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quick Charge:</span>
                      <span className="font-medium">5 min = 3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Full Charge Time:</span>
                      <span className="font-medium">2 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Bluetooth className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold">Connectivity</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Protocol:</span>
                      <span className="font-medium">Bluetooth 5.2 LE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Range:</span>
                      <span className="font-medium">150ft (45m)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Offline Storage:</span>
                      <span className="font-medium">7 days of data</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Auto-Reconnect:</span>
                      <span className="font-medium">Yes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-6 w-6 text-orange-600 flex items-center justify-center font-bold text-sm">Si</div>
                    <h3 className="text-lg font-semibold">Silicon Boot Design</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium">Medical-grade silicon</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bottle Compatibility:</span>
                      <span className="font-medium">16-32oz bottles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Installation:</span>
                      <span className="font-medium">Snap-on, tool-free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span className="font-medium">45g (1.6oz)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-semibold">Display & Interface</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Display Type:</span>
                      <span className="font-medium">0.96" OLED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Resolution:</span>
                      <span className="font-medium">128x64 pixels</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Touch Controls:</span>
                      <span className="font-medium">Capacitive + Haptic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LED Indicators:</span>
                      <span className="font-medium">RGB status ring</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-600">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-6 w-6 text-gray-600 flex items-center justify-center font-bold text-sm">IP68</div>
                    <h3 className="text-lg font-semibold">Durability</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Water Rating:</span>
                      <span className="font-medium">IP68 (1m/30min)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drop Test:</span>
                      <span className="font-medium">2m military spec</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coating:</span>
                      <span className="font-medium">Antimicrobial</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dishwasher Safe:</span>
                      <span className="font-medium">No</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-sky-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Hydration Today</h2>
            <p className="text-xl mb-6 text-sky-100">
              Turn any water bottle into a smart hydration tracker with the SmrtBoot attachment.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-100 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-sky-700 bg-transparent">
                View Accessories
              </Button>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
