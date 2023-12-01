import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo';
import instegramLogo from "../assets/Instagram-Logo.svg"
import { motion } from 'framer-motion'


// Make the Link element to motion elemnt
const MotionLink = motion(Link);


const Navbar = () => {
    const [active, setActive] = useState("");

    return (
        <nav
            className='w-full px-32 py-6 flex items-center justify-between mx-auto top-0 '>
            <nav className='text-2xl text-white'>
                <Link to={"/"} className="relative group mr-4" onClick={() => setActive("Home")}>
                    Home
                    <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                     group-hover:w-full transition-[width] ease duration-300 
                     ${active === "Home" ? 'w-full' : 'w-0'}`}>
                        &nbsp;</span>
                </Link>

                <Link to={"/about"} className="relative group mx-4" onClick={() => setActive("About")}>
                    About
                    <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                     group-hover:w-full transition-[width] ease duration-300 
                     ${active === "About" ? 'w-full' : 'w-0'}`}>
                        &nbsp;</span>
                </Link>

                <Link to={"/contact"} className="relative group mx-4" onClick={() => setActive("Contact")}>
                    Contact
                    <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                     group-hover:w-full transition-[width] ease duration-300 
                     ${active === "Contact" ? 'w-full' : 'w-0'}`}>
                        &nbsp;</span>
                </Link>
            </nav>


            <nav className='flex items-center justify-center flex-wrap '>
                <MotionLink to={"/"}
                    className='flex items-center justify-center'
                    whileHover={{ y: -2 }}
                >
                    <img src={instegramLogo} alt="Instagram Logo" className="w-16" />
                </MotionLink>

                <MotionLink to={"/"}
                    className='flex items-center justify-center'
                    whileHover={{ y: -2 }}
                >

                    <img src={instegramLogo} alt="Instagram Logo" className="w-16 " />
                </MotionLink>

            </nav>

            {/* the div className for making it on the middle of the navbar */}
            <div className='absolute left-[50%] top-2 translat-x-[-50%]'>
                <Logo />
            </div>

        </nav>
    )
}
export default Navbar;