import React from 'react'
import Language from './Language'
import Software from './Software'
import SoftwarePackage from './SoftwarePackage'
import Database from './Database'

const Skills = () => {
  return (
    <section className="about section" id="skills">
      <h2 className="head_title">Skills</h2>
      <span className="head_subtitle"> I enjoy working on</span>
      <div className=" mt-16 grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <Language />
        <Software />
        <SoftwarePackage />
        <Database />
       
      </div>
    </section>
  )
}

export default Skills