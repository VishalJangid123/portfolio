import React from 'react'

const links = [
  { href: "https://github.com/VishalJangid123", label: "GitHub", icon: "uil uil-github-alt" },
  { href: "https://www.linkedin.com/in/vishal-jangid-879b85108/", label: "LinkedIn", icon: "uil uil-linkedin-alt" },
  { href: "https://line.me/ti/p/54ecpXAs48", label: "Line", icon: "uil uil-line" },
];

export const Social = () => {
  return (
    <div className="flex items-center gap-1">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          title={l.label}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg text-inkSoft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </div>
  )
}
