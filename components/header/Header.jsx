'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';

const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Journey", id: "qualification" },
  { label: "Research", id: "publications" },
  { label: "Contact", id: "contact" },
];

const RESUME = "/portfolio/Resume/Vishal_Jangid_Resume.pdf";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navItems.map((i) => i.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/#home" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-sm font-medium text-paper transition-transform duration-300 group-hover:-rotate-12">
            VJ
          </span>
          <span className="hidden font-display text-base font-medium tracking-tight text-ink sm:block">
            Vishal Jangid
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/#${item.id}`}
                className={`relative font-sans text-sm transition-colors duration-200 ${
                  active === item.id ? "text-ink" : "text-inkSoft hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-brand transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={RESUME}
            download="Vishal_Jangid_Resume.pdf"
            className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper md:inline-flex"
          >
            Résumé <ArrowDownToLine size={14} />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-line bg-paper/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
          {navItems.map((item, i) => (
            <li key={item.id} className={i !== 0 ? "border-t border-line/70" : ""}>
              <Link
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 font-display text-lg text-ink"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-inkSoft">
                  0{i + 1}
                </span>
              </Link>
            </li>
          ))}
          <li className="border-t border-line/70 py-4">
            <a
              href={RESUME}
              download="Vishal_Jangid_Resume.pdf"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper"
            >
              Download Résumé <ArrowDownToLine size={14} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
