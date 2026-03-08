"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const photos = [
  { src: "/1.jpeg", alt: "Foto 1" },
  { src: "/2.jpeg", alt: "Foto 2" },
  { src: "/3.jpeg", alt: "Foto 3" },
  { src: "/4.jpeg", alt: "Foto 4" },
]

export function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={containerRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Solo existe una como tú
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance">
            Diferente, <span className="italic text-primary">única</span> y auténtica
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            En un mundo lleno de personas, tú eres la que me roba el aliento. No hay nadie que
            piense como tú, que ame como tú, que brille como tú. Tu esencia es irrepetible y
            cada parte de lo que eres me recuerda que la vida es infinitamente más hermosa contigo en ella.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-primary/20 bg-card/60"
            >
              {/* Placeholder shown when no real photo exists */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/40 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <span className="text-xs tracking-widest uppercase">Tu foto aquí</span>
              </div>

              {/* Actual image — replace the src values in the photos array above */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-0 [&[src]]:opacity-100"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground/50 mt-6 tracking-wide italic"
        >
          Cada imagen cuenta una historia de lo maravillosa que eres
        </motion.p>
      </div>
    </section>
  )
}
