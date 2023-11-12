import Head from 'next/head'
import React from 'react'



export const Social = () => {
  
  const social = `text-xl hover:text-2xl`
  return (
    <>
    
    
    
    <div className="grid grid-row lg:w-32 sm:w-4 h-48 items-center" >
        <a href="https://github.com/VishalJangid123" title="Github" rel="noreferrer" 
        aria-label='VishalJangid123'
        className={social} target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/vishal-jangid-879b85108/" title="Linkedin" rel="noreferrer" className={social} target="_blank"
        aria-label='vishal-jangid-879b85108'>
        <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.instagram.com/quantum_free_particle/" title="Instagram" rel="noreferrer" className={social} target="_blank"
            aria-label='quantum_free_particle'>
            <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.facebook.com/vishal.jangid123" title="Facebook" rel="noreferrer" className={social} target="_blank"
            aria-label='vishal.jangid123'>
            <i className="bx bxl-facebook" color="#fff"></i>
            </a>

            <a href="https://line.me/ti/p/54ecpXAs48" title="Line" rel="noreferrer" className={social} target="_blank"
            aria-label='line'>
            <i className="uil uil-line" color="#fff"></i>
            </a>
            
    </div>
    </>
  )
}


