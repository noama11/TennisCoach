import { motion } from 'framer-motion'


const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className="w-full max-auto py-2 flex items-center text-center overflow-hidden ">
            <h1 className={`inline-block w-full text-white font-bold capitalize text-8xl ${className}`}>
                {text.split("").map((word, index) =>
                    <span key={word + "-" + index} className="inline-block">
                        {word}&nbsp;
                    </span>

                )}
            </h1>
        </div>
    );
}

export default AnimatedText;