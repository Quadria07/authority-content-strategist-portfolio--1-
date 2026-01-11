"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Within a month, we saw a 27% boost in engagement and a noticeable increase in qualified leads.",
    name: "Joseph Toba",
    title: "Product Manager",
    link: "https://www.linkedin.com/in/joseph-toba-2323b5140/",
  },
  {
    quote: "Ndidiamaka is the real deal... turning data into content that delivers results.",
    name: "Oluwatobi Sholanke",
    title: "CEO, Nourie",
    link: "https://www.linkedin.com/in/tobisholanke/",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Verified Authority</h2>
          <p className="mt-6 text-lg text-muted-foreground">Real results from real partnerships</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full p-10 rounded-3xl bg-card border border-primary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <Quote className="w-10 h-10 text-accent/40 mb-6" />

                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-serif text-lg text-accent">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
