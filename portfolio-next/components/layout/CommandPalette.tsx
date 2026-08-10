'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE, NAV_LINKS } from '@/lib/data';

interface Cmd {
  label: string;
  hint: string;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);

  const commands: Cmd[] = useMemo(
    () => [
      ...NAV_LINKS.map((l) => ({
        label: `Go to ${l.label}`,
        hint: 'section',
        action: () => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      { label: 'Open GitHub profile', hint: 'external', action: () => window.open(SITE.github, '_blank') },
      { label: 'Open LinkedIn', hint: 'external', action: () => window.open(SITE.linkedin, '_blank') },
      { label: 'Email me', hint: 'mailto', action: () => (window.location.href = `mailto:${SITE.email}`) },
      { label: 'Download résumé', hint: 'pdf', action: () => window.open('/resume.pdf', '_blank') },
    ],
    []
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    function onOpen() {
      setOpen(true);
      setQuery('');
      setActiveIdx(0);
    }
    function onKeydown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpen();
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('open-cmdk', onOpen);
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('open-cmdk', onOpen);
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);

  function onListKeydown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && filtered[activeIdx]) { filtered[activeIdx].action(); setOpen(false); }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-black/60 flex items-start justify-center pt-[15vh] px-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="w-full max-w-lg glass border border-border rounded-xl2 overflow-hidden shadow-2xl"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveIdx(0); }}
              onKeyDown={onListKeydown}
              placeholder="Type a command…"
              className="w-full bg-transparent px-5 py-4 text-text placeholder:text-text-faint outline-none border-b border-border-soft font-mono text-sm"
            />
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && <div className="px-5 py-3 text-text-faint text-sm">No matches</div>}
              {filtered.map((c, i) => (
                <button
                  key={c.label}
                  onClick={() => { c.action(); setOpen(false); }}
                  className={`w-full flex items-center justify-between px-5 py-2.5 text-sm text-left transition-colors ${
                    i === activeIdx ? 'bg-surface-2 text-text' : 'text-text-dim hover:bg-surface-2'
                  }`}
                >
                  <span>{c.label}</span>
                  <span className="font-mono text-xs text-text-faint">{c.hint}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
