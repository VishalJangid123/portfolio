'use client'

import React, { useState } from 'react'
import { Mail, Linkedin, MessageCircle, ArrowUpRight, Send } from 'lucide-react'

const CONTACT_EMAIL = "vishaljangid1@outlook.com";

const channels = [
  { Icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { Icon: Linkedin, label: "LinkedIn", value: "vishal-jangid", href: "https://www.linkedin.com/in/vishal-jangid-879b85108/" },
  { Icon: MessageCircle, label: "Line", value: "vishaljangid123", href: "https://line.me/ti/p/54ecpXAs48" },
];

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-inkSoft/70 transition-colors focus:border-ink focus:outline-none";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <span className="kicker">
        <span className="font-mono">06</span> / Contact
      </span>
      <h2 className="head_title max-w-2xl">
        Let’s build something <span className="italic text-brand">worth playing.</span>
      </h2>
      <p className="head_subtitle">
        Open to roles and collaborations — drop a line and I’ll get back to you.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Channels */}
        <div className="md:col-span-5">
          <ul className="flex flex-col">
            {channels.map(({ Icon, label, value, href }) => (
              <li key={label} className="border-t border-line first:border-t-0">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <Icon size={18} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-xs uppercase tracking-wider text-inkSoft">
                      {label}
                    </span>
                    <span className="block text-base text-ink">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-inkSoft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-inkSoft">Name</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Your name" className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-inkSoft">Email</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="you@example.com" className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-inkSoft">Message</label>
              <textarea
                id="message" name="message" rows={5} required
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-brand"
            >
              Send message
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
