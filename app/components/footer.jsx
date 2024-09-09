// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-[#353951] bg-[#0d1224] border-t text-white">
      <div className="mx-auto px-6 sm:px-12 py-6 lg:py-10 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="-z-40 flex justify-center">
          <div className="top-0 absolute bg-gradient-to-r from-transparent via-violet-500 to-transparent w-1/2 h-[1px]"></div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="text-sm">
            © Developer Portfolio by Daniel Bonar
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/br2sin"
              className="flex items-center gap-2 hover:text-[#16f2b3] uppercase"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/br2sin/fork"
              className="flex items-center gap-2 hover:text-[#16f2b3] uppercase"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;