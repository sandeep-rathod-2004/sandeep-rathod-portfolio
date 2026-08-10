'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Code2, FileText, MapPin } from 'lucide-react';
import { SITE } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

const links = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: Github, label: 'GitHub', href: SITE.github },
  { icon: Code2, label: 'LeetCode', href: SITE.leetcode },
  { icon: FileText, label: 'Resume (PDF)', href: '/resume.pdf' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="11 · Contact" title="Let's talk" subtitle="Open to full-time roles, relocation, and visa sponsorship." />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <Reveal>
          <div className="gradient-border bg-surface rounded-xl2 p-6 h-full">
            <div className="flex items-center gap-2 text-sm text-text-dim mb-6">
              <MapPin size={15} className="text-amber" /> {SITE.location} — available for relocation
            </div>
            <div className="space-y-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-sm text-text-dim hover:text-teal transition-colors border border-border-soft rounded-xl2 px-4 py-3 bg-surface-2"
                >
                  <l.icon size={16} /> {l.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="gradient-border bg-surface rounded-xl2 p-6 flex flex-col gap-4 h-full">
            <div>
              <label htmlFor="name" className="text-xs font-mono text-text-faint uppercase tracking-wider">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full mt-1.5 bg-surface-2 border border-border-soft rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono text-text-faint uppercase tracking-wider">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full mt-1.5 bg-surface-2 border border-border-soft rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="message" className="text-xs font-mono text-text-faint uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full mt-1.5 flex-1 bg-surface-2 border border-border-soft rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] text-sm font-semibold bg-amber text-[#171207] hover:-translate-y-0.5 transition-transform"
            >
              Send Message
            </button>
            <p className="text-xs text-text-faint">Opens your email client — no backend required.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
