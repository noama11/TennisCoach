import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Slider = () => {
    const slides = [
        { url: "public/Imgs/2.png" },
        { url: "public/Imgs/3.png" },
        { url: "public/Imgs/5.png" },
    ];

    const [currIdx, setCurrIdx] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currIdx === 0; // if we on the first img ther is no prev, so go to the end
        const newIdx = isFirstSlide ? slides.length - 1 : currIdx - 1;
        setCurrIdx(newIdx);
    }

    const nextSlide = () => {
        const isFirstSlide = currIdx === slides.length - 1; // if we on the first img ther is no prev, so go to the end
        const newIdx = isFirstSlide ? 0 : currIdx + 1;
        setCurrIdx(newIdx);
    }
    const goToSlide = (slideIdx) => {
        setCurrIdx(slideIdx)
    }

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 relative group'>
            <div style={{ backgroundImage: `url(${slides[currIdx].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                {/* left arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* right arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIdx) => (
                    <div key={slideIdx} onClick={() => goToSlide(slideIdx)} className='text-2xl  cursor-pointer'>
                        <RxDotFilled />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider;