import React, { useState, useEffect, useRef } from 'react'
import Kitchen01 from '../assets/kitchen01.jpg'
import Kitchen02 from '../assets/kitchen02.jpg'
import florring01 from '../assets/florring01.jpg'
import '../App.css'
export default function Home() {
    const [currentImage, setCurrentImage] = useState(0)
    const imageArray = [Kitchen01, Kitchen02, florring01]
    const firstRender = useRef(0);

    useEffect(() => {
        if (firstRender.current < 2) {
            firstRender.current = firstRender.current + 1;
        } else {
            const image1 = document.getElementById('image1');
            const image2 = document.getElementById('image2');
            const image2copy = document.getElementById('image2copy');


            const nextIndex = currentImage === 2 ? 0 : currentImage + 1;
            const nextToNextIndex = nextIndex === 2 ? 0 : nextIndex + 1;

            image1.classList.add('animation1');
            image2.classList.add('animation2');
            image2copy.classList.add('slide');


            setTimeout(() => {
                image1.classList.remove('animation1');
                image2.classList.remove('animation2');
                image2copy.classList.remove('slide');

                image1.src = imageArray[currentImage];
                image2.src = imageArray[nextIndex];
                image2copy.src = imageArray[nextToNextIndex];
            }, 1500);
            setTimeout(() => {
                setCurrentImage(currentImage === 2 ? 0 : currentImage + 1);
            }, 5000);

        }
    }, [currentImage]);


    useEffect(() => {
        setTimeout(() => {
            setCurrentImage(currentImage === 2 ? 0 : currentImage + 1);
        }, 5000);
    }, [])



    return (
        <div className='w-full flex bg-offwhite overflow-x-hidden'>
            <div className='w-1/2 py-28 pl-44'>
                <h2 className='text-5xl text-Montserrat text-secondary font-[800] leading-normal'>Unlock the Natural</h2>
                <h2 className='text-5xl text-Montserrat text-secondary font-[800] leading-normal'>Beauty of <span className='text-[#f0504f]'>Wood</span></h2>
                <p className='mt-3 leading-5 text-[15px] text-Inter text-gray-600 max-w-lg'>
                    Unleash the beauty of wood in all its forms. Our wood veneer sheets highlight each species' organic qualities,
                    from the rustic charm of oak to the contemporary elegance of walnut.
                    Explore endless possibilities and bring nature's marvels into your projects.
                    With captivating textures and natural variations, our wood veneers add an authentic touch to any space.
                </p>

                <button className='bg-[#f0504f] px-4 py-2.5 mt-8 text-sm text-Inter text-offwhite font-[500] rounded-lg'>
                    Get Started
                </button>

                <div className='flex item-center gap-x-10 mt-8'>
                    <p className='text-2xl text-secondary text-Poppins font-bold text-center leading-5'>
                        25
                        <span className='font-[900]'>+</span> <br />
                        <span className='text-xs text-gray-800 leading-3 font-normal'>Years Experience</span>
                    </p>
                    <p className='text-2xl text-secondary text-Poppins font-bold text-center leading-5'>
                        56
                        <span className='font-[900]'>+</span> <br />
                        <span className='text-xs text-gray-800 leading-3 font-normal'>Different Locations</span>
                    </p>
                    <p className='text-2xl text-secondary text-Poppins font-bold text-center leading-5'>
                        78
                        <span className='font-[900]'>+</span> <br />
                        <span className='text-xs text-gray-800 leading-3 font-normal'>Total Projects</span>
                    </p>
                </div>
            </div>

            <div className='w-1/2 py-8 overflow-x-hidden'>
                <div className='w-full flex gap-x-14 pl-8'>
                    <img src={Kitchen01} id='image1' className='image shadow-custom rounded-2xl ' />
                    {/* <img src={Kitchen01} id='image1copy' className='image shadow-custom rounded-2xl  ' /> */}

                    <img src={Kitchen02} id='image2' className='smallImage overflow-x-hidden rounded-2xl  ' />
                    <img src={Kitchen02} id='image2copy' className='smallImage overflow-x-hidden rounded-2xl  ' />
                </div>
                <div className='flex gap-x-8 px-8 mt-6'>
                    <p onClick={() => { setCurrentImage(0) }} className={` ${currentImage === 0 ? `text-secondary border-b-[2px] text-xl` : `text-gray-700 hover:text-secondary text-md`} pb-2 transition-all duration-200 ease-in-out text-Poppins font-bold text-center leading-5 hover:border-b-[2px] border-primary cursor-default`}>1</p>
                    <p onClick={() => { setCurrentImage(1) }} className={` ${currentImage === 1 ? `text-secondary border-b-[2px] text-xl` : `text-gray-700 hover:text-secondary text-md`} pb-2 transition-all duration-200 ease-in-out text-Poppins font-bold text-center leading-5 hover:border-b-[2px] border-primary cursor-default`}>2</p>
                    <p onClick={() => { setCurrentImage(2) }} className={` ${currentImage === 2 ? `text-secondary border-b-[2px] text-xl` : `text-gray-700 hover:text-secondary text-md`} pb-2 transition-all duration-200 ease-in-out text-Poppins font-bold text-center leading-5 hover:border-b-[2px] border-primary cursor-default`}>3</p>
                </div>
            </div>
        </div>
    )
}
