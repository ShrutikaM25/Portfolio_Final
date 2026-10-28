import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { personalData } from '../../utils/data/personal-data';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';
import TiltCard from '../helper/tilt-card';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const channels = [
  { icon: FiLinkedin, label: 'LinkedIn', value: 'in/shrutika-malve', href: personalData.linkedIn },
  { icon: FiGithub, label: 'GitHub', value: 'ShrutikaM25', href: personalData.github },
  { icon: FiPhone, label: 'Phone', value: personalData.phone, href: `tel:${personalData.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: personalData.location },
];

const inputClass =
  'peer w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 pb-2.5 pt-6 text-sm text-white outline-none transition placeholder-transparent focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/20';
const labelClass =
  'pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-violet-300';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalData.email}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error?.text || error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(50% 45% at 50% 60%, rgba(139,92,246,0.14), transparent 70%)' }}
      />
      <div className="container-x">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Let's build something"
          highlight="together"
          subtitle="Have a role, project or idea in GenAI, full-stack or ML engineering? Drop me a message."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          {/* Channels */}
          <div className="space-y-4">
            <Reveal>
              <TiltCard max={8} className="card rounded-2xl bg-gradient-to-br from-violet-600/25 to-cyan-600/10 p-6">
                <div className="flex items-center gap-3 text-violet-200">
                  <FiMail />
                  <span className="font-mono text-xs uppercase tracking-widest">Email</span>
                </div>
                <a href={`mailto:${personalData.email}`} className="mt-3 block break-all font-display text-xl font-semibold text-white hover:underline sm:text-2xl">
                  {personalData.email}
                </a>
                <button type="button" onClick={copyEmail} className="btn-ghost mt-5 !px-4 !py-2">
                  {copied ? <FiCheck className="text-emerald-300" /> : <FiCopy />}
                  {copied ? 'Copied!' : 'Copy address'}
                </button>
              </TiltCard>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((channel, i) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <Icon className="text-lg text-cyan-300" />
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-slate-500">{channel.label}</p>
                    <p className="mt-1 break-words text-sm font-medium text-slate-200">{channel.value}</p>
                  </>
                );
                return (
                  <Reveal key={channel.label} delay={0.06 * i}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="card block h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet-400/50"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="card h-full rounded-2xl p-5">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card h-full space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  <label htmlFor="contact-name" className={labelClass}>Your name</label>
                </div>
                <div className="relative">
                  <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email address" className={inputClass} />
                  <label htmlFor="contact-email" className={labelClass}>Email address</label>
                </div>
              </div>
              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className={`${inputClass} resize-none`}
                />
                <label htmlFor="contact-message" className={labelClass}>Your message</label>
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:cursor-wait disabled:opacity-60">
                <FiSend /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <p aria-live="polite" className="min-h-[1.25rem] text-sm">
                {status === 'success' && <span className="text-emerald-300">Thanks! Your message is on its way.</span>}
                {status === 'error' && (
                  <span className="text-rose-300">
                    Couldn't send right now. Please email me at{' '}
                    <a href={`mailto:${personalData.email}`} className="underline">
                      {personalData.email}
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
