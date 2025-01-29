import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectMetaData from "@/components/getProjectMetaData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableOfContent from "@/components/TableOfContent";

const getProjectContent = (slug) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async ({ params }) => {
  // const posts = getProjectMetaData(params.tech)
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
  const folder = "projects/" + params.tech + "/";
  const file = `${folder}${params.slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return {
    title: "Vishal Jangid | " + matterResult.data.title,
    description: matterResult.data.subtitle,
  };
}

const PostPage = (props) => {
  const techDir = props.params.tech;
  const slug = props.params.slug;
  const projectDetails = getProjectContent(techDir + "/" + slug);
  const headings = projectDetails.content
    .replaceAll(/```(.|\n)+```/gm, "")
    .split("\n")
    .filter((line) => line.startsWith("#"));

  return (
    <div>
      <div
        className={
          "container relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12"
        }
      >
       
        <div className="flex h-full">
          <div className="my-12 bg-card w-full p-10 rounded-2xl flex flex-col gap-y-2">
            <h1 className="text-3xl text-slate-600 ">
              {projectDetails.data.title}
            </h1>
            <div>{projectDetails.data.subtitle}</div>
            <div className="font-medium text-slate-400 mt-2">
              {projectDetails.data.date}
            </div>
            <div className="mt-2 flex flex-row gap-5 ">
              {projectDetails.data.social &&
                projectDetails.data.social.map((item, i) => {
                  let iconClass = `uil uil-${item.name}`;
                  return (
                    <Button key={i} asChild
                    className="py-2 px-4 h-10 justify-center items-center gap-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <div className="capitalize">{item.name}</div>
                        <i className="uil uil-arrow-up-right"></i>
                      </a>
                    </Button>
                  );
                })}
            </div>
            
            
            <div className="mt-2 flex flex-wrap gap-2">
              {projectDetails.data.tags.map((item, i) => {
                return (
                  <Badge variant="secondary" key={i}>
                    {item}
                  </Badge>
                );
              })}
            </div>
           
          </div>
        </div>
      </div>

  {
    projectDetails.data.bannerImage && <Image
    alt="Banner"
    src={"/portfolio/" + projectDetails.data.bannerImage}
    className="container bg-cover rounded"
    width={100}
    height={100}
  /> 
  }
  

      <div className="container mx-auto flex flex-row justify-center">
        {/* <div className="sm:hidden lg:w-1/4 bg-card p-10 pl-5 h-fit sticky top-20">
<TableOfContent  headings={headings}/>

</div> */}
        <div className="sm:w-full">
          <article className="container prose lg:prose-xl max-w-none bg-card lg:p-10 sm:p-5 flex justify-center items-center">
            <Markdown
              options={{
                overrides: {
                  Button: {
                    component: Button,
                    props: {
                      className: "bg-title",
                    },
                  },
                  p: {
                    props: {
                      className: "text-base",
                    },
                  },
                  CustomImage,
                },
              }}
            >
              {projectDetails.content}
            </Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

const CustomImage = ({ urls }) => {
  const allUrls = urls.split(",");
  return (
    <div className="w-full">
      {urls === "" ? (
        <></>
      ) : (
        <Tabs defaultValue={allUrls[0]} className="w-full flex flex-col">
          <TabsList className="order-2 sm:flex sm:flex-row">
            {allUrls &&
              allUrls.map((item, i) => {
                return (
                  <TabsTrigger
                    value={item}
                    key={i}
                    className="p-0  data-[state=active]:m-0 data-[state=active]:rounded-none"
                  >
                    <Image
                      src={item}
                      width={100}
                      height={100}
                      className="lg:m-2 sm:m-1"
                    />
                  </TabsTrigger>
                );
              })}
          </TabsList>
          <div className="order-1">
            {allUrls &&
              allUrls.map((item, i) => {
                return (
                  <TabsContent value={item} key={i}>
                    <Image
                      src={item}
                      width={300}
                      height={300}
                      className="w-full"
                    />
                  </TabsContent>
                );
              })}
          </div>
        </Tabs>
      )}
    </div>
  );
};

export default PostPage;
