"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Layers, TrendingUp } from "lucide-react"

const frameworks = [
  {
    icon: Layers,
    title: "The 5 Messaging Levels™",
    description:
      "A proprietary framework that maps your brand voice across five distinct audience touchpoints, ensuring every message resonates at the right moment in the buyer's journey.",
  },
  {
    icon: TrendingUp,
    title: "The Revenue Content System™",
    description:
      "Transform content from a cost center to a revenue driver. This system aligns every piece of content with measurable business outcomes and conversion goals.",
  },
]

export function FrameworksSection() {
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
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Proprietary Frameworks</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My methodology is rooted in strategic clarity: every piece of content must serve a specific purpose in your
            customer&apos;s journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={framework.title} framework={framework} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FrameworkCard({
  framework,
  index,
  isInView,
}: {
  framework: (typeof frameworks)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="relative h-full p-10 rounded-3xl bg-card border border-primary/10 shadow-lg overflow-hidden"
      >
        {/* Hover gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"
        />

        <div className="relative z-10">
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6"
          >
            <framework.icon className="w-8 h-8 text-accent" />
          </motion.div>

          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{framework.title}</h3>

          <p className="text-muted-foreground leading-relaxed">{framework.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
