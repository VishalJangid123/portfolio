import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const publications = [
  {
    tag: "GEOMATE Journal · 2025",
    title:
      "Inspection of Historical Monument Using Fish Tank Virtual Reality: A Case Study of Wat Si Phichit Kirati Kanlayaram, Sukhothai, Thailand",
    venue: "International Journal of GEOMATE · Vol. 29, No. 132, pp. 158–171",
    date: "August 2025",
    authors: "Vishal Jangid, Sirisilp Kongsilp, Apichat Buatik, Phromphat Thansirichaisree",
    doi: "10.21660/2025.132.4883",
    link: "https://geomatejournal.com/geomate/article/view/4883",
  },
  {
    tag: "SHM 2023 · Conference Paper",
    title: "Enhancing Dam Inspection with Pixel-Level CNN-FCN Approach Via 3D Texture Mapping",
    venue: "DEStech Transactions — Structural Health Monitoring (SHM 2023)",
    date: "2023",
    authors: "Krisada Chaiyasarn, Apichat Buatik, Vishal Jangid, Sirisilp Kongsilp, Navid Khademi",
    doi: "10.12783/shm2023/36872",
    link: "https://www.dpi-proceedings.com/index.php/shm2023/article/view/36872",
  },
  {
    tag: "ACM VRST ’21 · Conference Paper",
    title:
      "Fishtank Sandbox: A Software Framework for Collaborative Usability Testing of Fish Tank Virtual Reality Interaction Techniques",
    venue: "Proceedings of the 27th ACM Symposium on Virtual Reality Software and Technology",
    date: "December 2021",
    authors: "Vishal Jangid, Sirisilp Kongsilp",
    doi: "10.1145/3489849.3489915",
    link: "https://doi.org/10.1145/3489849.3489915",
  },
];

const Authors = ({ list }) => (
  <span className="text-inkSoft">
    <span className="text-ink">Authors:</span>{" "}
    {list.split(", ").map((name, i, arr) => (
      <React.Fragment key={i}>
        <span className={name.includes("Vishal Jangid") ? "font-semibold text-ink" : undefined}>
          {name}
        </span>
        {i < arr.length - 1 ? ", " : ""}
      </React.Fragment>
    ))}
  </span>
);

const Publication = () => {
  return (
    <section className="section" id="publications">
      <span className="kicker">
        <span className="font-mono">05</span> / Research
      </span>
      <h2 className="head_title">Published work.</h2>
      <p className="head_subtitle">
        Peer-reviewed research across virtual reality, heritage inspection, and computer vision.
      </p>

      <div className="mt-12 flex flex-col gap-5">
        {publications.map((p) => (
          <a
            key={p.doi}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_40px_-24px_rgba(27,26,23,0.45)] md:p-9"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-brand">
                {p.tag}
              </span>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-inkSoft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </div>

            <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink md:text-2xl">
              {p.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-inkSoft">
              {p.venue} · {p.date}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4 text-sm">
              <Authors list={p.authors} />
              <span className="font-mono text-xs text-inkSoft">DOI: {p.doi}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Publication
