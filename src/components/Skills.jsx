import React from 'react';
import {
  FaCloud,
  FaCode,
  FaJava,
  FaPython,
  FaReact,
  FaUsers,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
import { FiBarChart2, FiCpu, FiGitBranch, FiLayers, FiSearch } from 'react-icons/fi';

const skillGroups = [
  {
    title: 'AI/ML Foundations',
    description: 'Concepts and tools for building intelligent, user-aware systems.',
    skills: [
      { name: 'Machine Learning', icon: FiCpu, color: 'text-cyan-300' },
      { name: 'NLP Concepts', icon: FiSearch, color: 'text-violet-300' },
      { name: 'Computer Vision', icon: FiLayers, color: 'text-emerald-300' },
      { name: 'Python', icon: FaPython, color: 'text-blue-300' },
    ],
  },
  {
    title: 'Product & Strategy',
    description: 'Recruiter-friendly product skills for turning ideas into outcomes.',
    skills: [
      { name: 'User Research', icon: FaUsers, color: 'text-pink-300' },
      { name: 'Roadmapping', icon: FiGitBranch, color: 'text-cyan-300' },
      { name: 'Analytics Thinking', icon: FiBarChart2, color: 'text-emerald-300' },
      { name: 'Problem Framing', icon: FaCode, color: 'text-violet-300' },
    ],
  },
  {
    title: 'Software Development',
    description: 'Frontend and backend fundamentals used to ship clean projects.',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-cyan-300' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-300' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
      { name: 'Java', icon: FaJava, color: 'text-red-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-300' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
      { name: 'Cloud Basics', icon: FaCloud, color: 'text-cyan-300' },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 px-5 py-20 text-white transition sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-cyan">
            Skills
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            A skill set organized around the roles I am targeting.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Recruiters should quickly see three strengths: AI curiosity,
            product clarity, and the ability to build polished software
            interfaces.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/[0.08] p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-brand-cyan/60"
            >
              <h3 className="text-xl font-extrabold">{group.title}</h3>
              <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-300">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex min-h-24 flex-col justify-between rounded-lg border border-white/10 bg-slate-950/55 p-4 transition hover:border-brand-cyan/60 hover:bg-slate-950/80"
                    >
                      <Icon
                        aria-hidden="true"
                        className={`text-2xl ${skill.color}`}
                      />
                      <span className="mt-4 text-sm font-bold leading-5 text-slate-100">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
