'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="relative h-[60vh] md:h-[72vh] overflow-hidden"
    >
      <Image src="/hero.svg" alt="Adamstown hero" fill style={{objectFit:'cover'}} priority />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="absolute inset-0 flex flex-col items-start justify-center max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-heading text-white">Adamstown Cricket Club</h1>
        <p className="mt-3 text-white/90 max-w-xl">Proudly representing our community — join us for the season, follow fixtures and support the squads.</p>
        <div className="mt-6 flex gap-3">
          <a className="btn-wine" href="/fixtures">View Fixtures</a>
          <a className="bg-white/90 text-charcoal px-4 py-2 rounded-lg font-semibold" href="/contact">Contact</a>
        </div>
      </div>
    </motion.section>
  )
}