import React from "react";
import {fadeIn, textVariant} from '../utils/motion';
import { styles } from "../styles";
import {motion} from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Coding Arsenal 💻
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          SKILLS
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>

          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
