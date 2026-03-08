"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const particles = [
  { x: "10%", y: "20%", duration: 5, yOffset: -150 },
  { x: "25%", y: "60%", duration: 6, yOffset: -180 },
  { x: "45%", y: "30%", duration: 4.5, yOffset: -120 },
  { x: "65%", y: "70%", duration: 5.5, yOffset: -160 },
  { x: "80%", y: "40%", duration: 6.5, yOffset: -140 },
  { x: "90%", y: "15%", duration: 4, yOffset: -100 },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{ left: particle.x, top: particle.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              y: [0, particle.yOffset],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto text-primary fill-primary/20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary uppercase tracking-[0.3em] text-sm mb-6"
        >
          8 de Marzo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-balance"
        >
          Feliz Día
          <br />
          <span className="italic text-primary">de la Mujer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Para ti, Allison, la mujer que ilumina cada momento de mi vida con tu presencia, 
          tu amor y tu increíble forma de ser
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 mx-auto border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
