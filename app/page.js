import Image from 'next/image'

import { About } from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
// import Github from '../components/Github/Github'
import {  Home as Hero } from '../components/Home/Home'
// import Portfolio from '../components/Portfolio/Portfolio'
import Publication from '../components/Publications/Publication'
// import Qualification from '../components/Qualification/Qualification'
import Skills from '../components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className='main'>
      
     <Hero />
     <div className="flex justify-center mt-16 h-fit">
                <Tabs defaultValue={"projects"} className="sm:w-screen">
                    <TabsList>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="research">Research</TabsTrigger>
                        {/* <TabsTrigger value="js_framework">NextJS, ReachJS, NodeJS</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="android">Android</TabsTrigger> */}
                    </TabsList>

                    <TabsContent value="projects" className="h-fit  grid 
                     lg:container  
                    sm:place-content-center sm:place-items-center">
                        <Projects />
                        
                        {/* {matter && matter.map(function (item, i) {
                            return (
                                <ProjectCard item={item} key={i} />
                            )
                        })} */}
                    </TabsContent>
                    <TabsContent value="research" className="h-fit  grid 
                     lg:container  lg:grid-cols-1 gap-4  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center">
                        <Publication />
                    </TabsContent>
                </Tabs>

            </div>
     <Skills />

     {/* <Projects /> */}
          {/* <About />
     <Skills />
       
        <Publication />  */}
       {/* <Qualification />  */}
      {/* <Github />  */}
      {/* <Contact /> */ } 
    </main>
  )
}
