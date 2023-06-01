import React from 'react';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectCard
        title="Website for a digital agency"
        des="Building website with animations"
        src={projectOne}
				linkCode='https://github.com/Nagimulia/digital-site'
				linkView='https://digital-site-nagimulia.vercel.app/'
      />
      <ProjectCard
        title="Website for a bank"
        des="Create creative website using React, Tailwindcss"
        src={projectTwo}
				linkCode='https://github.com/Nagimulia/bank'
				linkView='https://bank-ten-mocha.vercel.app/'
      />
      <ProjectCard
        title="Realtor Clone"
        des="Create App React, Routes, Login"
        src={projectThree}
				linkCode='https://github.com/Nagimulia/realtor_clone'
				linkView='https://realtor-clone-react-nu.vercel.app/'
      />
      <ProjectCard
        title="Website for a sale agency"
        des="Create website using HTML, SCSS, JS and responsive layout"
        src={projectFour}
				linkCode='https://github.com/Nagimulia/website_lofthouse'
				linkView='https://website-lofthouse.vercel.app/'
      />
      <ProjectCard
        title="Rent car website"
        des="Create website React, Routes"
        src={projectFive}
				linkCode='https://github.com/Nagimulia/car-rental_website'
				linkView='https://car-rental-website-beta.vercel.app/home'
      />
      <ProjectCard
        title="E-commerce Website"
        des="Create e-commece using React, Tailwindcss, Redux, Toast"
        src={projectSix}
				linkCode='https://github.com/Nagimulia/store_snikers_nike'
				linkView='https://store-snikers-nike.vercel.app/'
      />
    </div>
  </section>
  );
};

export default Projects;
