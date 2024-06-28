import React from 'react';
const Publication = () => {
  return (
    <section className="section" id="publication">
    {/* <h2 className="head_title">Published Articles</h2>
    <span className="head_subtitle">My published research articles</span>
     */}
    <div className="container mx-auto mt-16 mb-16 items-center flex justify-center">
        <div className='lg:w-full sm:w-80'>
            <a href='https://doi.org/10.1145/3489849.3489915' target="_blank" rel="noopener noreferrer" >
            <div className='bg-card p-8 rounded-2xl flex flex-col'>
            
            <span className="lg:text-xl font-semibold mb-1 sm:text-base">
                Fishtank Sandbox: A Software Framework for Collaborative Usability Testing of Fish Tank Virtual Reality Interaction Techniques
            </span>
            <p className='lg:text-sm sm:text-xs'>VRST '21: Proceedings of the 27th ACM Symposium on Virtual Reality Software and Technology</p>
            <p className='lg:text-sm sm:text-xs'>December 2021</p>
            <p className='lg:text-sm sm:text-xs'><b>Authors:</b> Vishal Jangid, Sirisilp Kongsilp</p>
            <p className='lg:text-sm sm:text-xs'><b>DOI: https://doi.org/10.1145/3489849.3489915</b> </p> 
                   
            </div>
            </a>
        </div>
   
   
</div>
    
    </section>
    
    
    
  )
}

export default Publication