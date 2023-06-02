import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 }}}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2000-2023</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 xs:h-full">
        <ResumeCard
          title="Turan University"
          subTitle="Faculty of Business and Management (2000 - 2005)"
          result="3.90/4"
          des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
        />
        <ResumeCard
          title="Result School"
          subTitle="Fullstack Developer (2022 - 2023)"
          result="4.75/5"
          des="Teaching front-end and back-end development in the Javascript programming language, the Mongo DB database, and more"
        />
        <ResumeCard
          title="Self-learning"
          subTitle="Continuous learning (2022- still)"
          result="5.00/5"
          des="I constantly develop at seminars, bootcamps and communicate a lot with mentors, and also do my own pet projects, because programming is a constant learning!"
        />
      </div>
    </motion.div>
  );
};

export default Education;
