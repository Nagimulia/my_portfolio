import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">Features</p>
        <h2 className="text-4xl font-bold">My Skills</h2>
      </div>
      <div className="mt-14 w-[80%] flex flex-col gap-6">
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">HTML</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">CSS3</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0 ">100%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Javascript</p>
          <span className="w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0 xs:left-[85px]">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Typescript</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[40%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0 xs:left-[85px]">40%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">React</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0 xs:left-[85px]">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Next</p>
          <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Mongo DB</p>
          <span className="w-[75%] h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0 xs:left-[85px]">75%</span>
            </motion.span>
          </span>
        </div>
				</div>
      
    </motion.div>
  );
};

export default Skills;
