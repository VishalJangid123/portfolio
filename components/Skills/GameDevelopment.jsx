import React from "react";
import { lang_data } from "./data";

function GameDevelopment() {
  return (
    <div className="bg-card px-8 py-8 rounded-3xl ">
      <h3 className="text-base flex justify-center items-center mb-8">
        Game Development
      </h3>

      <div className="skills__box">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
          {lang_data &&
            lang_data.map((data, index) => {
              return (
                <div
                  className="flex flex-row gap-2 lg:w-80 sm:w-64"
                  key={index}
                >
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="text-base font-medium"> {data.name}</h3>
                    <span className="text-xs text-textColor">{data.level}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default GameDevelopment;
