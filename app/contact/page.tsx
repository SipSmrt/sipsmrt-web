"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mrbzbbgg")

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar staticStyle />
      <div className="flex-1 pt-24">
        <div className="container py-8">
          <section className="mb-16">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about our products or need support? We're here to help you on your hydration journey.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid gap-12 lg:grid-cols-[5fr_2fr]">

              {/* LEFT: Contact Form */}
              <div className="lg:pl-12">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                {state.succeeded ? (
                  <div className="p-6 border rounded-lg bg-green-50 text-green-700 font-medium">
                    Thanks! Your message has been sent.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                        required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-sky-600 hover:bg-sky-700"
                      type="submit"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* RIGHT: Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-sky-100 p-3">
                        <Mail className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <p className="text-muted-foreground">admin@sipsmrt.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-green-100 p-3">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone Number</h3>
                        <p className="text-muted-foreground">+1 (401) 403-1712</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-orange-100 p-3">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>M-F: 9:00 AM - 5:00 PM EST</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
