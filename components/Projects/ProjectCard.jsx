
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";


const ProjectCard = ({item}) => {
    return (
    <div className="bg-card p-4 flex flex-col gap-y-4 shadow-lg h-[26rem] rounded-2xl m-4 w-80
    hover:cursor-pointer hover:shadow-xl group
    " >
    <Image
        width={300}
        height={300}
        src={item.bannerImage}
        alt={item.title}
        className="mb-1 w-fit bg-contain group-hover:bg-cover rounded-lg" />
    <div>
        {
            item && item.tags && item.tags.map((tag, i) => (
                <Badge variant="outline">{tag}</Badge>
            ))
        }
        
    </div>

    <h2 className="text-lg font-semibold max-h-12 min-h-12 mb-1">{item.title}</h2>
    <p className="text-sm font-normal h-12 line-clamp-2 mb-2">{item.subtitle}</p>
    <Button className="mb-1" asChild>
        <Link href={"/projects/unity/" + item.slug}>View More Details</Link></Button>

</div>
  )
}

export default ProjectCard;
