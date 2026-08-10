import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="03 · Experience" title="Where I've built" />
      <Reveal>
        <div className="gradient-border bg-surface rounded-xl2 p-7 sm:p-9">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl2 bg-surface-2 border border-border flex items-center justify-center">
                <Briefcase size={19} className="text-amber" />
              </span>
              <div>
                <p className="font-display font-semibold text-lg">{EXPERIENCE.company}</p>
                <p className="text-text-dim text-sm">{EXPERIENCE.title}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-7">
            {EXPERIENCE.stack.map((s) => (
              <span key={s} className="text-xs font-mono px-2.5 py-1.5 rounded-lg border border-border-soft bg-surface-2 text-teal">
                {s}
              </span>
            ))}
          </div>

          <ul className="space-y-3">
            {EXPERIENCE.achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-text-dim">
                <span className="text-amber mt-1">▸</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
