'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText, Mail } from 'lucide-react';
import { HERO } from '@/lib/data';
import HeroPipeline from './HeroPipeline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      <HeroPipeline />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="max-w-wrap mx-auto px-7 relative z-10 max-w-[720px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-teal tracking-wider inline-flex items-center gap-2 border border-border px-3 py-1.5 rounded-full bg-surface mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot" />
          {HERO.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold leading-[1.06] text-[clamp(2.2rem,5.6vw,4rem)] mb-6"
        >
          <span className="text-amber">AI Engineer</span> · Full Stack Developer<br />
          Building Production AI Agents &amp; RAG Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-dim text-[1.05rem] max-w-[560px] mb-9"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold bg-amber text-[#171207] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--amber)] transition-all"
          >
            View Projects <ArrowRight size={15} />
          </a>
          <a
            href="https://github.com/sandeep-rathod-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold border border-border text-text hover:border-teal hover:text-teal transition-all"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold border border-border text-text hover:border-teal hover:text-teal transition-all"
          >
            <FileText size={15} /> Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold border border-border text-text hover:border-violet hover:text-violet transition-all"
          >
            <Mail size={15} /> Contact Me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-faint font-mono text-[0.7rem]">
        <span>scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-text-faint to-transparent" />
      </div>
    </section>
  );
}
