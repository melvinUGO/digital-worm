import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-[#FFF]">
      <div className="center px-[20px] py-[40px] md:py-[100px]">
        <div className="flex gap-10 flex-col md:flex-row items-center w-fit mx-auto">
          <div className="relative md:min-w-[300px] lg:min-w-[462px]">
            <img src="/image1.png" alt="image" />
            <img
              src="/vector1.png"
              alt="circle"
              className="absolute -top-10 -left-10"
            />
          </div>
          <div className="max-w-[681px]">
            <h2 className="text-[#000] text-[24px] md:text-[34px] font-[700] tracking-[0.5px] py-3">
              WHO WE ARE
            </h2>
            <p className=" text-[14px] md:text-[28px] leading-[24px] md:leading-[42px] pb-[54px]">
              We are{" "}
              <span className="text-[#ee9621]">
                designers, developers, writers, thinkers, and problem solvers
              </span>
              . Small enough to be simple and fast, but big enough to deliver
              your project scope at the pace you need. You can learn more
            </p>
            <button className="md:w-[307px] w-[200px] md:h-[66px]  h-[33px] md:py-[16px] py-[5px] md:px-[32px] px-[20px]  text-center rounded-lg border-2 border-[#ee9621]">
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100px] md:h-[167px] w-[1px] bg mx-auto py-5"></div>
    </section>
  );
};

export default WhoWeAre;
