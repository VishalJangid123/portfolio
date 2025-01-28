import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getProjectMetadata from "../getProjectMetaData";
import ProjectCard from "./ProjectCard";
import { ProjectList } from "@/constants/ProjectList";

const Projects = () => {
  const defaultTabValue = "game_development";
  let projects = {};
  projects["full_stack"] = getProjectMetadata("full_stack");
  projects["game_development"] = getProjectMetadata("game_development");
  projects["ai"] = getProjectMetadata("ai");

  Object.keys(projects).forEach((item) => {
    let final = [];
    ProjectList[item].forEach((element) => {
      let newIndex = projects[item].findIndex((ele) => ele.title == element);
      final.push(projects[item][newIndex]);
    });
    projects[item] = final;
  });

  return (
    <section className="section" id="portfolio">
      <h2 className="head_title">Projects</h2>
      <span className="head_subtitle"> Projects I had worked on</span>
      {/* <div
        className="h-fit  grid 
                     lg:container  lg:grid-cols-3 gap-3  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center"
      >
        {matter &&
          matter.map(function (item, i) {
            return <ProjectCard item={item} key={i} />;
          })}
      </div> */}
      <div className="flex justify-center mt-16 h-fit">
        <Tabs defaultValue={defaultTabValue} className="sm:w-screen">
          <TabsList>
            <TabsTrigger value="game_development">Game Development</TabsTrigger>
            <TabsTrigger value="full_stack">Full Stack Development</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
          </TabsList>

          <TabsContent value="game_development" className="">
            <div
              className="h-fit  grid 
                     lg:container  lg:grid-cols-3 gap-4  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center"
            >
              {projects["game_development"] &&
                projects["game_development"].map(function (item, i) {
                  return (
                    <ProjectCard item={item} key={i} tech="game_development" />
                  );
                })}
            </div>
          </TabsContent>
          <TabsContent value="full_stack" className="">
            <div
              className="h-fit  grid 
                     lg:container  lg:grid-cols-3 gap-4  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center"
            >
              {projects["full_stack"] &&
                projects["full_stack"].map(function (item, i) {
                  return <ProjectCard item={item} key={i} tech="full_stack" />;
                })}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="">
            <div
              className="h-fit  grid 
                     lg:container  lg:grid-cols-3 gap-4  sm:grid-cols-1 
                    sm:place-content-center sm:place-items-center"
            >
              {projects["ai"] &&
                projects["ai"].map(function (item, i) {
                  return <ProjectCard item={item} key={i} tech="ai" />;
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
