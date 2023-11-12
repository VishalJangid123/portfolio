import React from 'react'
import { software_data } from './data'

function Software() {
  return (
   <div className="bg-card px-8 py-8 rounded-3xl">
    <h3 className="text-base flex justify-center items-center mb-8">Software (IDE)</h3>

        <div className="skills__box" >
            <div className="grid grid-cols-2 gap-3 ">
    {
        software_data && software_data.map((data, index) => {
return(
                <div className="flex flex-row gap-1 w-10" key={index}>
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="text-base font-medium"> {data.name}</h3>
                        <span className="text-xs text-textColor">{data.level}</span>
                    </div>
                </div>
)
})
}

        
</div>
</div>
    
   
   </div>
  )
}

export default Software