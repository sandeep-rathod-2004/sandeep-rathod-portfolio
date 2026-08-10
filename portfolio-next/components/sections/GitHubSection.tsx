'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Users, Star, BookMarked, GitCommit } from 'lucide-react';
import { SITE } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

interface GHUser {
  name: string | null;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

interface GHRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export default function GitHubSection() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${SITE.githubUser}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setUser)
      .catch(() => setError(true));

    fetch(`https://api.github.com/users/${SITE.githubUser}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: GHRepo[]) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setError(true));
  }, []);

  const totalStars = repos?.reduce((sum, r) => sum + (r.stargazers_count || 0), 0) ?? 0;

  return (
    <section id="github" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading eyebrow="05 · GitHub" title="Live from GitHub" subtitle="Fetched client-side from the public GitHub API — no key required." />

      <Reveal>
        <div className="gradient-border bg-surface rounded-xl2 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            {user?.avatar_url ? (
              <Image src={user.avatar_url} alt={user.name || SITE.githubUser} width={56} height={56} className="rounded-full border border-border" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-surface-2 border border-border flex items-center justify-center">
                <Github size={22} className="text-text-faint" />
              </div>
            )}
            <div>
              <p className="font-display font-semibold">{user?.name || SITE.githubUser}</p>
              <p className="text-text-dim text-sm max-w-md">
                {error ? 'GitHub profile — live data unavailable right now.' : user?.bio || 'Generative AI & Full Stack Engineer'}
              </p>
            </div>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 text-sm border border-border rounded-[10px] px-4 py-2 hover:border-teal hover:text-teal transition-colors"
            >
              <Github size={15} /> View Profile
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: BookMarked, label: 'Repositories', value: user?.public_repos ?? '—' },
              { icon: Star, label: 'Stars', value: totalStars },
              { icon: Users, label: 'Followers', value: user?.followers ?? '—' },
              { icon: GitCommit, label: 'Active Repos', value: repos?.length ?? '—' },
            ].map((s) => (
              <div key={s.label} className="border border-border-soft rounded-xl2 bg-surface-2 px-4 py-4 text-center">
                <s.icon size={16} className="text-amber mx-auto mb-2" />
                <p className="font-display font-semibold text-lg">{s.value}</p>
                <p className="text-[11px] text-text-faint font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider mb-3">Recent Activity</p>
          {!repos && !error && <p className="text-text-dim text-sm">Loading repositories…</p>}
          {error && <p className="text-text-dim text-sm">Could not load repositories right now — visit the profile directly.</p>}
          {repos && repos.length === 0 && <p className="text-text-dim text-sm">No public repositories found.</p>}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {repos?.map((r) => (
              <a
                key={r.name}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border-soft rounded-xl2 bg-surface-2 p-4 hover:border-teal transition-colors"
              >
                <p className="font-mono text-sm text-text mb-1 truncate">{r.name}</p>
                <p className="text-xs text-text-faint mb-3 line-clamp-2">{(r.description || 'No description provided.').slice(0, 70)}</p>
                <div className="flex items-center gap-3 text-[11px] text-text-faint">
                  {r.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber inline-block" /> {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={11} /> {r.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
