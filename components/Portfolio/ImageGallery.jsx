import React, { useState } from 'react'
import "./imagegallery.css";

const ImageGallery = (galleryImages) => {

  galleryImages = galleryImages.galleryImages
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
  }

  const handleCloseModal = () => {
        setOpenModal(false);
  }

  const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
}

const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1);
}


    return (
   <div>

    { openModal && 
        <div className="slideWrap">
            <i className="uil uil-times btnClose" onClick={handleCloseModal}></i>
            <i className="uil uil-previous btnPrev" onClick={prevSlide}></i>
            <i className="uil uil-step-forward btnNext" onClick={nextSlide}></i>
            <div className="fullScreenImage">
                {
                    typeof(galleryImages[slideNumber].video) === "undefined" ?
                    <img src={galleryImages[slideNumber].img} /> :
                    <iframe width="80%" height="80%" src={"//www.youtube.com/embed/" + galleryImages[slideNumber].img + "?autoplay=1&mute=1&origin=https://vishaljangid123.github.io/portfolio-latest"} autoPlay="1" frameBorder="0" ></iframe>
                }
                
            </div>
        </div>
    }
   
   <div className="galleryWrap">
    {
        galleryImages != null && galleryImages.length >= 1 && galleryImages.map((slide, index) => {
            return(
                <div className="single" key={index} onClick = { () => handleOpenModal(index)} >
                    {
                    slide.video != null ? 
                        <div className="imagegallary__video">
                            <img src={"https://img.youtube.com/vi/" + slide.img + "/0.jpg"} alt="" key={slide.img}/>
                            <i className='bx bx-play'></i>
                        </div>:
                        <img src={slide.img} alt="" key={slide.img}/>
                    }
                    </div>
            )
        })
    }
   </div>
   </div>
  )
}

export default ImageGallery