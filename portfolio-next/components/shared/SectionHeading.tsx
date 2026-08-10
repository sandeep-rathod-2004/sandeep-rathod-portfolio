import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <span className="font-mono text-xs text-teal tracking-wider border border-border rounded-full px-3 py-1.5 bg-surface inline-block mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">{title}</h2>
      {subtitle && <p className="text-text-dim">{subtitle}</p>}
    </Reveal>
  );
}
