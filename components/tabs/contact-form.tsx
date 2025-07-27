// components/forms/contact-form.tsx
"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrbzbbgg")

  if (state.succeeded) {
    return (
      <div className="p-6 border rounded-lg bg-green-50 text-green-700 font-medium">
        Thanks! Your message has been sent.
      </div>
    )
  }

  return (
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
  )
}
