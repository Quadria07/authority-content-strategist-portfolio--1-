"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Photo with Parallax */}
          <motion.div style={{ y, opacity }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative aspect-[4/5] max-w-md mx-auto"
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/30 rounded-full blur-2xl" />

              {/* Photo container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-primary/10 bg-card shadow-2xl">
                <img
                  src="/ndidiamaka.jpg"
                  alt="Ndidiamaka Ezeliora - Authority Content Strategist"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance"
            >
              I'm <span className="text-accent">Ndidiamaka Ezeliora</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              I transform how brands approach content, turning noise into measurable business outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-lg font-medium rounded-full overflow-hidden"
                >
                  <span className="relative z-10">Secure a Strategy Audit</span>
                  <motion.span
                    className="absolute inset-0 bg-accent"
                    animate={{
                      boxShadow: ["0 0 0 0 rgba(255, 102, 196, 0.4)", "0 0 0 20px rgba(255, 102, 196, 0)"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeOut",
                    }}
                  />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
