import React from 'react'
import { ArrowDown } from 'lucide-react'

export const ScrollDown = () => {
  return (
    <a
      href="#about"
      className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-inkSoft transition-colors hover:text-ink"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors group-hover:border-ink">
        <ArrowDown size={14} className="animate-bounce" />
      </span>
      Scroll
    </a>
  )
}

export default ScrollDown;
