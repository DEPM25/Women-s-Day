"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Sun, Star, Flower2, Crown } from "lucide-react"

const qualities = [
  {
    icon: Heart,
    title: "Tu Amor Infinito",
    description: "Cada gesto tuyo está lleno de amor puro y sincero. Tu capacidad de amar transforma todo lo que tocas."
  },
  {
    icon: Sparkles,
    title: "Tu Luz Interior",
    description: "Irradias una energía especial que ilumina los días más oscuros. Tu presencia es un regalo constante."
  },
  {
    icon: Sun,
    title: "Tu Fortaleza",
    description: "Eres más fuerte de lo que crees. Enfrentas cada desafío con valentía y emerges siempre más brillante."
  },
  {
    icon: Star,
    title: "Tu Inteligencia",
    description: "Tu mente brillante me inspira cada día. Tus ideas, pensamientos y sabiduría son extraordinarios."
  },
  {
    icon: Flower2,
    title: "Tu Belleza",
    description: "Tu belleza va más allá de lo físico. Es tu esencia, tu alma, tu forma de ver el mundo lo que te hace hermosa."
  },
  {
    icon: Crown,
    title: "Tu Grandeza",
    description: "Eres una mujer excepcional en todo sentido. Tu grandeza se refleja en cada acción y palabra."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function QualitiesSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Lo que te hace única
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-balance">
            Tus <span className="italic text-primary">cualidades</span> infinitas
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:bg-card/80">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <quality.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
