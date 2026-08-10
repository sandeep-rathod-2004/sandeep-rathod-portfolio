import { CheckCircle2 } from 'lucide-react';
import { ABOUT_POINTS } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

export default function About() {
  return (
    <section id="about" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="01 · About" title="I turn AI research into shipped software" subtitle="A quick summary of who I am and what I'm looking for." />
      <div className="grid sm:grid-cols-2 gap-3">
        {ABOUT_POINTS.map((point, i) => (
          <Reveal key={point} delay={i * 0.05}>
            <div className="flex items-start gap-3 border border-border rounded-xl2 bg-surface px-4 py-3.5">
              <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
              <span className="text-sm text-text-dim">{point}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
