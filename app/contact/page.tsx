import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <div className="container py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <section className="mb-16">

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about our products or need support? We're here to help you on your hydration journey.
              </p>
            </div>

            {/* Contact Form and Info */}
            <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
              {/* LEFT: Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
                  </div>
                  <Button size="lg" className="w-full bg-sky-600 hover:bg-sky-700">
                    Send Message
                  </Button>
                </form>
              </div> {/* < End Left Side */}
              
              {/* RIGHT: Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-sky-100 p-3">
                        <Mail className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">admin@sipsmrt.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-green-100 p-3">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (401) 403-1712</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>

                    {/* <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-purple-100 p-3">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          123 Innovation Drive
                          <br />
                          Tech Valley, CA 94025
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-orange-100 p-3">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div> */}
                  </div>

                </div>

                {/* FAQ & Docs */}
                {/* <div className="bg-sky-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check out our FAQ section for quick answers to common questions.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      View FAQ
                    </Button>
                    <Button variant="outline" size="sm">
                      Help Docs
                    </Button>
                  </div>
                </div> */}

              </div> {/* < End Right Side */}
              
            </div> 
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
