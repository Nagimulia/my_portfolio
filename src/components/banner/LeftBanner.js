import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder", "Frontend developer", "Freelancer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to my World</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor text-5xl capitalize">
            {" "}
            Nagima Keneuova.
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a<span> {text}.</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          From Kazahstan, Almaty. Back in 2005, I graduated from the university
          with a degree in economics. After some time, I realized that I love to
          embody the beautiful and technical, so I came to programming, namely
          to front-end development.This is where you can create amazing apps and
          websites and even games, which is what I do and constantly improve my
          skills!
        </p>

        <div className="flex flex-col xl:flex-row lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base font-titleFont uppercase mb-4">
              find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <a
                  href="https://github.com/Nagimulia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </span>
              <span className="bannerIcon">
                <a
                  href="https://www.instagram.com/frontendreact/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </span>
              <span className="bannerIcon">
                <a
                  href="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B3%D0%B8%D0%BC%D0%B0-%D0%BA%D0%B5%D0%BD%D0%B5%D1%83%D0%BE%D0%B2%D0%B0-49418a1ba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              best skills
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiFigma />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
