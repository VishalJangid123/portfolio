import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getProjectMetadata from "../getProjectMetaData";
import ProjectCard from "./ProjectCard";
import { ProjectList } from "@/constants/ProjectList";

const TABS = [
  { value: "game_development", label: "Game Development" },
  { value: "full_stack", label: "Full Stack" },
  { value: "ai", label: "GenAI / ML" },
];

const Projects = () => {
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
      <span className="kicker">
        <span className="font-mono">02</span> / Selected Work
      </span>
      <h2 className="head_title">Things I’ve built.</h2>
      <p className="head_subtitle">
        Games, full-stack products, and ML experiments — grouped by craft.
      </p>

      <Tabs defaultValue="game_development" className="mt-12 w-full">
        <TabsList>
          {TABS.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((t) => (
          <TabsContent key={t.value} value={t.value}>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects[t.value] &&
                projects[t.value].map((item, i) =>
                  item ? (
                    <ProjectCard item={item} key={i} tech={t.value} />
                  ) : null
                )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Projects;
