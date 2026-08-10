import { Github, ExternalLink, Star } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import FlowDiagram from '@/components/shared/FlowDiagram';

export default function Projects() {
  return (
    <section id="projects" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="04 · Projects" title="Featured work" subtitle="Every project below is built to look and run like a real product, not a tutorial exercise." />

      <div className="flex flex-col gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.2)}>
            <article
              className={`gradient-border rounded-xl2 p-6 sm:p-8 ${p.featured ? 'bg-gradient-to-br from-surface to-surface-2 border-amber-dim' : 'bg-surface'}`}
            >
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                  {p.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber border border-amber-dim rounded-full px-2 py-0.5">
                      <Star size={11} fill="currentColor" /> Featured
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`} className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-dim hover:text-amber hover:border-amber-dim transition-colors">
                      <Github size={15} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} live demo`} className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-dim hover:text-teal hover:border-teal transition-colors">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-text-dim text-sm mb-2 font-medium">{p.tagline}</p>
              <p className="text-text-dim text-sm mb-5 max-w-3xl">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-lg border border-border-soft bg-surface-2 text-text-dim">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mb-5 overflow-x-auto">
                <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider mb-2">Architecture</p>
                <FlowDiagram steps={p.architecture} dense />
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-2">
                {p.features.map((f) => (
                  <div key={f} className="flex gap-2 text-sm text-text-dim">
                    <span className="text-teal mt-0.5">✓</span>
                    {f}
                  </div>
                ))}
              </div>

              {p.metrics && (
                <div className="flex flex-wrap gap-6 mt-5 pt-5 border-t border-border-soft">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display font-semibold text-lg text-amber">{m.value}</p>
                      <p className="text-[11px] text-text-faint font-mono uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
