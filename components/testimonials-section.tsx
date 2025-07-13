import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const expertQuotes = [
  {
    source: "Harvard School of Public Health",
    quote:
      "Even though the liquid is essential for life, an estimated 40% of seniors are chronically underhydrated, \
      and adults ages 65 and older have the highest hospital admission rates for dehydration.",
    image: "/img/icons/hvh.png",
  },
  {
    source: "National Institutes of Health",
    quote:
      "Researchers analyzed links between [fluid intake] and various indicators of health... They found that \
      adults [with worse hydration] were more likely to develop chronic conditions and show signs of advanced \
      biological aging... and die at a younger age.",
    image: "/img/icons/nih.png",
  },
  {
    source: "American Heart Association",
    quote:
      "Drinking enough water keeps the body hydrated, which helps the heart more easily pump blood through the body... If you’re well hydrated, your heart doesn’t have to work as hard.",
    image: "/img/icons/aha.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">What Experts Say</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hydration Backed by Science</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted organizations emphasize hydration’s role in health and performance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          {expertQuotes.map(({ source, quote, image }) => (
            <Card key={source}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <Image
                    src={image}
                    alt={source}
                    width={64}
                    height={64}
                    className="rounded-full object-contain"
                  />
                  <blockquote className="text-muted-foreground italic">“{quote}”</blockquote>
                  <span className="mt-4 text-sm font-semibold text-sky-800">{source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
