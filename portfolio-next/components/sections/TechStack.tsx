import { TECH_STACK } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

export default function TechStack() {
  const categories = Object.entries(TECH_STACK);
  return (
    <section className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="02 · Stack" title="Technologies I build with" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.05}>
            <div className="gradient-border bg-surface rounded-xl2 p-5 h-full">
              <p className="font-mono text-xs text-text-faint uppercase tracking-wider mb-3">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1.5 rounded-lg border border-border-soft bg-surface-2 text-text-dim">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
