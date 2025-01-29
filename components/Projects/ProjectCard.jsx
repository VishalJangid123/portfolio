import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ProjectCard = ({ item, tech }) => {
  return (
    <div className="relative flex w-full min-h-[35rem] max-w-[26rem] flex-col rounded-xl bg-white  text-gray-700 shadow hover:shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500  shadow-blue-gray-500/40">
        <img
          className="object-fill w-full h-64"
          src={`${process.env.BASEPATH}` + item.bannerImage}
          alt={item.title}
        />
        { item.build_platform && (
          <span class="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            <i className={`uil uil-${item.build_platform.icon}`}></i> {item.build_platform.name}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            {item.title}
          </h5>
        </div>
        <div className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 ">
          <p className="line-clamp-2">{item.subtitle}</p>
        </div>
        <div className="inline-flex flex-wrap items-center gap-1 mt-8 group max-h-5">
          {item &&
            item.tags &&
            item.tags.map((tag, i) => (
              <Badge key={i} variant="outline">
                {tag}
              </Badge>
            ))}
        </div>
      </div>
      <div className="p-6 pt-3">
        {/* <Link href={`${process.env.BASEPATH}` + "/projects/unity/" + item.slug} rel="noopener noreferrer" > */}
        <Button type="button" variant="default" asChild>
          <Link href={"/projects/" + tech + "/" + item.slug}>
            View More Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
