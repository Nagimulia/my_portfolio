import React from "react";
import { contactImg } from "../../assets/index";
import DowmloadPdf from "./../pdf/DowmloadPdf";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contact"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Keneuova Nagima</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I love to create beautiful, beautiful and functional projects using
          animation and modern technologies, I also try to follow the latest
          developments of developers.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <a href="tel:+77784008914">
            Phone:
            <br />
            <span className="text-lightText">+7 778 400 8914</span>
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <a href="mailto:nagimakeneuova@gmail.com">
            Email:
            <br />
            <span className="md:text-2xl text-lightText xs:text-[10px]">
              nagimakeneuova@gmail.com
            </span>
          </a>
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">
            My resume:
          </h2>
          <div className="w-full">
            <DowmloadPdf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
