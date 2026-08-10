import { Star } from 'lucide-react';
import { SKILLS } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="08 · Skills" title="Depth, not just breadth" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.03}>
            <div className="flex items-center justify-between border border-border rounded-xl2 bg-surface px-4 py-3.5">
              <span className="text-sm text-text">{s.name}</span>
              <span className="flex gap-0.5" aria-label={`${s.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} className={idx < s.rating ? 'text-amber' : 'text-border'} fill={idx < s.rating ? 'currentColor' : 'none'} />
                ))}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
