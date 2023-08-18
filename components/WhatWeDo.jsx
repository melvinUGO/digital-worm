import { data } from "@/assets/whatWeDoData";
import React from "react";

const About = () => {
  return (
    <section className="bg-[#FBFBFB]">
      <div className="center px-[20px] py-[40px] md:py-[100px]">
        <h1 className="text-center">What we do</h1>
        <div className=" max-w-[1265px] mx-auto flex flex-wrap flex-col justify-evenly md:flex-row items-center gap-5 md:gap-[67px]">
          {data.map((item, index) => (
            <article
              key={index}
              className="relative px-[35px] py-[40px] rounded-lg bg-[#fff] w-[90%] md:w-[377px] md:h-[471px] shadow-md "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="md:w-[107px] md:h-[107px]"
              />
              <h2 className="text-[#000] text-[24px] md:text-[34px] font-[700] tracking-[0.5px] py-3">
                {item.title}
              </h2>
              <ul className="py-5">
                {item.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-[#616161] text-[15px] md:text-[21px] leading-[29px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="md:absolute bottom-0 w-full left-0 md:px-[35px] md:p-5">
                <button
                  type="button"
                  className=" w-full px-[32px] py-[16px] rounded-lg bg-[#EE9621] text-white"
                >
                  Get Quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
