"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-16 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-10 h-10 mx-auto text-primary fill-primary/30" />
          </motion.div>

          <p className="font-serif text-3xl md:text-4xl italic text-foreground">
            Te amo infinitamente
          </p>

          <p className="text-muted-foreground">
            Feliz Día Internacional de la Mujer
          </p>

          <p className="text-sm text-muted-foreground/60">
            8 de Marzo • Hecho con amor para ti • Dimitri Perez
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
