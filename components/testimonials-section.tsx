import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how our smart hydration solutions have transformed lives.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="User Avatar"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The SipSmrt bottle has completely changed my hydration habits. I'm drinking more water than ever,
                    and the app makes it so easy to track my progress."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="User Avatar"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Michael Chen</h3>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As an athlete, proper hydration is crucial. The SipSmrt bottle's precise tracking and reminders
                    have improved my performance significantly."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="User Avatar"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Emily Rodriguez</h3>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The app's insights have been eye-opening. I never realized how dehydrated I was until I started
                    using SipSmrt. Now I feel more energetic throughout the day."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
