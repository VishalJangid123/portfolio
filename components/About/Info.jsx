import React from 'react'

export const Info = () => {
  const card = `lg:w-36 bg-white rounded-md 
  lg:px-4 lg:py-5 border border-lightBorder flex flex-col items-center justify-self-center gap-y-1
  sm:px-3 sm:py-2 sm:w-28`
  return (
    <div className="grid grid-flow-col auto-cols-max gap-x-4">
        <div className={card}>
            <i className="bx bx-award"></i>
            <h3 className="text-base font-medium text-title">Experience</h3>
            <span className="text-xs text-textColor">1+ year</span>
        </div>

        <div className={card}>
            <i className="bx bx-award"></i>
            <h3 className="text-base font-medium text-title">Education</h3>
            <span className="text-xs text-textColor">M.Eng</span>
        </div>

        <div className={card}>
            <i className="bx bx-award"></i>
            <h3 className="text-base font-medium text-title">Support</h3>
            <span className="text-xs text-textColor">24/5</span>
        </div>
    </div>
  )
}
 