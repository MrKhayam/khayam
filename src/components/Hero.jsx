import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-[95%] mx-auto relative hero flex items-center md:mt-0 mt-32 md:justify-center flex-col gap-5">
        <h1 className="text-2xl md:text-5xl font-bold md:leading-[60px] 2xl:text-7xl text-center">
          Hello, I am <span className="text-[#FF6500]">Khayam Ijaz</span> <br />{" "}
          <span>Fullstack Web Developer</span>
        </h1>
        <div className="buttons flex items-center gap-2 md:gap-5">
          <button className="bg-[#000] text-white px-5 py-3 md:px-7 md:py-4 rounded-md">
            Download CV
          </button>
          <button className="bg-[#FF6500] px-5 py-3 text-white md:px-7 md:py-4 rounded-md">
            Contact Me
          </button>
        </div>
        <img
          src="/hero.png"
          alt=""
          className="absolute md:bottom-[-130px] md:right-[-130px] md:w-[350px] w-[300px] bottom-[22%] z-[-1] lg:w-[400px] md:rotate-[-45deg]"
        />
        <img
          src="/hero2.png"
          alt=""
          className="animate-up-down absolute top-[-18%] md:bottom-[65%] md:left-[2%] lg:left-[10%] xl:left-[20%] w-[100px] rotate-[-45deg]"
        />
        <img
          src="/elp1.png"
          alt=""
          className="z-[-2333] absolute md:bottom-[-200px] md:left-[-200px] md:w-[500px] w-[300px] bottom-[2%] left-[-100px] rotate-[-45deg] blur-lg"
        />
      </div>
    </>
  );
};

export default Hero;
