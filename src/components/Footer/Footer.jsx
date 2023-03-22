import React from "react";
import { lists } from "../../data/Data";
import { Icons } from "../../data/Data";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-Dark-moderate-cyan font-barlow py-12">
        <a href="/" className="text-center">
          <h1 className="text-3xl font-black text-Dark-desaturated-cyan">
            sunnyside
          </h1>
        </a>
        <div className="flex flex-row font-barlow mt-6 items-center justify-center">
          {lists.map((item) => {
            return (
              <ul>
                <li className="mx-5 cursor-pointer text-lg text-Dark-desaturated-cyan">
                  {item.list}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="flex flex-row mt-10 items-center justify-center">
          {Icons.map((icon) => {
            return <img src={icon.image} alt="icons" className="w-6 h-auto cursor-pointer mx-6"/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
