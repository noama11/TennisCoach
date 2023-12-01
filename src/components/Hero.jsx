import { motion } from 'framer-motion'
import { styles } from '../styles'
import { TennisCanvas } from './canvas'
import AnimatedText from './AnimatedText'
import { Link } from 'react-scroll';
import CountUp from 'react-countup';

const Hero = () => {

    const ballStyle = "background-color: #121212;"

    return (
        <section className='relative w-full h-screen mx-auto'>

            <div className='flex-col absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5 items-start '>
                <div className='flex relative items-center uppercase inline-block mt-4 pt-2 pb-2 text-white border rounded-full pl-4 pr-4 z-2 bg-gray-600'>
                    {/* <motion.dev
                        initial={{ left: '238' }}
                        whileInView={{ left: '9px' }}
                        transition={{ type: 'spring', duration: '3' }}
                    /> */}
                    <motion.div className='absolute left-0 z-10 w-20 h-8 bg-black border rounded-3xl bg-customGreen'
                        initial={{ left: '400' }}
                        whileInView={{ left: '9px' }}
                        transition={{ type: 'spring', duration: '3', type: 'tween' }}
                    >

                    </motion.div>
                    <span className='z-20 font-Roboto text-xl '>Serve, Smash, Succeed: Your Tennis Journey Begins Here </span>
                </div>
                <h1 className=" text-white mt-4 text-7xl font-normal leading-tight font-Roboto" >
                    Your Game, Your Way:  <br className='sm:block hidden' />
                    Personalized Tennis Training<br />
                </h1>
                <p className="text-white mt-2 text-3xl font-thin font-Roboto ">
                    Welcome to a court where every level of tennis prowess meets personalized <br className='sm:block hidden' />
                    coaching excellence. Join me in unlocking your full potential,  <br className='sm:block hidden' />no matter where your journey in tennis begins.
                </p>
                <div
                    className="hover:cursor-pointer inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </div>
                <div className='pt-20 flex gap-8 justify-between'>
                    <div className='flex flex-col rounded'>
                        <span className='text-white text-3xl'>
                            <CountUp start={0} end={798} duration={2} prefix="+ " />
                        </span>
                        <span className='font-Roboto text-xl'>fitness programs</span>
                    </div>
                    <div className='flex flex-col bg-gray-500 rounded'>
                        <span className='text-white text-3xl'>
                            <CountUp start={0} end={83} duration={2} prefix="+ " />
                        </span>
                        <span className='font-Roboto text-xl'>members joined</span>
                    </div>
                    <div className='flex flex-col bg-gray-500 rounded'>
                        <span className='text-white text-3xl'>
                            <CountUp start={0} end={11} duration={2} prefix="+ " />
                        </span>
                        <span className='font-Roboto text-xl'>expert coachs</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;