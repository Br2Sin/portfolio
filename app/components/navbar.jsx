// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex justify-between items-center py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="font-bold text-[#16f2b3] text-3xl">
            Daniel Bonar
          </Link>
        </div>

        <ul className="flex md:flex-row flex-col items-start md:space-x-1 md:border-0 opacity-0 md:opacity-100 mt-4 md:mt-0 w-full md:w-auto h-screen md:h-auto max-h-0 md:max-h-screen text-sm" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline hover:no-underline outline-none" href="/#about">
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline hover:no-underline outline-none" href="/#experience"><div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline hover:no-underline outline-none" href="/#skills"><div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">SKILLS</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline hover:no-underline outline-none" href="/#education"><div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline hover:no-underline outline-none" href="/blog"><div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline hover:no-underline outline-none" href="/#projects"><div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;