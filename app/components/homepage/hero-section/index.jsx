// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-between items-center py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="-top-[98px] -z-10 absolute"
      />

      <div className="items-start gap-y-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-start order-2 lg:order-1 p-2 lg:pt-10 pb-20 md:pb-10">
          <h1 className="font-bold md:font-extrabold text-3xl text-white lg:text-[2.6rem] leading-10 lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className="text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="flex items-center gap-5 my-12">
            <Link
              href={personalData.github}
              target='_blank'
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            {/* <Link
              href={personalData.linkedIn}
              target='_blank'
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link> */}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r from-violet-600 hover:from-pink-500 to-pink-500 hover:to-violet-600 p-[1px] rounded-full transition-all duration-300">
              <button className="flex items-center gap-1 hover:gap-3 bg-[#0d1224] px-3 md:px-8 py-3 md:py-4 border-none rounded-full font-medium md:font-semibold text-[#ffff] text-center text-xs md:text-sm no-underline uppercase tracking-wider transition-all duration-200 ease-out">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 rounded-full font-medium md:font-semibold text-center text-white text-xs md:text-sm hover:text-white no-underline hover:no-underline uppercase tracking-wider transition-all duration-200 ease-out" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="relative border-[#1b2c68a0] order-1 lg:order-2 bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border rounded-lg">
          <div className="flex flex-row">
            <div className="bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full h-[1px]"></div>
            <div className="bg-gradient-to-r from-violet-600 to-transparent w-full h-[1px]"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="bg-red-400 rounded-full w-3 h-3"></div>
              <div className="bg-orange-400 rounded-full w-3 h-3"></div>
              <div className="bg-green-200 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div className="border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 border-t-[2px] overflow-hidden">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="mr-2 ml-4 lg:ml-8 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Daniel Bonar</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="mr-2 ml-4 lg:ml-8">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="mr-2 ml-4 lg:ml-8 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="mr-2 ml-4 lg:ml-8 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="mr-2 ml-4 lg:ml-8 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="mr-2 ml-4 lg:ml-8 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="mr-2 ml-8 lg:ml-16 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="mr-2 ml-8 lg:ml-16 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;