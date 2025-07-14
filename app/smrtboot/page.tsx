import Image from "next/image"
import {
  ShoppingCart,
  Droplets,
  Battery,
  Bluetooth,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import TechSpec from "@/components/ui/tech-spec"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

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
      <Navbar staticStyle />
      {/* HERO content */}
      <div className="container pt-28 pb-8">
        <section className="mb-16">
          <div className="grid md:gap-12 items-center text-center justify-items-center lg:grid-cols-2 lg:text-left lg:justify-items-start">

            {/* LEFT COLUMN: Description */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                The SmrtBoot
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Transform any water bottle into a smart hydration tracker.
                Our innovative silicon boot attachment brings precision
                tracking to your favorite bottle.
              </p>

              {/* Desktop-only price + button */}
              <div className="hidden sm:flex items-center gap-4">
                <div className="text-3xl font-bold">$49.99</div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Coming Soon</DialogTitle>
                      <DialogDescription>
                        The SmrtBoot isn't quite ready for checkout yet. Stay tuned, pre-orders will be available soon!
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>


            {/* RIGHT COLUMN: Image + Color Tabs */}
            <div className="w-full flex justify-center">
              <Tabs defaultValue="blue" className="w-full max-w-sm">
                {colorVariants.map((variant) => (
                  <TabsContent
                    key={variant.value}
                    value={variant.value}
                    className="flex flex-col items-center gap-4 overflow-visible"
                  >
                    {/* Boot Image */}
                    <div className="p-4 sm:p-6">
                      <div className="relative w-[260px] h-[210px] sm:w-[340px] sm:h-[260px]">
                        <Image
                          src={variant.img}
                          alt={variant.alt}
                          fill
                          priority
                          className="object-contain drop-shadow-[0_5px_7px_rgba(0,0,0,0.6)] md:drop-shadow-[0_20px_24px_rgba(0,0,0,0.6)]"
                        />
                      </div>
                    </div>
                    <TabsList className="grid grid-cols-3 gap-2 w-full">
                      {colorVariants.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {/* Mobile-only price + button */}
                    <div className="flex sm:hidden w-full justify-end mt-4 pr-1">
                      <div className="flex flex-row items-center gap-3">
                        <div className="text-2xl font-bold">$49.99</div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="lg"
                              className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2"
                            >
                              <ShoppingCart className="h-5 w-5" />
                              Add to Cart
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Coming Soon</DialogTitle>
                              <DialogDescription>
                                The SmrtBoot isn't quite ready for checkout yet. Stay tuned, pre-orders will be available soon!
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                  </TabsContent>
                ))}
              </Tabs>

            
            </div>

          </div>
        </section>


        {/* TECH SPECS section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TechSpec
                  icon={<Droplets className="h-6 w-6 text-sky-600" />}
                  label="Sensor Technology"
                  borderColor="border-sky-600"
                  specs={[
                    { label: "Accuracy", value: "98%" },
                    { label: "Precision", value: "0.5oz increments" },
                    { label: "Refresh Rate", value: "15 seconds" },
                  ]}
                />

                <TechSpec
                  icon={<Battery className="h-6 w-6 text-green-600" />}
                  label="Power & Charging"
                  borderColor="border-green-600"
                  specs={[
                    { label: "Battery Life", value: "7 days typical use" },
                    { label: "Charging Method", value: "USB-C" },
                    { label: "Full Charge Time", value: "30 minutes" },
                  ]}
                />

                <TechSpec
                  icon={<Bluetooth className="h-6 w-6 text-blue-600" />}
                  label="Connectivity"
                  borderColor="border-blue-600"
                  specs={[
                    { label: "Protocol", value: "Bluetooth 5.2 LE" },
                    { label: "Range", value: "150ft (45m)" },
                    { label: "Offline Storage", value: "4 to 5 days worth" },
                  ]}
                />
              </div>

              <div className="space-y-6">
                <TechSpec
                  icon={<div className="h-6 w-6 text-orange-600 font-bold text-sm flex items-center justify-center">Si</div>}
                  label="Silicon Boot Design"
                  borderColor="border-orange-600"
                  specs={[
                    { label: "Material", value: "Medical-grade silicon" },
                    { label: "Installation", value: "Snap-on, tool-free" },
                    { label: "Weight", value: "91g (3.2oz)" },
                  ]}
                />

                <TechSpec
                  icon={<div className="h-6 w-6 text-purple-600 font-bold text-sm flex items-center justify-center">IP68</div>}
                  label="Durability"
                  borderColor="border-purple-600"
                  specs={[
                    { label: "Water Rating", value: "IP68 (1m/30min)" },
                    { label: "Coating", value: "Antimicrobial" },
                    { label: "Dishwasher Safe", value: "No" },
                  ]}
                />

                <TechSpec
                  icon={<Leaf className="h-6 w-6 text-emerald-600" />}
                  label="Manufacturing & Sustainability"
                  borderColor="border-emerald-600"
                  specs={[
                    { label: "Assembled In", value: "Albany, New York" },
                    { label: "Recycled Content", value: "80% post-consumer silicon" },
                    { label: "Packaging", value: "100% biodegradable" },
                  ]}
                />

              </div>
            </div>
          </div>
        </section>


        {/* CALL TO ACTION section */}
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
