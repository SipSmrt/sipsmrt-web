import Link from "next/link"
import { ArrowLeft, User, Settings, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/navbar"

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar staticStyle />
      <div className="container pt-40 py-8">

        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="rounded-full bg-sky-100 p-8 mb-6">
            <User className="h-16 w-16 text-sky-600" />
          </div>

          <h1 className="text-4xl font-bold mb-4">Web Dashboard</h1>
          <h2 className="text-2xl text-sky-600 font-semibold mb-6">Coming Soon</h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            We're building a dashboard where you'll be able to configure groups,
            view detailed analytics, and customize your hydration experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl">
            <div className="flex flex-col items-center p-6 border rounded-lg">
              <Settings className="h-8 w-8 text-sky-600 mb-3" />
              <h3 className="font-semibold mb-2">Group Management</h3>
              <p className="text-sm text-muted-foreground text-center">
                Oversee the hydration for your team, family, patients, etc.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border rounded-lg">
              <BarChart3 className="h-8 w-8 text-sky-600 mb-3" />
              <h3 className="font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground text-center">
                View detailed hydration reports and health insights
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border rounded-lg">
              <Clock className="h-8 w-8 text-sky-600 mb-3" />
              <h3 className="font-semibold mb-2">History & Goals</h3>
              <p className="text-sm text-muted-foreground text-center">
                Track your hydration history and set personalized goals
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
              Get Notified When Ready
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Features
            </Button>
          </div> */}

          <p className="text-sm text-muted-foreground mt-8">Expected launch: Q1 2026</p>
        </div>
      </div>
    </main>
  )
}
