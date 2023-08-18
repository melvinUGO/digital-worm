"use client";
import Image from "next/image";
import React from "react";
import logo from "/public/logo-white.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg py-5">
      <div className=" p-[20px]">
        <div className=" center bg-[#ffffff] rounded-2xl p-10 md:py-0   md:px-[40px]">
          <div className="lg:flex gap-5 items-center justify-between">
            <div className=" text-center lg:text-left lg:max-w-[395px]">
              <h1>
                Let us bring your <span className="text-[#ee9621]">ideas</span>{" "}
                to <span className="text-[#ee9621]">reality</span>
              </h1>
              <button className="md:w-[307px] w-[200px] md:h-[66px]  h-[33px] md:py-[16px] py-[5px] md:px-[32px] px-[20px]  text-center rounded-lg border-2 border-[#ee9621]">
                Get in touch &rarr;
              </button>
            </div>
            <div className="hidden lg:block relative">
              <img src="/image2.png" alt="image" className=" z-10" />
              <img
                src="/image3.png"
                alt="image"
                className="absolute z-0 -top-[70px]"
              />
            </div>
          </div>
        </div>
        <nav className=" center space-y-5 lg:flex justify-between items-center text-white py-10">
          <div className="relative w-[70px] h-[25px] sm:w-[155px] sm:h-[55px]">
            <Image src={logo} fill className="object-contain" priority />
          </div>
          <div className="  lg:space-x-[42px] flex lg:block flex-col">
            <Link href="/">Home</Link>
            <Link href="/aboutUs">About us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contactUs">Contact us</Link>
          </div>
          <p>&copy; 2023 DigitalWorm</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
