import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className=" px-[20px] py-[40px] md:py-[100px] bg-[#ee952109] md:h-[678px]">
      <div className="text-center max-w-[921px] mx-auto">
        <h1>
          DigitalWorm transforms your digital{" "}
          <span className="text-[#ee9621]">ideas</span> into{" "}
          <span className="text-[#ee9621]">reality.</span>
        </h1>
        <div className={inter.className}>
          <p className=" text-[14px] md:text-[28px] leading-[24px] md:leading-[42px]">
            We deliver cutting edge <strong>intuitive design</strong> and
            <strong> development</strong> solutions that brings brand to life
            and
            <strong> upscales</strong> businesses.
          </p>
        </div>

        <div className="mt-[30px] w-[200px] md:w-[307px] h-[44px] md:h-[66px] px-8 py-4 bg-amber-500 rounded-lg justify-center items-center gap-[10px] inline-flex">
          <div className="text-center text-white text-[20px] font-bold tracking-wide">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
