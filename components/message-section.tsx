"use client"

import { motion } from "framer-motion"

export function MessageSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6">
              Mensaje del corazón
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-balance">
              &ldquo;Eres la razón de mis 
              <span className="italic text-primary"> mejores sonrisas</span>&rdquo;
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p className="text-pretty">
              En este día especial quiero que sepas lo importante que eres para mí. 
              No solo hoy, sino cada día del año, celebro la mujer increíble que eres.
            </p>
            
            <p className="text-pretty">
              Tu capacidad de dar amor sin límites, tu fuerza ante las adversidades, 
              tu inteligencia que me sorprende constantemente, y tu forma única de 
              hacer que todo sea mejor solo con tu presencia.
            </p>
            
            <p className="text-pretty">
              Gracias por ser tú, por tu paciencia infinita, por tus consejos sabios, 
              por tu risa contagiosa y por ese abrazo que siempre llega en el momento perfecto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 pt-10 border-t border-border/50"
          >
            <p className="font-serif text-2xl md:text-3xl italic text-primary">
              Con todo mi amor, hoy y siempre
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
