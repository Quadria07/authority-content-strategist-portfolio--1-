"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-serif text-2xl text-foreground">Ndidiamaka Ezeliora</p>
            <p className="text-muted-foreground mt-1">Authority Content Strategist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/ndidiamaka-ezeliora/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="mailto:nezeliora@gmail.com"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">nezeliora@gmail.com</span>
            </a>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ndidiamaka Ezeliora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
