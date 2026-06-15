import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";

const ProjectCard = ({ item, tech }) => {
  return (
    <Link
      href={"/projects/" + tech + "/" + item.slug}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_40px_-24px_rgba(27,26,23,0.45)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={`${process.env.BASEPATH}` + item.bannerImage}
          alt={item.title}
        />
        {item.build_platform && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink/85 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper backdrop-blur-sm">
            <i className={`uil uil-${item.build_platform.icon}`}></i>
            {item.build_platform.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium leading-snug text-ink">
            {item.title}
          </h3>
          <span className="mt-1 shrink-0 text-inkSoft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand">
            <ArrowUpRight size={20} />
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-inkSoft">
          {item.subtitle}
        </p>

        {item.highlight && (
          <p className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-[rgba(216,58,23,0.10)] px-3 py-1 font-mono text-[11px] font-medium text-brand">
            <Trophy size={12} />
            {item.highlight}
          </p>
        )}

        {item?.tags?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
            {item.tags.slice(0, 4).map((tag, i) => (
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
    </Link>
  );
};

export default ProjectCard;
