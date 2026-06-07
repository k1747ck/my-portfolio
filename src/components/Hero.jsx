import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiDownload, FiLayers, FiTarget } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const roleSignals = [
  'AI/ML Engineer',
  'Product Management',
  'Software Developer',
];

const highlights = [
  {
    icon: FiTarget,
    label: 'Focus',
    value: 'AI products with practical user impact',
  },
  {
    icon: FiLayers,
    label: 'Stack',
    value: 'React, Tailwind, Python, Java, NLP',
  },
  {
    icon: FiBriefcase,
    label: 'Profile',
    value: 'Final-Year BCA Student',
  },
];

const Hero = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-6"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(103,232,249,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.14),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-slate-950 to-transparent" />

      <motion.div
        className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div
            className="mb-5 flex flex-wrap gap-2"
            variants={itemVariants}
            aria-label="Target roles"
          >
            {roleSignals.map((role) => (
              <span
                key={role}
                className="rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-xs font-bold text-cyan-100 backdrop-blur"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300"
            variants={itemVariants}
          >
            Khushi Kadam
          </motion.p>

          <motion.h1
            className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Building AI-aware products with clean software execution.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg"
            variants={itemVariants}
          >
            Final-year BCA student focused on artificial intelligence, machine
            learning, product management, cloud technologies, and full-stack
            software development. I turn early ideas into structured, usable
            projects with strong user value.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
            >
              View Projects
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={resumeUrl}
              download="Khushi-Kadam-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
            >
              <FiDownload aria-hidden="true" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="rounded-lg border border-white/[0.12] bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6"
          variants={itemVariants}
        >
          <div className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Portfolio Snapshot
            </p>
            <div className="mt-5 space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
