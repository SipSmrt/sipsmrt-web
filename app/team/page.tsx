import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Cole Khanari",
      role: "CEO",
      bio: "B.S Mechanical Engineering | RPI",
      image: "/img/team/cole.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/cole-khanjari/",
        email: "colekhanjari@gmail.com",
      },
    },
    {
      name: "Matt Emerson",
      role: "COO",
      bio: "B.S Mechanical Engineering | RPI",
      image: "/img/team/matt.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/matthew-emerson-936646259/",
        email: "emersm3rpi@gmail.com",
      },
    },
    {
      name: "Thomas Bird",
      role: "CTO",
      bio: "B.S Computer Science | RPI",
      image: "/img/team/tommy.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/tommycbird/",
        email: "tommycbird@gmail.com",
        github: "https://github.com/tommycbird",
      },
    },
    {
      name: "Abby Shellard",
      role: "Marketing & Graphic Designer",
      bio: "B.F.A Graphic Design | Clemson University",
      image: "/img/team/abby.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/abigailshellard/",
        email: "abbyshellard@gmail.com",
      },
    },
    {
      name: "Nevin Joshy",
      role: "Software Engineer",
      bio: "Computer Science Undergraduate Student | RPI",
      image: "/img/team/nevin.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/nevin-v-joshy/",
        email: "joshyn6778@gmail.com",
        github: "https://github.com/nevin-joshy",
      },
    },
    {
      name: "Jack Berkowitz",
      role: "Electrical Engineer",
      bio: "B.S Electrical Engineering | University of San Diego",
      image: "/img/team/jack.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/jack-m-berkowitz/",
        email: "berkowitz.jac@gmail.com",
      },
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar staticStyle />
      <div className="container py-8 pt-28">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a diverse group of engineers, computer scientists, and designers united by our passion for improving
              human health through innovative hydration technology.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-full flex justify-center p-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={264}
                      height={370}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3 flex-wrap">
                      {member.socials?.linkedin && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={member.socials.linkedin} aria-label={`${member.name} LinkedIn`}>
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.socials?.github && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={member.socials.github} aria-label={`${member.name} GitHub`}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.socials?.email && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`mailto:${member.socials.email}`} aria-label={`Email ${member.name}`}>
                            <Mail className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
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
              health. Reach out if you're interested in joining our team!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
