import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || '';
const githubUrl = process.env.REACT_APP_GITHUB_URL || '';
const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL || '';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const recipient = contactEmail || '';

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 px-5 py-20 text-white transition sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-cyan">
            Contact
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Open to AI/ML, product, and software development opportunities.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            I am looking for internships, entry-level opportunities,
            collaborations, and project-based learning experiences where I can
            contribute, learn quickly, and build meaningful products.
          </p>

          <div className="mt-8 space-y-3">
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.08] p-4 text-slate-200 backdrop-blur transition hover:border-brand-cyan hover:bg-white/[0.12]"
              >
                <FiMail aria-hidden="true" className="text-brand-cyan" />
                <span className="break-all">{contactEmail}</span>
              </a>
            )}
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.08] p-4 text-slate-200 backdrop-blur">
              <FiMapPin aria-hidden="true" className="text-brand-cyan" />
              <span>Gwalior, Madhya Pradesh, India</span>
            </div>
          </div>

          {(githubUrl || linkedinUrl) && (
            <div className="mt-6 flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08] text-xl transition hover:border-brand-cyan hover:text-brand-cyan"
                >
                  <FiGithub aria-hidden="true" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08] text-xl transition hover:border-brand-cyan hover:text-brand-cyan"
                >
                  <FiLinkedin aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-200">Name</span>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/75 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-200">Email</span>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/75 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-200">Message</span>
            <textarea
              required
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-slate-950/75 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30"
              placeholder="Share the role, collaboration, or project you want to discuss"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-cyan px-6 py-3 text-sm font-extrabold text-brand-navy transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
          >
            <FiSend aria-hidden="true" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
