import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My acdemic & work journey</span>


<div className="qualification__container container">
    <div className="qualification__tabs">
        <div className={
            toggleState === 1
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
        }
        onClick={() => toggleTab(1)}
        >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
        </div>

        <div className={
            toggleState === 2
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
        }
        onClick={() => toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
        </div>

    </div>

<div className="qualification__section">
    <div className={toggleState === 1 ?
            "qualification__content qualification__content-active"
        : "qualification__content"}>
        <div className="qualification__data">
        
        <div>
            <h3 className="qualification__title">Master of Engineering</h3>
            <span className="qualification__subtitle"> Thammasat University </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2021 - Present
            </div>
        </div>

            <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>
        </div>


        <div className="qualification__data">

        <div></div>

        <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>

        <div>
            <h3 className="qualification__title">Bachelor of Technology</h3>
            <span className="qualification__subtitle"> BK Birla Institute of Engineering & Technology </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2015- 2019
            </div>
            </div>
        </div>

        <div className="qualification__data">
        
        <div>
            <h3 className="qualification__title">High School</h3>
            <span className="qualification__subtitle"> H G International School </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2015
            </div>
        </div>

            <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>
        </div>

       

    </div>





    {/* work section here */}
    <div className={toggleState === 2 ?
            "qualification__content qualification__content-active"
        : "qualification__content"}>
        <div className="qualification__data">
        <div>
            <h3 className="qualification__title">FullStack Developer </h3>
            <span className="qualification__subtitle"> AllEvents.in </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> Mar 2020 - Aug 2020
            </div>
            </div>

            <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>
        </div>


        <div className="qualification__data">

        <div></div>

        <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>

        <div>
            <h3 className="qualification__title">VR Unity Developer</h3>
            <span className="qualification__subtitle"> Sufalam Technologies </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> Aug 2019 - Oct 2019
            </div>
            </div>
        </div>



        <div className="qualification__data">
        <div>
            <h3 className="qualification__title">Software Engineer </h3>
            <span className="qualification__subtitle"> NewGenApps </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>Jan 2019 - Feb 2019
            </div>
            </div>

            <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>
        </div>

        <div className="qualification__data">

        <div></div>

        <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>

        <div>
            <h3 className="qualification__title">Research-based Internship</h3>
            <span className="qualification__subtitle"> Thammasat University </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> Sep 2018 - Oct 2018
            </div>
            </div>
        </div>
       

    </div>






{/* end here */}
    
</div>

</div>

    </section>
  )
}

export default Qualification