import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion";

const Experience = () => {
	return (
		<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1, transition: { duration: 0.5 }}}
		className="w-full"
	>
		<div className="py-12 font-titleFont">
			<p className="text-sm text-designColor tracking-[4px]">Features</p>
			<h2 className="text-4xl font-bold">Experience</h2>
		</div>
		<div className="mt-14 w-full h-[950px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
			<ResumeCard
				title="Blog website"
				subTitle="Freelance"
				result="3.90/4"
				des="Building a Chef Blog Using MERN."
			/>
			<ResumeCard
				title="Result School"
				subTitle="Hakaton"
				result="4.75/5"
				des="Create projects in Javascript with my team"
			/>
			<ResumeCard
				title="Self-learning and development"
				subTitle="Pet projects"
				result="5.00/5"
				des="I create my own pet projects for practice."
			/>
		</div>
	</motion.div>
	)
}

export default Experience
