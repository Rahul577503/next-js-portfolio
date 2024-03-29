/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/legacy/image";
import Profile from "@/public/me.svg";
import { MovingBorderButton } from "@/components/ui/moving-border";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="min-h-screen  overflow-hidden py-10  px-5  flex-col-reverse flex  lg:flex-row items-center justify-between gap-5 lg:gap-5 animate-move-up">
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4">
        <h1 className="text-3xl lg:text-7xl md:text-2xl font-bold text-white">
          <span className="inline-block">Hii There !</span>{" "}
          <span className="inline-block wave lg:text-6xl text-2xl ">👋</span>
          <br />
          <span className="underline text-3xl lg:text-5xl underline-offset-8 decoration-amber-400">
            {"I'm Rahul"}
          </span>
        </h1>

        <p className="text-lg text-gray-300">
          I'm a dynamic full-stack developer passionate about crafting
          captivating digital experiences. With expertise in frontend and
          backend development, I specialize in creating sleek interfaces and
          scalable systems. Fueled by innovation and a love for problem-solving,
          I thrive on pushing the boundaries of what's possible. Let's
          collaborate and bring your vision to life!"
        </p>
        <div className="flex  lg:flex-row items-center justify-center lg:justify-start gap-5 mt-5">
          <Button />
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-3.5 md:p-2 lg:p-3 font-semibold"
          >
            Download Resume
          </MovingBorderButton>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
        <div className="w-48 h-48 lg:w-72 lg:h-72 space-y-3 relative">
          <div className="glow-indigo absolute top-1/2 left-1/2 transform z-0 glow"></div>

          <Image
            src={Profile}
            alt="my-image"
            height={500}
            width={500}
            priority
            className="rounded-2xl relative backdrop-blur-3xl transition-opacity duration-300 hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
