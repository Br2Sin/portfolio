// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="relative my-12 lg:my-16">
      <div className="top-16 -right-8 absolute lg:flex flex-col items-center hidden">
        <span className="bg-[#1a1443] px-5 p-2 rounded-md w-fit text-white text-xl rotate-90">
          ABOUT ME
        </span>
        <span className="bg-[#1a1443] w-[2px] h-36"></span>
      </div>
      <div className="gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-5 font-medium text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Daniel Bonar"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;