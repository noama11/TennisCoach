import { SectionWrapper } from '../hoc';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import child from '../assets/tennisChild.jpg'
import { Slider } from "../components/Slider"
const About = () => {
    return (
        <>
            <div className='flex'>
                <div>
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>Introduction</p>
                        <h2 className={styles.sectionHeadText}>Overview.</h2>
                    </motion.div>
                    <motion.p variants={fadeIn("", "", 0.1, 1)}
                        className='mt-4 text-black text-[17px] max-w-3xl leading-[30px] '>
                        Highly motivated student in my third-year of studying software and
                        information systems engineering at Ben
                        Gurion University. A quick learner with high
                        autodidactic abilities. As a former professional basketball player,
                        I bring a strong work ethic,  discipline and the ability to thrive in a
                        team environment. Highly motivated to learn new technologies and facingnew challenges.
                    </motion.p>
                </div>
                <div className='w-9/12 pl-20'>
                    <Slider />
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");
// export default About;