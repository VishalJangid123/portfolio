'use client'

import React, { useState } from 'react'
import { GraduationCap, Briefcase, Laptop, ArrowUpRight } from 'lucide-react'

const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    icon: "bx bxl-aws",
    image: "/portfolio/Images/aws-certified-ai-practitioner.png",
    verifyUrl: "https://www.credly.com/badges/d6fd41c0-02c6-4a8e-9857-1cb10c66d68f/public_url",
  },
];

const education = [
  {
    title: "Master of Engineering — Computer Engineering",
    place: "Thammasat University, Faculty of Engineering",
    location: "Rangsit, Thailand",
    date: "2021 — 2025",
    points: [
      "GPA 3.9",
      "Research in VR & 3D visualization for heritage and structural inspection",
    ],
    papers: [
      { year: "2021", title: "Fishtank Sandbox — ACM VRST" },
      { year: "2023", title: "Dam inspection (CNN-FCN) — SHM" },
      { year: "2025", title: "Heritage Fish Tank VR — GEOMATE Journal" },
    ],
  },
  {
    title: "Bachelor of Technology — Computer Science",
    place: "BK Birla Institute of Engineering & Technology",
    location: "Pilani, India",
    date: "2015 — 2019",
  },
];

const experience = [
  {
    title: "Full-Stack Developer",
    place: "AllEvents.in",
    location: "Gujarat, India",
    date: "Mar 2020 — Aug 2020",
    points: [
      "Built and maintained backend logic and new APIs in PHP",
      "Developed dynamic, responsive UIs with AngularJS and ReactJS",
      "Participated in code reviews, following team best practices",
    ],
  },
  {
    title: "Unity Developer",
    place: "Sufalam Technologies",
    location: "Gujarat, India",
    date: "Aug 2019 — Oct 2019",
    points: [
      "Built a VR rhythm game for Oculus Quest with music sync and motion tracking",
      "Implemented rhythm gameplay, visual effects, and haptic feedback",
      "Contributed to a carnival-simulation VR game with interactive physics",
    ],
  },
  {
    title: "Software Engineer",
    place: "NewGenApps",
    location: "India",
    date: "Jan 2019 — Feb 2019",
  },
  {
    title: "Research-Based Internship",
    place: "Thammasat University",
    location: "Rangsit, Thailand",
    date: "Sep 2018 — Oct 2018",
    points: [
      "Converted point-cloud data into 3D models using MeshLab",
      "Built voice-controlled VR visualization of Thai historic temples (Oculus Go)",
    ],
  },
];

// Anonymized client engagements (undated — details under NDA). Same timeline shape.
const freelance = [
  {
    title: "Metaverse Multiplayer Application",
    place: "Unity Developer · Unity, Mirror, AWS Lightsail",
    points: [
      "Real-time public/private chat; interest management scaled to 100 concurrent users",
      "AWS Lightsail migration cut CPU 76% → 20%; build trimmed 8 GB → 6 GB",
      "macOS code-signing & notarization; async REST integration",
    ],
  },
  {
    title: "iOS SDK",
    place: "Lead / Unity Developer · Unity, CMake, iOS",
    points: [
      "Led Windows/macOS → iOS migration of the core product",
      "Tuned touch interactions and performance for iPad & iPhone",
    ],
  },
  {
    title: "Gamified Language Learning Application",
    place: "Unity Developer · Unity, REST",
    points: [
      "Gameplay mechanics to enhance language learning",
      "Async REST data flows; build / sign / deploy across test & production",
    ],
  },
  {
    title: "3D NFT Editor & Viewer",
    place: "Unity Developer · Unity, 3D",
    points: [
      "Artists import 3D models, tune lighting/textures, and save 3D NFTs to a backend",
      "UI/UX collaboration on the editor interface",
    ],
  },
  {
    title: "3D Museum Exhibition",
    place: "Unity Developer · Unity, 3D",
    points: [
      "Immersive holographic artifact viewer for museums",
      "Optimized 3D models & rendering to reduce build size",
    ],
  },
];

const Timeline = ({ items }) => (
  <ol className="relative ml-3 border-l border-line">
    {items.map((item, i) => (
      <li key={i} className="relative pb-10 pl-8 last:pb-0">
        <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand bg-paper" />
        {(item.date || item.location) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-inkSoft">
            {item.date && <span>{item.date}</span>}
            {item.date && item.location && <span className="text-line">·</span>}
            {item.location && <span>{item.location}</span>}
          </div>
        )}
        <h3 className="mt-1.5 font-display text-xl font-medium text-ink">
          {item.title}
        </h3>
        {item.place && <p className="mt-0.5 text-sm text-inkSoft">{item.place}</p>}
        {item.points?.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {item.points.map((pt, j) => (
              <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-inkSoft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {pt}
              </li>
            ))}
          </ul>
        )}
        {item.papers?.length > 0 && (
          <div className="mt-4 rounded-xl border border-line bg-surface p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-inkSoft">
              Published during this time
            </p>
            <ul className="mt-2.5 flex flex-col gap-2">
              {item.papers.map((p, j) => (
                <li key={j} className="flex items-baseline gap-3 text-sm">
                  <span className="shrink-0 font-mono text-xs text-brand">{p.year}</span>
                  <span className="text-ink">{p.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))}
  </ol>
);

const TABS = {
  education,
  experience,
  freelance,
};

const Qualification = () => {
  const [tab, setTab] = useState("education");

  const tabBtn = (id, label, Icon) => {
    const activeTab = tab === id;
    return (
      <button
        type="button"
        onClick={() => setTab(id)}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
          activeTab
            ? "border-ink bg-ink text-paper"
            : "border-line text-inkSoft hover:border-ink hover:text-ink"
        }`}
      >
        <Icon size={16} />
        {label}
      </button>
    );
  };

  return (
    <section className="section" id="qualification">
      <span className="kicker">
        <span className="font-mono">04</span> / Journey
      </span>
      <h2 className="head_title">Where I’ve studied & worked.</h2>
      <p className="head_subtitle">My education, experience, and other projects.</p>

      <div className="mt-10 flex flex-wrap gap-3">
        {tabBtn("education", "Education", GraduationCap)}
        {tabBtn("experience", "Experience", Briefcase)}
        {/* Temporarily hidden — re-enable to show: */}
        {/* {tabBtn("freelance", "Other Projects", Laptop)} */}
      </div>

      <div className="mt-12 max-w-2xl">
        <Timeline items={TABS[tab]} />
      </div>

      {/* Certifications */}
      <div className="mt-16 border-t border-line pt-10">
        <h3 className="font-display text-2xl font-medium text-ink">Certifications</h3>
        <div className="mt-6 grid max-w-2xl gap-6">
          {certifications.map((c) => (
            <div key={c.name} className="card-surface overflow-hidden">
              <a
                href={c.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                title="View full certificate"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={`${c.name} certificate`}
                  className="w-full border-b border-line bg-white object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink">
                    View full <ArrowUpRight size={15} />
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-2xl text-ink">
                  <i className={c.icon}></i>
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-ink">{c.name}</h4>
                  <p className="text-sm text-inkSoft">{c.issuer}</p>
                </div>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  Verify
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualification
