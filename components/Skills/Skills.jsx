import React from 'react'
import Language from './GameDevelopment'
import FrontendDevelopment from './FrontendDevelopment'
import SoftwarePackage from './BackendDevelopment'
import Database from './Database'

const Skills = () => {
  return (
    <section className="about section" id="skills">
      <h2 className="head_title">Skills</h2>
      <span className="head_subtitle"> I enjoy working on</span>
      <div className=" mt-16 grid lg:grid-cols-1 sm:grid-cols-1 gap-4">
        <Language />
        <FrontendDevelopment />
        <SoftwarePackage />
        <Database />
       
      </div>
    </section>
  )
}

export default Skills