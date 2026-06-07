import React from 'react';
import { FiCpu, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const focusAreas = [
  {
    icon: FiCpu,
    title: 'AI/ML Engineering',
    text: 'Exploring NLP, computer vision, behavioral analytics, and applied AI systems that solve practical problems.',
  },
  {
    icon: FiTrendingUp,
    title: 'Product Thinking',
    text: 'Translating user needs into feature priorities, clear workflows, and measurable product outcomes.',
  },
  {
    icon: FiGlobe,
    title: 'Software Development',
    text: 'Building responsive React interfaces, structured project flows, and maintainable frontend experiences.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 px-5 py-20 text-white transition sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-cyan">
              About
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Final-year BCA student building at the intersection of AI,
              software, and product strategy.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>
                I am Khushi Kadam, a final-year BCA student focused on
                artificial intelligence, machine learning, product management,
                cloud technologies, and software development.
              </p>
              <p>
                My portfolio is built around practical project thinking:
                identify a real user problem, design a usable solution, choose
                the right technologies, and communicate the product value
                clearly. This helps me prepare for AI/ML engineering, product,
                and software development roles.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-xl shadow-black/10 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand-cyan text-brand-navy">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white">{area.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {area.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Education', 'Final-Year BCA Student'],
            ['Primary Interests', 'AI, ML, PM, Cloud'],
            ['Frontend Stack', 'React, Tailwind CSS'],
            ['Programming', 'Python, Java, JavaScript'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/[0.08] p-5 backdrop-blur"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">
                {label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-100">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
