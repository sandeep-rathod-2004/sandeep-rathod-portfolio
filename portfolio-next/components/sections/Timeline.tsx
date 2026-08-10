import { TIMELINE } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Timeline() {
  return (
    <section className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="07 · Timeline" title="The path so far" />
      <div className="relative pl-6 border-l border-border-soft space-y-8">
        {TIMELINE.map((step, i) => (
          <Reveal key={step.label} delay={i * 0.04} className="relative">
            <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-amber border-4 border-bg" />
            <div className="flex items-baseline gap-3 flex-wrap">
              {step.year && <span className="font-mono text-xs text-teal">{step.year}</span>}
              <p className="text-text">{step.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
