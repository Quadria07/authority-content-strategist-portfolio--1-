"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { ArrowRight, Lock } from "lucide-react"

export function WorkHubSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glassmorphism card */}
          <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
            {/* Glass background */}
            <div className="absolute inset-0 bg-card/60 backdrop-blur-xl border border-primary/10" />

            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
              >
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Exclusive Access</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance"
              >
                Strategic Execution & GTM Frameworks
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
              >
                Detailed audits, lead generation frameworks, and the Nourie Go-To-Market strategy are available for
                review in my private work hub.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <MagneticButton>
                  <a
                    href="https://drive.google.com/drive/folders/1StbRhiXnPapNipmezeEEcsMCRCs6-ppH?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-lg font-medium rounded-full transition-colors hover:bg-foreground/90"
                  >
                    Explore Private Work Samples
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
