
import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getProjectMetaData from "@/components/getProjectMetaData"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TableOfContent from "@/components/TableOfContent"

const getProjectContent = slug => {
  const folder = "projects/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async ({ params }) => {
  // const posts = getProjectMetaData(params.tech)
  return [
    {tech: "unity", slug: "cube-coordination"},
    {tech: "unity", slug: "opposites"},
    {tech: "unity", slug: "vr-visualization"},
    {tech: "unity", slug: "imageswift"},
    {tech: "unity", slug: "drop-the-box"},
    {tech: "unity", slug: "roller-fill"},
    {tech: "blog", slug: "gamedevelopment"},
    {tech: "blog", slug: "how-to-render-image-as-texture-in-unity"},
  ]
  // posts.map(post => ({
  //   slug: post.slug
  // }))
}


export async function generateMetadata({ params }) {
  const folder = "projects/" + params.tech + "/"
  const file = `${folder}${params.slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  
  return {
    title: 'Vishal Jangid | ' + matterResult.data.title,
    description: matterResult.data.subtitle,

  }
}



const PostPage = props => {
  const techDir = props.params.tech;
  const slug = props.params.slug
  const projectDetails = getProjectContent(techDir + "/" + slug)
  const headings = projectDetails.content
  .replaceAll(/```(.|\n)+```/gm, "")
  .split("\n")
  .filter(line => line.startsWith("#"))
  
 


  return (
     <div>
     

<div
  className={"relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"}
  >
    <Image alt="Banner" src={"/portfolio/" + projectDetails.data.bannerImage} className="w-full bg-cover blur-sm bg-blend-screen bg-transparent" width={100} height={100}/>
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-current"
    >
    <div className="flex h-full items-center justify-center">
    <div className="my-12 bg-card w-full p-10 rounded-2xl flex flex-col gap-y-2 items-center">
        <h1 className="text-4xl text-slate-600 ">{projectDetails.data.title}</h1>
        <p className="text-slate-400 mt-2">{projectDetails.data.date}</p>
        <div className="">
          {
            projectDetails.data.tags.map((item, i) => {
              return (
                <Badge key={i}>{item}</Badge>
              )
            })
          }
        </div>
        <div className="flex flex-row gap-5 ">
          {projectDetails.data.social && projectDetails.data.social.map((item, i) => {
            let iconClass = `uil uil-${item.name}`
            return (
              
              <Button key={i} className="rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <i className={iconClass + " text-xl"}></i>
                </a>
              </Button>
            )
          })
          }
        </div>

      </div>
    </div>
  </div>
</div>


     
    <div className="container mx-auto flex flex-row justify-between">

<div className="sm:hidden lg:w-1/4 bg-card p-10 pl-5 h-fit sticky top-20">
<TableOfContent  headings={headings}/>

</div>
<div className="lg:w-2/3 sm:w-full">


        <article className="container mx-auto prose lg:prose-xl max-w-none bg-card lg:p-10 sm:p-5">
          
          <Markdown
            options={{
              overrides: {
                Button: {
                  component: Button,
                  props: {
                    className: 'bg-title'
                  }
                },
                p:{
                  props:{
                    className: 'text-base'
                  }
                },
                CustomImage
              }
            }}

          >{projectDetails.content}</Markdown>
        </article>
</div>

      </div>
    </div>


  )
}

const CustomImage = ({ urls }) => {
  const allUrls = urls.split(',');
  return (
    
    <div className="w-full">
    {
      urls  === "" ? <></>
      :
      <Tabs defaultValue={allUrls[0]} className="w-full flex flex-col">
        <TabsList className="order-2 sm:flex sm:flex-row">
          {
            allUrls && allUrls.map((item, i) => {
             return(  <TabsTrigger value={item} key={i}  className="p-0  data-[state=active]:m-0 data-[state=active]:rounded-none">
              <Image src={item} width={100} height={100} className="lg:m-2 sm:m-1"/>
             </TabsTrigger>)
            })
          }
        </TabsList>
        <div className="order-1">

        {
          allUrls && allUrls.map((item, i) => {
            return (
              <TabsContent value={item} key={i}>
              <Image src={item} width={300} height={300} className="w-full" />
            </TabsContent>
            )
          })
        }
        </div>

      </Tabs>


  }
    </div>
  )
}

export default PostPage