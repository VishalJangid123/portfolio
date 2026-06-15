import React from 'react'
import { ArrowDownRight, ArrowDownToLine } from 'lucide-react'
import { Social } from './Social'

export const Data = () => {
  return (
    <div className="max-w-xl">
      <div
        className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-inkSoft"
        style={{ animationDelay: "60ms" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        Open to opportunities · Thailand
      </div>

      <h1
        className="animate-fade-up mt-6 font-display text-6xl font-medium leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-7xl"
        style={{ animationDelay: "140ms" }}
      >
        Vishal
        <br />
        Jangid
      </h1>

      <p
        className="animate-fade-up mt-5 font-display text-xl italic text-inkSoft md:text-2xl"
        style={{ animationDelay: "220ms" }}
      >
        Unity Game Developer <span className="text-brand">&amp;</span> Full-Stack Engineer
      </p>

      <p
        className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-inkSoft"
        style={{ animationDelay: "300ms" }}
      >
        I build playable games with complex mechanics in Unity and ship full-stack
        web apps with React &amp; Node. I hold an M.Eng in Computer Engineering and
        have published peer-reviewed research in VR &amp; computer&nbsp;vision.
      </p>

      <div
        className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
        style={{ animationDelay: "380ms" }}
      >
        <a
          href="#portfolio"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-brand"
        >
          View Work
          <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </a>
        <a
          href="/portfolio/Resume/Vishal_Jangid_Resume.pdf"
          download="Vishal_Jangid_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Download CV
          <ArrowDownToLine size={16} />
        </a>
      </div>

      <div
        className="animate-fade-up mt-9"
        style={{ animationDelay: "460ms" }}
      >
        <Social />
      </div>
    </div>
  )
}
