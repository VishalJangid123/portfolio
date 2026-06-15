import React from 'react'
import { ArrowUp } from 'lucide-react'

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#portfolio" },
  { label: "Skills", href: "/#skills" },
  { label: "Research", href: "/#publications" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { href: "https://github.com/VishalJangid123", icon: "uil uil-github-alt", label: "GitHub" },
  { href: "https://www.linkedin.com/in/vishal-jangid-879b85108/", icon: "uil uil-linkedin-alt", label: "LinkedIn" },
  { href: "https://line.me/ti/p/54ecpXAs48", icon: "uil uil-line", label: "Line" },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-medium text-ink">Vishal Jangid</p>
            <p className="mt-3 text-sm leading-relaxed text-inkSoft">
              Unity game developer & full-stack engineer based in Bangkok, Thailand.
              Always happy to talk about games, the web, and everything in between.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="link-underline w-fit text-sm">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-inkSoft">
            © {new Date().getFullYear()} Vishal Jangid. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-inkSoft transition-colors hover:border-ink hover:text-ink"
              >
                <i className={s.icon}></i>
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-ink text-paper transition-colors hover:bg-brand"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
