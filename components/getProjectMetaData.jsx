import fs from "fs";
import matter from "gray-matter";



const getProjectMetadata = (dir) => {
  const folder = "projects/" + dir + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`projects/${dir}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
      bannerImage: matterResult.data.bannerImage,
    };
  });

  return posts;
};



export default getProjectMetadata;