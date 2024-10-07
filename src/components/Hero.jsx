import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-[95%] mx-auto relative hero flex items-center justify-center flex-col gap-5">
        <h1 className="text-5xl font-bold leading-[60px] lg:text-7xl lg:leading-[80px]">
          Hello, I am <span className="text-[#FF6500]">Khayam Ijaz</span> <br />{" "}
          <span>Fullstack Web Developer</span>
        </h1>
              <div className="buttons flex items-center gap-5">
                  <button className="bg-[#000] text-white px-7 py-4 rounded-md">
                      Download CV
                  </button>
                  <button className="bg-[#FF6500] text-white px-7 py-4 rounded-md">
                      Contact Me
                  </button>
        </div>
        <img
          src="/hero.png"
          alt=""
          className="absolute bottom-[-130px] right-[-130px] w-[400px] rotate-[-45deg]"
        />
        <img
          src="/hero2.png"
          alt=""
          className="animate-up-down absolute bottom-[530px] left-[60px] lg:left-[180px] w-[100px] rotate-[-45deg]"
        />
        <img
          src="/elp1.png"
          alt=""
          className="absolute bottom-[-200px] left-[-200px] w-[500px] rotate-[-45deg] blur-lg"
        />
      </div>
    </>
  );
};

export default Hero;
