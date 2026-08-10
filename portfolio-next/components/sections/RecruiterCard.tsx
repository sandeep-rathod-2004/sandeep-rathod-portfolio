import { CheckCircle2, MapPin, Zap } from 'lucide-react';
import { RECRUITER } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';

export default function RecruiterCard() {
  return (
    <section className="max-w-wrap mx-auto px-7 py-8">
      <Reveal>
        <div className="gradient-border rounded-xl2 p-7 sm:p-9 bg-gradient-to-br from-surface to-surface-2 border-violet/40 grid lg:grid-cols-[1.3fr_1fr] gap-8">
          <div>
            <p className="font-mono text-xs text-violet uppercase tracking-wider mb-4">For Recruiters</p>
            <h3 className="font-display font-semibold text-2xl mb-5">Currently looking for</h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {RECRUITER.roles.map((r) => (
                <div key={r} className="flex items-center gap-2 text-sm text-text-dim">
                  <CheckCircle2 size={16} className="text-teal shrink-0" /> {r}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-text-dim">
              <MapPin size={16} className="text-amber shrink-0" /> Based in {RECRUITER.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-dim">
              <Zap size={16} className="text-amber shrink-0" /> {RECRUITER.joining} joining available
            </div>
            <div>
              <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider mb-2">Open to</p>
              <div className="flex flex-wrap gap-2">
                {RECRUITER.openTo.map((o) => (
                  <span key={o} className="text-xs px-2.5 py-1.5 rounded-lg border border-border-soft bg-surface-2 text-text-dim">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
