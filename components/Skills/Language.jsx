import React from 'react'
import { lang_data } from './data'

function Language() {
  return (
   <div className="bg-card px-8 py-8 rounded-3xl ">
    <h3 className="text-base flex justify-center items-center mb-8">Language/ Frameworks </h3>

        <div className="skills__box" >
            <div className="grid grid-cols-2 gap-3">
    {
        lang_data && lang_data.map((data, index) => {
return(
                <div className="grid grid-cols-2 w-10" key={index}>
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

export default Language