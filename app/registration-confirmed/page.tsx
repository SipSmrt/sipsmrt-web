"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import WaveDivider from "@/components/home/wave-divider"

export default function RegistrationConfirmedPage() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-sky-100 via-blue-50 to-white relative overflow-hidden">
      <WaveDivider />

      <div className="container flex-1 flex items-center justify-center py-16 relative z-10">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-20 w-20 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Registration Complete!
          </h1>

          <p className="text-xl text-muted-foreground">
            Welcome to SipSmrt! Your account has been successfully created.
          </p>

          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-700"
            onClick={() => router.push("/")}
          >
            www.sipsmrt.com
          </Button>
        </div>
      </div>
    </main>
  )
}