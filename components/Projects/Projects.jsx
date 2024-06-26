import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import getProjectMetadata from "../getProjectMetaData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const defaultTabValue = "unity";
    let matter = getProjectMetadata(defaultTabValue);
    // "Cube Coordination",
    const projectList = [
        "ImageSwift",
        "Opposites",
        "Traffic Tango",
        "Roller Fill",
        "Drop the Box",
        "VR Visualization of a Thai Historic temple"
    ]
    let final = []
    projectList.forEach(element => {
        let newIndex = (matter.findIndex(ele => ele.title == element))
        final.push(matter[newIndex]);
    });
    matter = final;
    return (
        <section className="section" id="portfolio">
            {/* <h2 className="head_title">Portfolio</h2>
            <span className="head_subtitle"> Projects I had worked on</span> */}
<div className="h-fit  grid 
                     lg:container  lg:grid-cols-3 gap-3  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center">
{matter && matter.map(function (item, i) {
                            return (
                                <ProjectCard item={item} key={i} />
                            )
                        })}
</div>
            {/* <div className="flex justify-center mt-16 h-fit">
                <Tabs defaultValue={defaultTabValue} className="sm:w-screen">
                    <TabsList>
                        <TabsTrigger value="unity">Unity</TabsTrigger>
                        {/* <TabsTrigger value="js_framework">NextJS, ReachJS, NodeJS</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="android">Android</TabsTrigger> */}
                  {/*}  </TabsList>

                    <TabsContent value="unity" className="h-fit  grid 
                     lg:container  lg:grid-cols-3 gap-4  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center">
                        {matter && matter.map(function (item, i) {
                            return (
                                <ProjectCard item={item} key={i} />
                            )
                        })}
                    </TabsContent>
                </Tabs>
            </div> */}
        </section>
    )
}

export default Projects;