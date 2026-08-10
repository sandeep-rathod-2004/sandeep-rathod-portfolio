import { STATS } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import Counter from '@/components/shared/Counter';

export default function Statistics() {
  return (
    <section className="max-w-wrap mx-auto px-7 py-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="text-center border border-border rounded-xl2 bg-surface py-7 px-3">
              <p className="font-display font-semibold text-2xl sm:text-3xl text-amber mb-1">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[11px] text-text-faint font-mono uppercase tracking-wider">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
