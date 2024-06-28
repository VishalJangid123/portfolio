
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";


const ProjectCard = ({item}) => {
    return (
//     <div className="bg-card p-4 flex flex-col gap-y-4 shadow-lg h-[26rem] rounded-2xl m-4 w-80
//     hover:cursor-pointer hover:shadow-xl group
//     " >
//     <Image
//         width={300}
//         height={300}
//         src={`${process.env.BASEPATH}`+ item.bannerImage}
//         alt={item.title}
//         className="mb-1 w-fit bg-contain group-hover:bg-cover rounded-lg" />
//     <div>
//         {
//             item && item.tags && item.tags.map((tag, i) => (
//                 <Badge variant="outline">{tag}</Badge>
//             ))
//         }
        
//     </div>

//     <h2 className="text-lg font-semibold max-h-12 min-h-12 mb-1">{item.title}</h2>
//     <p className="text-sm font-normal h-12 line-clamp-2 mb-2">{item.subtitle}</p>
//     <Button className="mb-1" asChild>
//         <Link href={"/projects/unity/" + item.slug}>View More Details</Link></Button>

// </div>

<div class="relative flex w-full min-h-[35rem] max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div
    class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      className="object-fill w-full h-64"
      src={`${process.env.BASEPATH}`+ item.bannerImage}
      alt="ui/ux review check" 
      
      />
    <div
      class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
    </div>
    {/* <button
      class="!absolute  top-4 right-4 h-3 w-40 max-h-[82px] select-none rounded text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
      bg-textColor p-4 text-justify"
      type="button">
      <span class="absolute">
        
        Unity Asset Store
        </span>
    </button> */}
  </div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-3">
      <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
      {item.title}
      </h5>
      {/* <p
        class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="-mt-0.5 h-5 w-5 text-yellow-700">
          <path fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"></path>
        </svg>
        5.0
      </p> */}
    </div>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
    {item.subtitle}
    </p>
    <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
        {
            item && item.tags && item.tags.map((tag, i) => (
                <Badge variant="outline">{tag}</Badge>
    //             <span
    //     class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //     {tag}
    //   </span>
            ))
        }
    </div>
  </div>
  <div class="p-6 pt-3">
    <Button
      class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <Link href={"/projects/unity/" + item.slug}>View More Details</Link>
    </Button>
  </div>
</div> 
  )
}

export default ProjectCard;
