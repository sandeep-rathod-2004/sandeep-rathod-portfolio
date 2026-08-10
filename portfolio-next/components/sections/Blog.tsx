import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Blog() {
  return (
    <section className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="09 · Writing" title="Notes &amp; upcoming posts" subtitle="Long-form write-ups on what I'm building and learning." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.04}>
            <div className="border border-border rounded-xl2 bg-surface p-5 h-full flex flex-col justify-between hover:border-teal transition-colors">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-base">{post.title}</h3>
                  <ArrowUpRight size={16} className="text-text-faint shrink-0" />
                </div>
                <p className="text-text-dim text-sm">{post.excerpt}</p>
              </div>
              <span className="mt-4 inline-block w-fit text-[11px] font-mono text-amber border border-amber-dim rounded-full px-2.5 py-1">
                {post.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
