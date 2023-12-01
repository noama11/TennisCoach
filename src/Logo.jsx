import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


// Make the Link element to motion elemnt
const MotionLink = motion(Link);


const Logo = () => {

    return (
        <motion.div className="flex items-center justify-center mt-2"

        >
            <MotionLink to={"/"} className='w-16 h-16 bg-dark rounded-full text-light flex items-center justify-center 
            font-bold text-2xl '
                whileHover={{
                    backgroundColor: ["#121212", "#8fbc8f"],
                    transition: { duration: 0.75 }
                }}
            >
                OS
            </MotionLink>

        </motion.div>
    )
}

export default Logo;