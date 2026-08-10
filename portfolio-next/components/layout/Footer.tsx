import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { SITE } from '@/lib/data';

const quickLinks = [
  { href: '#projects', label: 'Projects' },
  { href: SITE.github, label: 'GitHub' },
  { href: SITE.linkedin, label: 'LinkedIn' },
  { href: '/resume.pdf', label: 'Resume' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-soft mt-10">
      <div className="max-w-wrap mx-auto px-7 py-12 grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display font-bold text-lg mb-2">{SITE.name}</p>
          <p className="text-text-dim text-sm max-w-xs">{SITE.role}</p>
          <div className="flex gap-3 mt-5">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-[10px] border border-border flex items-center justify-center text-text-dim hover:text-amber hover:border-amber-dim transition-colors">
              <Github size={16} />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-[10px] border border-border flex items-center justify-center text-text-dim hover:text-teal hover:border-teal transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email" className="w-9 h-9 rounded-[10px] border border-border flex items-center justify-center text-text-dim hover:text-violet hover:border-violet transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-mono text-text-faint uppercase tracking-wider mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-text-dim hover:text-text transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono text-text-faint uppercase tracking-wider mb-4">Résumé</p>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-amber transition-colors"
          >
            <FileText size={15} /> Download PDF
          </a>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <div className="max-w-wrap mx-auto px-7 py-5 text-xs text-text-faint font-mono flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
