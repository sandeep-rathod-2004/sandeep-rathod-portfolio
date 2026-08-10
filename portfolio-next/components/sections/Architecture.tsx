import { AI_ARCHITECTURE } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import FlowDiagram from '@/components/shared/FlowDiagram';

export default function Architecture() {
  return (
    <section className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="06 · Architecture" title="How I build AI applications" subtitle="The same request → agent → response pattern underlies most of my production projects." />
      <Reveal>
        <div className="gradient-border bg-surface rounded-xl2 p-7 sm:p-9 overflow-x-auto">
          <FlowDiagram steps={AI_ARCHITECTURE} />
        </div>
      </Reveal>
    </section>
  );
}
