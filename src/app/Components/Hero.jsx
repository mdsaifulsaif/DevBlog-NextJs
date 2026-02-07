import React from "react";
import HeroButton from "./HeroButton";
import Navber from "./Navber";

function Hero() {
  return (
    <div className="py-5 relative text-center  h-screen border border-amber-400 ">
      <h1 className="text-5xl pb-2">Level Up Your Web Development Journey</h1>
      <p>
        Practical tutorials, real-world MERN & Next.js projects, UI inspiration,
        <br />
        and developer tips to help <br /> you build modern, scalable web
        applications with confidence.
      </p>
      <HeroButton />
      <div className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[600px]  bg-amber-300  rounded-bl-[200px] -z-1  blur-2xl  rounded-tr-[800px] opacity-10 "></div>
    </div>
  );
}

export default Hero;
