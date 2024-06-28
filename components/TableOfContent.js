'use client'

import  React from 'react';
import { useEffect } from 'react';

const TableOfContent = ({headings}) => {
    const [active, setActive] = React.useState(
        headings.length > 0 ? headings[0] : ''
      )
    
   
    let headingIds = [];
    for(var i=0; i < headings.length; i++) {
        headings[i] = headings[i].replaceAll("#", "");
        headingIds[i] = headings[i].slice(1);
        headingIds[i] = headingIds[i].toLowerCase().replaceAll(" ", "-")
       }
    

    React.useEffect(() => {
        const handleScroll = () => {

        const headingElements = []
        headingIds.map(function(slug , id) {
            headingElements.push(document.getElementById(slug))
        }
      )
      const visibleHeadings = headingElements.filter((el) => isElementInViewport(el))
      
      if (visibleHeadings.length > 0) {
        setActive(visibleHeadings[0].id)
      }
    }
  
    document.addEventListener('scroll', handleScroll)
  
    // clean up the effect by removing the event listener
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
    return(
        <div className="sm:hidden">
        { 
            headings.map(function (item, i) {
                return (
                    <li key={i}  onClick={() => setActive(item)}
                    style={{
                      fontWeight: active === headingIds[i] ? '500' : '',
                    }}>
                        <a href={"#" + headingIds[i]}>{item}</a></li>
                )
            })}
            </div>
    );

}

export default TableOfContent;
