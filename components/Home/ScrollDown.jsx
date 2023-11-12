import React from 'react'

export const ScrollDown = () => {
  return (
    <div className="lg:ml-32 sm:ml-0 flex justify-self-start justify-start items-start">
        <a href="" className="flex flex-row items-center">

        <svg
                width="32px"
                height="32px"
                className="text-title"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "1.5",
                }}
              >
                <path
                  className="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: "hsl(0 0% 20% / var(--tw-text-opacity))",
                    strokeWidth: "20px",
                  }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "hsl(0 0% 20% / var(--tw-text-opacity))",
                    strokeWidth: "20px"
                  }}
                ></path>
              </svg>

              <span className="text-title ml-1 mr-1">Scroll Down</span>
              <i className="uil uil-arrow-down text-title text-lg"></i>
        </a>

    </div>
  )
}

export default ScrollDown;
