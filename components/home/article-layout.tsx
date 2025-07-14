import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

interface ArticleLayoutProps {
  title: string
  subtitle: string
  author: string
  date: string
  readTime: string
  category: string
  heroImage: string
  heroImageAlt: string
  tags: string[]
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  subtitle,
  author,
  date,
  readTime,
  category,
  heroImage,
  heroImageAlt,
  tags,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar staticStyle />
      <div className="container pt-28 py-8">

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="secondary" className="bg-sky-100 text-sky-700 hover:bg-sky-200">
                {category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] w-full mb-12 rounded-xl overflow-hidden">
            <Image src={heroImage || "/placeholder.svg"} alt={heroImageAlt} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">{children}</div>

          {/* Article Footer */}
          <footer className="border-t pt-8">
            <div className="bg-sky-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest insights on hydration science, fitness, and healthcare.
              </p>
              <div className="flex justify-end">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link href="https://www.linkedin.com/company/sipsmrt/" target="_blank">
                    Follow us on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </div>
      <Footer />
    </main>
  )
}
