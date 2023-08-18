import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#FFF]">
      <div className="center px-[20px] py-[40px] md:py-[100px]">
        <div className="flex gap-10 flex-col md:flex-row items-center w-fit mx-auto">
          <div className="max-w-[681px]">
            <h2 className="text-[#000] text-[24px] md:text-[34px] font-[700] tracking-[0.5px] py-3">
              ABOUT US
            </h2>
            <p className=" text-[14px] md:text-[28px] leading-[24px] md:leading-[42px] pb-[54px]">
              <span className="text-[#ee9621]">DigitalWorm </span>
              is a technology company providing custom mobile, web,
              multi-platform solutions for Enterprises, Startups, Emerging
              businesses.
            </p>
            <button className="md:w-[307px] w-[200px] md:h-[66px]  h-[33px] md:py-[16px] py-[5px] md:px-[32px] px-[20px]  text-center rounded-lg border-2 border-[#ee9621]">
              Learn More &rarr;
            </button>
          </div>
          <div className="md:min-w-[300px] lg:min-w-[462px]">
            <img
              src="/union1.png"
              alt="big logo"
              className=" w-full md:max-w-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
