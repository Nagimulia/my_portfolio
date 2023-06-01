import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { SiProgress} from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Responsive layout"
          des="By using HTML, CSS,Javascript i create modern and cretive websites."
        />
        <Card
          title="App Development"
          des="For more complex projects I use the library React."
          icon={<AiFillAppstore />}
        />
        <Card
          title="From the figma layout"
          des="Designers create beautiful templates, and I pass it all to the browser."
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
};

export default Features;
