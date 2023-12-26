import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getProjectMetaData from "@/components/getProjectMetaData"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    {tech: "unity", slug: "vr-visualization"},
    {tech: "unity", slug: "imageswift"},
    {tech: "unity", slug: "drop-the-box"},
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
  }
}

const PostPage = props => {
  const techDir = props.params.tech;
  const slug = props.params.slug
  const projectDetails = getProjectContent(techDir + "/" + slug)

  
  return (
    <div className="container mx-auto flex flex-col items-center justify-center ">

      {/* <div className="w-full relative">
        <Image src="/Images/VR_V_unity_s1.png" width={300} height={300} className="w-full blur"/>
      </div> */}

      <div className="w-full">




        <div className="my-12 bg-card w-full p-10 rounded-2xl flex flex-col gap-y-2">
          <h1 className="text-2xl text-slate-600 ">{projectDetails.data.title}</h1>
          <p className="text-slate-400 mt-2">{projectDetails.data.date}</p>
          <div className="">
            {
              projectDetails.data.tags.map((item, i) => {
                return (
                  <Badge>{item}</Badge>
                )
              })
            }
          </div>
          <p>Visit project on: </p>
          <div className="flex flex-row gap-5 ">
            {projectDetails.data.social && projectDetails.data.social.map((item, i) => {
              let iconClass = `uil uil-${item.name}`
              return (
                
                <Button className="flex flex-row gap-3 rounded uppercase" asChild>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <i className={iconClass}></i>
                  {item.name}
                  </a>
                </Button>
              )
            })
            }
          </div>

        </div>

        <article className="container mx-auto prose lg:prose-xl max-w-none bg-card p-10 w-full">
          <Markdown
            options={{
              overrides: {
                Button: {
                  component: Button,
                  props: {
                    className: 'bg-title'
                  }
                },
                CustomImage
              }
            }}

          >{projectDetails.content}</Markdown>
        </article>
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
