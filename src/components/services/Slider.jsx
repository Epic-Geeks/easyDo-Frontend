import React, { useState } from 'react'
import { trend1, trend2, trend3, trend4, trend5 } from '../../assets/images/trending';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const images = [trend1, trend2, trend3, trend4, trend5];
    const prevSliderHandler = (index) => {
        if (index === 0) {
          setActiveSlide(images.length - 1);
        } else if (index > 1) {
          setActiveSlide(activeSlide - 1);
        } else {
          setActiveSlide(images.length - 1);
        }
      };
    
      const nextSliderHandler = (index) => {
        if (index === images.length - 1) {
          setActiveSlide(1);
        } else if (index < images.length - 1) {
          setActiveSlide(activeSlide + 1);
        } else {
          setActiveSlide(images.length - 1);
        }
      };
  return (
    <div className='m-6'>
    {images.map((item, index) => {
      return (
        <div
          key={index}
          className={
            activeSlide === index
              ? 'flex justify-between items-center lg:w-256'
              : 'hidden'
          }
        >
          <button
            className='text-6xl border-2 border-black'
            onClick={() => prevSliderHandler(index)}
          >
            <FiChevronLeft />
          </button>
          <div className=''>
            <img
              src={item}
              alt='landscape'
              className='lg:h-screen md:h-48 h-screen w-screen  object-contain object-center'
            />
          </div>
          <button
            className='text-6xl border-2 border-black'
            onClick={() => nextSliderHandler(index)}
          >
            <FiChevronRight />
          </button>
        </div>
      );
    })}
  </div>
  )
}

export default Slider