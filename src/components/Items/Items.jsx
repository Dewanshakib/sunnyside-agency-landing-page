import React from "react";
import { Data } from "../../data/Data";
import { Data_two } from "../../data/Data";

const Items = () => {
  return (
    <div className="">
      {Data.map((item) => {
        return (
          <div
            key={item.id}
            className="md:flex"
            style={
              item.reverse
                ? {  flexDirection: "row-reverse" }
                : {  flexDirection: "revert" }
            }
          >
            <img src={item.image} alt="/" className="w-full h-auto md:hidden" />
            <img
              src={item.imageD}
              alt="/"
              className="h-auto hidden md:w-3/6 md:block"
            />
            <div className="text-center px-9 mt-4 py-10 w-full h-auto  md:w-3/6 md:flex md:justify-center md:items-center">
              <div className="">
              <h1 className="font-black text-4xl mb-4 text-Very-dark-desaturated-blue">
                {item.title}
              </h1>
              <h4 className="font-barlow text-lg mb-4 text-Very-dark-grayish-blue">
                {item.para}
              </h4>
              <div className="w-full grid place-items-center">
                <button
                  style={
                    item.borderColor
                      ? { borderColor: "hsl(51, 100%, 49%)" }
                      : { borderColor: "hsl(7, 99%, 70%)" }
                  }
                  className="text-base uppercase h-6 font-black text-Very-dark-desaturated-blue duration-300 hover:border-b-4 hover:border-b-Yellow"
                >
                  {item.btn}
                </button>
              </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="md:flex">
      {Data_two.map((item) => {
        return (
          <div key={item.id} className="relative text-center">
        
           <img src={item.image} alt="/" className="md:hidden" />
            <img src={item.imageD} alt="/" className="hidden md:block" />
            <div className="absolute top-[70%] left-0">
              <div className="px-9">
                <h1
                  style={
                    item.First
                      ? { color: "hsl(167, 40%, 24%)" }
                      : { color: "hsl(198, 62%, 26%)" }
                  }
                  className="font-black text-4xl mb-4"
                >
                  {item.title}
                </h1>
                <p
                  style={
                    item.First
                      ? { color: "hsl(168, 34%, 41%)" }
                      : { color: "hsl(212, 27%, 19%)" }
                  }
                  className="font-barlow text-lg"
                >
                  {item.para}
                </p>
              </div>
            </div>
           
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Items;
