import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Stanford researcher with 15+ years in biomedical engineering. Led breakthrough studies in hydration science.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
      linkedin: "#",
      twitter: "#",
      email: "sarah@sipsmrt.com",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Apple engineer specializing in IoT and sensor technology. 10+ patents in smart device innovation.",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+Rodriguez",
      linkedin: "#",
      twitter: "#",
      email: "marcus@sipsmrt.com",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "PhD in Sports Medicine from Harvard. Published 50+ papers on hydration and athletic performance.",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Watson",
      linkedin: "#",
      twitter: "#",
      email: "emily@sipsmrt.com",
    },
    {
      name: "James Park",
      role: "VP of Engineering",
      bio: "Former Tesla engineer with expertise in battery technology and sustainable design. MIT graduate.",
      image: "/placeholder.svg?height=300&width=300&text=James+Park",
      linkedin: "#",
      twitter: "#",
      email: "james@sipsmrt.com",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Health Sciences",
      bio: "Board-certified physician and digital health expert. Pioneered telemedicine hydration protocols.",
      image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
      linkedin: "#",
      twitter: "#",
      email: "aisha@sipsmrt.com",
    },
    {
      name: "David Kim",
      role: "VP of Product Design",
      bio: "Award-winning industrial designer from IDEO. 15+ years creating user-centered health products.",
      image: "/placeholder.svg?height=300&width=300&text=David+Kim",
      linkedin: "#",
      twitter: "#",
      email: "david@sipsmrt.com",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a diverse group of engineers, researchers, and health experts united by our passion for improving
              human health through innovative hydration technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-80 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.twitter} aria-label={`${member.name} Twitter`}>
                          <Twitter className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-sky-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and improving human
              health. Explore opportunities to join our growing team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-sky-600 hover:bg-sky-700">View Open Positions</Button>
              <Button variant="outline">Learn About Our Culture</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
