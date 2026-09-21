import { Github, ExternalLink, Star } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import FlowDiagram from '@/components/shared/FlowDiagram';

const featuredProject = PROJECTS.find((project) => project.featured);
const deployedProjects = PROJECTS.filter((project) => project.demo && !project.featured);
const aiProjects = PROJECTS.filter((project) => !project.demo);

export default function Projects() {
  const renderProjectCard = (project: (typeof PROJECTS)[number], index: number) => (
    <Reveal key={project.slug} delay={Math.min(index * 0.04, 0.2)}>
      <article
        className={`gradient-border rounded-xl2 p-6 sm:p-8 ${project.featured ? 'bg-gradient-to-br from-surface to-surface-2 border-amber-dim' : 'bg-surface'}`}
      >
        <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <h3 className="font-display font-semibold text-xl">{project.name}</h3>
            {project.featured && (
              <span className="flex items-center gap-1 text-[11px] font-mono text-amber border border-amber-dim rounded-full px-2 py-0.5">
                <Star size={11} fill="currentColor" /> Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="inline-flex items-center gap-2 rounded-lg border border-amber-dim bg-amber/10 px-3 py-2 text-xs font-semibold text-amber transition-colors hover:border-amber hover:bg-amber/15"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-dim transition-colors hover:border-teal hover:text-teal"
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>
        </div>

        <p className="text-text-dim text-sm mb-2 font-medium">{project.tagline}</p>
        <p className="text-text-dim text-sm mb-5 max-w-3xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-lg border border-border-soft bg-surface-2 text-text-dim">
              {s}
            </span>
          ))}
        </div>

        <div className="mb-5 overflow-x-auto">
          <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider mb-2">How it works</p>
          <FlowDiagram steps={project.architecture} dense />
        </div>

        {project.features.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-2">
            {project.features.map((f) => (
              <div key={f} className="flex gap-2 text-sm text-text-dim">
                <span className="text-teal mt-0.5">✓</span>
                {f}
              </div>
            ))}
          </div>
        )}

        {project.metrics && (
          <div className="flex flex-wrap gap-6 mt-5 pt-5 border-t border-border-soft">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display font-semibold text-lg text-amber">{m.value}</p>
                <p className="text-[11px] text-text-faint font-mono uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );

  return (
    <section id="projects" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading
        eyebrow="04 · Projects"
        title="Featured work"
        subtitle="Shipping product-minded AI, full-stack, and deployment-focused builds across client work and engineering experiments."
      />

      <div className="flex flex-col gap-8">
        {featuredProject && (
          <div className="space-y-4">
            <p className="text-[11px] font-mono text-amber uppercase tracking-wider">Featured Project</p>
            {renderProjectCard(featuredProject, 0)}
          </div>
        )}

        {deployedProjects.length > 0 && (
          <div className="space-y-4">
            <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider">Deployed Projects</p>
            <div className="grid gap-6 xl:grid-cols-2">
              {deployedProjects.map((project, index) => renderProjectCard(project, index + 1))}
            </div>
          </div>
        )}

        {aiProjects.length > 0 && (
          <div className="space-y-4">
            <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider">AI & Full-Stack Engineering Projects</p>
            <div className="grid gap-6 xl:grid-cols-2">
              {aiProjects.map((project, index) => renderProjectCard(project, index + 1))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
