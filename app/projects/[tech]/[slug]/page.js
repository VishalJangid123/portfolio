import fs from "fs";
import matter from "gray-matter";
import ProjectDetail from "@/components/Projects/ProjectDetail";

const getProjectContent = (slug) => {
  const file = `projects/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};

export const generateStaticParams = async () => {
  return [
    { tech: "game_development", slug: "cube-coordination" },
    { tech: "game_development", slug: "opposites" },
    { tech: "game_development", slug: "vr-visualization" },
    { tech: "game_development", slug: "imageswift" },
    { tech: "game_development", slug: "drop-the-box" },
    { tech: "game_development", slug: "traffic-tango" },
    { tech: "game_development", slug: "roller-fill" },
    { tech: "blog", slug: "gamedevelopment" },
    { tech: "blog", slug: "how-to-render-image-as-texture-in-unity" },

    { tech: "full_stack", slug: "GoWhere" },
    { tech: "full_stack", slug: "CardManagementApp" },
    { tech: "full_stack", slug: "ObjectDetection" },
    { tech: "full_stack", slug: "FaceLandmarkDetection" },

    { tech: "ai", slug: "BookRecommender" },
    { tech: "ai", slug: "YieldPrediction" },
    { tech: "ai", slug: "jobemailgenerator" },
  ];
};

export async function generateMetadata({ params }) {
  const file = `projects/${params.tech}/${params.slug}.md`;
  const matterResult = matter(fs.readFileSync(file, "utf8"));
  return {
    title: "Vishal Jangid | " + matterResult.data.title,
    description: matterResult.data.subtitle,
  };
}

/* Normalize an image/asset path to the deployed basePath */
function normSrc(src) {
  if (!src) return src;
  const s = src.trim();
  if (/^https?:\/\//.test(s)) return s;
  if (s.startsWith("/portfolio/")) return s;
  if (s.startsWith("/")) return "/portfolio" + s;
  return s;
}

/* Pull screenshots + video/iframe embeds out of the markdown, returning
   the cleaned text body plus the collected media. */
function extractMedia(md) {
  const images = [];
  const embeds = [];
  let body = md;

  body = body.replace(/<iframe[\s\S]*?<\/iframe>/gi, (m) => {
    embeds.push(m);
    return "";
  });

  body = body.replace(
    /<CustomImage\s+urls=["']([^"']*)["']\s*\/?>(?:\s*<\/CustomImage>)?/gi,
    (_m, urls) => {
      urls
        .split(",")
        .map((u) => u.trim())
        .filter(Boolean)
        .forEach((u) => images.push({ src: normSrc(u), alt: "" }));
      return "";
    }
  );

  body = body.replace(
    /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
    (_m, alt, src) => {
      images.push({ src: normSrc(src), alt });
      return "";
    }
  );

  body = body.replace(/<img[^>]*?src=["']([^"']+)["'][^>]*?>/gi, (_m, src) => {
    images.push({ src: normSrc(src), alt: "" });
    return "";
  });

  return { body, images, embeds };
}

function cleanTitle(t) {
  return t.replace(/[*_`#]/g, "").trim();
}

/* Split the cleaned body into collapsible sections by H1/H2 headings. */
function splitSections(body) {
  const lines = body.split("\n");
  const sections = [];
  let current = { title: "Overview", lines: [] };

  for (const line of lines) {
    const m = line.match(/^(#{1,2})\s+(.*)$/);
    if (m) {
      sections.push(current);
      current = { title: cleanTitle(m[2]) || "Section", lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  sections.push(current);

  return sections
    .map((s) => ({ title: s.title, md: s.lines.join("\n").trim() }))
    .filter((s) => s.md.length > 0)
    .filter((s) => !/table of contents/i.test(s.title));
}

function dedupeImages(images) {
  const seen = new Set();
  return images.filter((img) => {
    if (!img.src || seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });
}

const PostPage = (props) => {
  const { tech, slug } = props.params;
  const { data, content } = getProjectContent(tech + "/" + slug);

  const { body, images, embeds } = extractMedia(content);
  const sections = splitSections(body);

  // Banner leads the gallery.
  const allImages = dedupeImages(
    data.bannerImage ? [{ src: normSrc(data.bannerImage), alt: data.title }, ...images] : images
  );

  return (
    <ProjectDetail
      data={data}
      tech={tech}
      sections={sections}
      images={allImages}
      embeds={embeds}
    />
  );
};

export default PostPage;
