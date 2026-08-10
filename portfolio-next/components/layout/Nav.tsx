'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Github, Command } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] border-b transition-colors ${
        scrolled ? 'border-border-soft glass' : 'border-transparent'
      }`}
    >
      <nav className="max-w-wrap mx-auto px-7 h-[68px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-[1.05rem]">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="var(--bg)" />
            <circle cx="9" cy="16" r="3.2" fill="var(--amber)" />
            <circle cx="23" cy="9" r="3.2" fill="var(--teal)" />
            <circle cx="23" cy="23" r="3.2" fill="var(--violet)" />
            <path d="M12 16 L20 9 M12 16 L20 23" stroke="var(--border)" strokeWidth="1.6" />
          </svg>
          {SITE.name}
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.92rem] text-text-dim hover:text-text transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-cmdk'))}
            className="hidden sm:flex items-center gap-1.5 text-xs text-text-faint border border-border rounded-[10px] px-2.5 py-2 hover:text-teal hover:border-teal transition-colors font-mono"
            aria-label="Open command palette"
          >
            <Command size={14} /> K
          </button>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-[10px] border border-border bg-surface hidden sm:flex items-center justify-center text-text-dim hover:text-amber hover:border-amber-dim transition-colors"
            aria-label="GitHub profile"
          >
            <Github size={17} />
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-[11px] rounded-[10px] text-sm font-semibold bg-amber text-[#171207] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--amber)] transition-all"
          >
            Contact Me
          </a>
          <button
            className="md:hidden text-text"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border-soft px-7 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-text-dim hover:text-text">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-amber font-semibold">
            Contact Me →
          </a>
        </div>
      )}
    </header>
  );
}
