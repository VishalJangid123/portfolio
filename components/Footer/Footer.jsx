import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-card">
    <div className=" flex flex-col justify-center items-center gap-5 mt-4">
        <h1 className="text-xl font-semibold mt-4">Vishal Jangid</h1>

        <ul className="flex flex-row gap-4">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#contact" className="footer__link">Contact</a>
            </li>
        </ul>

        <div className="flex flex-row gap-8">
        <a href="https://github.com/VishalJangid123" rel="noreferrer" className="footer__social-link" target="_blank" aria-label='VishalJangid123'>
        <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/vishal-jangid-879b85108/" rel="noreferrer" className="footer__social-link" target="_blank" aria-label='vishal-jangid-879b85108'>
        <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.instagram.com/quantum_free_particle/" rel="noreferrer"  className="footer__social-link" target="_blank" aria-label='quantum_free_particle'>
            <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/vishal.jangid123" rel="noreferrer" className="footer__social-link" target="_blank" aria-label='vishal.jangid123'>
        <i className="bx bxl-facebook" color="#fff"></i>
        </a>

        <a href="https://line.me/ti/p/54ecpXAs48" rel="noreferrer" className="footer__social-link" target="_blank"  aria-label='line'>
        <i className="uil uil-line"></i>
        </a>
        

        </div>


        <span className="text-xs text-textColor">Last updated: 8 Dec 2022 | Views:<div id="visit__footer"></div>  </span>
    </div>
   </footer>
  )
}

export default Footer