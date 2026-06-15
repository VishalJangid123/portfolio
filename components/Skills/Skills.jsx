import React from 'react'
import {
  coreStack,
  ai_data,
  unity_data,
  backend_data,
  devops_data,
  video_data,
  frontend_data,
  integrations_data,
  leadership,
} from './data'

// Ordered by demand + strength: AI/LLM and Unity/real-time lead; backend, DevOps,
// and video follow; frontend/mobile/TV rounds it out. Integrations sit separately.
const groups = [
  { title: "AI / LLM Engineering", icon: "uil-robot", items: ai_data },
  { title: "Unity & Real-Time 3D", icon: "uil-cube", items: unity_data },
  { title: "Backend & Architecture", icon: "uil-server-network", items: backend_data },
  { title: "DevOps & Cloud", icon: "uil-cloud-database-tree", items: devops_data },
  { title: "Video & Streaming", icon: "uil-play-circle", items: video_data },
  { title: "Frontend, Mobile & TV", icon: "uil-mobile-android", items: frontend_data },
];

const SkillGroup = ({ title, icon, items, index }) => (
  <div className="card-surface flex flex-col p-7 md:p-8">
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-lg text-ink">
          <i className={`uil ${icon}`}></i>
        </span>
        <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
      </div>
      <span className="font-mono text-xs text-inkSoft">0{index + 1}</span>
    </div>

    <ul className="flex flex-col">
      {items.map((s, i) => (
        <li
          key={i}
          className="flex items-baseline justify-between gap-4 border-t border-line/70 py-2.5 first:border-t-0"
        >
          <span className="text-sm leading-snug text-ink">{s.name}</span>
          {s.level ? (
            <span className="shrink-0 text-right font-mono text-[11px] uppercase tracking-wide text-inkSoft">
              {s.level}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section className="section" id="skills">
      <span className="kicker">
        <span className="font-mono">03</span> / Capabilities
      </span>
      <h2 className="head_title">What I bring to a team.</h2>
      <p className="head_subtitle">
        AI/LLM and full-stack engineering, backed by DevOps and technical
        leadership.
      </p>

      {/* Core stack — what to look at first */}
      <div className="mt-12 rounded-2xl border border-line bg-surface p-6 md:p-7">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
          Core stack
        </span>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {coreStack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Full breakdown by domain */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {groups.map((g, i) => (
          <SkillGroup key={g.title} {...g} index={i} />
        ))}
      </div>

      {/* External integrations — kept as its own section */}
      <div className="mt-6 card-surface p-7 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-lg text-ink">
            <i className="uil uil-link"></i>
          </span>
          <h3 className="font-display text-lg font-medium text-ink">External Integrations</h3>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrations_data.map((s, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-3 border-t border-line/70 py-2.5"
            >
              <span className="text-sm leading-snug text-ink">{s.name}</span>
              {s.level ? (
                <span className="shrink-0 text-right font-mono text-[11px] uppercase tracking-wide text-inkSoft">
                  {s.level}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Leadership — a primary selling point, given its own block */}
      <div className="mt-6 rounded-2xl border border-line bg-ink p-7 text-paper md:p-9">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[rgba(244,241,234,0.25)] text-lg">
            <i className="uil uil-users-alt"></i>
          </span>
          <h3 className="font-display text-lg font-medium">Leadership &amp; Delivery</h3>
        </div>
        <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {leadership.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[rgba(244,241,234,0.85)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
