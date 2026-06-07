import React from 'react';
import { FiArrowUpRight, FiCpu, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import projects from '../data/projects';

const projectIcons = {
  'Language Agnostic Chatbot': FiMessageSquare,
  SkillBoost: FiTrendingUp,
  'Focus Guardian': FiCpu,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-5 py-20 text-white transition sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-cyan">
              Projects
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              AI, product, and software projects framed around user problems.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Each project is presented with the problem, solution direction,
              technical focus, and product value so recruiters can understand
              both implementation thinking and decision-making.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:border-brand-cyan hover:text-brand-cyan sm:w-auto"
          >
            Discuss a Project
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = projectIcons[project.title] || FiCpu;

            return (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.08] p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-brand-cyan/60"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-cyan text-brand-navy">
                    <Icon aria-hidden="true" className="text-xl" />
                  </div>
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    {project.status}
                  </span>
                </div>

                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-cyan">
                  {project.category}
                </p>
                <h3 className="text-2xl font-extrabold leading-tight">
                  {project.title}
                </h3>

                <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {project.problem}
                  </p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-cyan" />
                      <span className="leading-6">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
