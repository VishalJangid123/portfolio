'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Image as ImageIcon,
  PlayCircle,
} from 'lucide-react'
import { Button } from '../ui/button'

const TECH_LABELS = {
  game_development: "Game Development",
  full_stack: "Full Stack",
  ai: "GenAI / ML",
  blog: "Writing",
};

const proseClasses = [
  "prose prose-stone max-w-none",
  "prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-ink",
  "prose-h3:text-lg prose-h4:text-base",
  "prose-p:text-[0.95rem] prose-p:leading-relaxed prose-p:text-inkSoft",
  "prose-a:font-medium prose-a:text-brand prose-a:no-underline hover:prose-a:underline",
  "prose-strong:text-ink prose-strong:font-semibold",
  "prose-li:text-inkSoft prose-li:marker:text-brand prose-li:text-[0.95rem]",
  "prose-code:rounded prose-code:bg-[hsl(var(--secondary))] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-ink prose-code:before:content-none prose-code:after:content-none",
  "prose-pre:rounded-xl prose-pre:border prose-pre:border-line prose-pre:bg-ink prose-pre:text-paper",
  "prose-blockquote:border-l-brand prose-blockquote:text-inkSoft prose-blockquote:not-italic",
  "prose-hr:border-line prose-img:rounded-lg prose-img:border prose-img:border-line",
].join(" ");

const mdOptions = {
  overrides: {
    Button: { component: Button, props: { className: "bg-ink" } },
    CustomImage: { component: () => null },
  },
};

/* ---------- Media gallery (screenshots + video/demo embeds) ---------- */
function MediaPanel({ images, embeds }) {
  const hasImages = images.length > 0;
  const hasEmbeds = embeds.length > 0;
  const [mode, setMode] = useState(hasImages ? "gallery" : "demo");
  const [index, setIndex] = useState(0);

  const go = (dir) =>
    setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div className="card-surface overflow-hidden">
      {hasImages && hasEmbeds && (
        <div className="flex border-b border-line">
          <button
            type="button"
            onClick={() => setMode("gallery")}
            className={`flex flex-1 items-center justify-center gap-2 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${
              mode === "gallery" ? "bg-ink text-paper" : "text-inkSoft hover:text-ink"
            }`}
          >
            <ImageIcon size={14} /> Screens
          </button>
          <button
            type="button"
            onClick={() => setMode("demo")}
            className={`flex flex-1 items-center justify-center gap-2 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${
              mode === "demo" ? "bg-ink text-paper" : "text-inkSoft hover:text-ink"
            }`}
          >
            <PlayCircle size={14} /> Demo
          </button>
        </div>
      )}

      {mode === "gallery" && hasImages && (
        <div className="p-3">
          <div className="group relative grid aspect-[16/10] place-items-center overflow-hidden rounded-lg bg-[hsl(var(--secondary))]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index].src}
              alt={images[index].alt || "Project screenshot"}
              className="h-full w-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-ink shadow-sm transition hover:bg-paper"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-ink shadow-sm transition hover:bg-paper"
                >
                  <ChevronRight size={18} />
                </button>
                <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] text-paper">
                  {index + 1} / {images.length}
                </span>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-14 w-16 shrink-0 overflow-hidden rounded-md border transition ${
                    i === index ? "border-ink" : "border-line opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {mode === "demo" && hasEmbeds && (
        <div className="flex flex-col gap-4 p-4">
          {embeds.map((html, i) => (
            <div
              key={i}
              className="flex justify-center overflow-x-auto [&_iframe]:max-w-full [&_iframe]:rounded-lg"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Collapsible content sections ---------- */
function Section({ title, md, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-medium text-ink">{title}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-inkSoft transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className={`${proseClasses} pb-6`}>
          <Markdown options={mdOptions}>{md}</Markdown>
        </div>
      )}
    </div>
  );
}

/* ---------- Page ---------- */
export default function ProjectDetail({ data, tech, sections, images, embeds }) {
  const hasMedia = images.length > 0 || embeds.length > 0;

  const facts = [
    { label: "Type", value: data.build_platform?.name || TECH_LABELS[tech] || tech },
    data.date && { label: "Year", value: data.date },
    images.length > 0 && { label: "Screens", value: String(images.length) },
  ].filter(Boolean);

  return (
    <article className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
      <Link
        href="/#portfolio"
        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-inkSoft transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
        All Work
      </Link>

      {/* Header */}
      <header className="mt-8 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-inkSoft">
          <span className="text-brand">{TECH_LABELS[tech] || tech}</span>
          {data.build_platform?.name && (
            <>
              <span className="text-line">/</span>
              <span className="inline-flex items-center gap-1">
                <i className={`uil uil-${data.build_platform.icon}`}></i>
                {data.build_platform.name}
              </span>
            </>
          )}
          {data.date && (
            <>
              <span className="text-line">/</span>
              <span>{data.date}</span>
            </>
          )}
        </div>

        <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-5xl">
          {data.title}
        </h1>

        {data.subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-inkSoft">
            {data.subtitle}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          {data.social?.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {data.social.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium capitalize text-paper transition-colors hover:bg-brand"
                >
                  <i className={`uil uil-${item.name}`}></i>
                  {item.name}
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          )}

          {data.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-inkSoft"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Body: media + content */}
      <div className={`mt-10 grid gap-10 ${hasMedia ? "lg:grid-cols-12" : ""}`}>
        {hasMedia && (
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <MediaPanel images={images} embeds={embeds} />
              {facts.length > 0 && (
                <dl className="mt-4 grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-surface">
                  {facts.map((f) => (
                    <div key={f.label} className="px-4 py-3">
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-inkSoft">
                        {f.label}
                      </dt>
                      <dd className="mt-1 truncate text-sm font-medium text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        )}

        <div className={hasMedia ? "lg:col-span-6" : "mx-auto max-w-3xl"}>
          {sections.length > 0 ? (
            <div>
              {sections.map((s, i) => (
                <Section key={i} title={s.title} md={s.md} defaultOpen={i === 0} />
              ))}
            </div>
          ) : (
            <p className="text-inkSoft">No write-up available for this project yet.</p>
          )}
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Link
          href="/#portfolio"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          Back to all projects
        </Link>
      </div>
    </article>
  );
}
