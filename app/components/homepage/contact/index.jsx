// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  return (
    <div id="contact" className="relative my-12 lg:my-16 mt-24 text-white">
      <div className="top-24 -right-8 absolute lg:flex flex-col items-center hidden">
        <span className="bg-[#1a1443] px-5 p-2 rounded-md w-fit text-white text-xl rotate-90">
          CONTACT
        </span>
        <span className="bg-[#1a1443] w-[2px] h-36"></span>
      </div>
      <div className="items-center gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
        {
          (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) ? <ContactWithCaptcha />
            : <ContactWithoutCaptcha />
        }

        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <MdAlternateEmail
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-2 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            {/* <p className="flex items-center gap-3 text-sm md:text-xl">
              <IoMdCall
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-2 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p> */}
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <CiLocationOn
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-2 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-5 lg:gap-10 mt-8 lg:mt-16">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-3 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={48}
              />
            </Link>
            {/* <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-3 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-3 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-3 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] hover:bg-[#16f2b3] p-3 rounded-full hover:scale-110 text-gray-800 transition-all duration-300 cursor-pointer"
                size={48}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;