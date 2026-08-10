import { Mail, Github, FileText } from 'lucide-react';
import { SITE } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';

export default function FinalCTA() {
  return (
    <section className="max-w-wrap mx-auto px-7 py-24">
      <Reveal>
        <div className="gradient-border rounded-xl2 p-10 sm:p-14 text-center bg-gradient-to-br from-surface to-surface-2 border-amber-dim">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-2xl mx-auto mb-5">
            Let&apos;s build the next generation of AI applications
          </h2>
          <p className="text-text-dim max-w-xl mx-auto mb-9">
            I&apos;m passionate about building production-ready AI systems, intelligent agents, RAG pipelines, and
            scalable full-stack applications. If you&apos;re looking for someone who loves solving hard engineering
            problems and learning fast, I&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold bg-amber text-[#171207] hover:-translate-y-0.5 transition-transform">
              Hire Me
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold border border-border hover:border-teal hover:text-teal transition-colors">
              <Mail size={15} /> Email Me
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold border border-border hover:border-teal hover:text-teal transition-colors">
              <Github size={15} /> View GitHub
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold border border-border hover:border-violet hover:text-violet transition-colors">
              <FileText size={15} /> Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
