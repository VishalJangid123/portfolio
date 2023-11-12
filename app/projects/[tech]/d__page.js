'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {project as projectJson} from '../../../assets/projects/projects_unity'
import Image from 'next/image'

export default function Project() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const data = projectJson[0]
  let title = searchParams.get('project');
  const img = "/../../../public/VR_V_unity_s1.png"
  return (
    <main className='main container mx-auto'>
     
     {/* <div classname="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      >
        <Image src="/VR_V_unity_s1.png"  objectFit='cover' width={100} height={100} 
        className='w-fit h-fit' />
    </div> */}

<div className='bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed'>

     <div className='mt-16 bg-card p-10 rounded-2xl mb-16'>
      <h1 className='text-4xl font-bold'>{data.title}</h1>
      <h2 className='text=base'>{data.desc}</h2>

     </div>

     <div className='bg-card p-10 flex flex-row gap-x-14'
     >

<p dangerouslySetInnerHTML={{__html: data.details}}
className='text-justify'
></p>
<Image src="/VR_V_unity_s1.png" width={400} height={400}/>
     </div>

</div>


      </main>
  )
}
