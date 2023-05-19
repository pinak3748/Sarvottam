import React, { useEffect } from 'react'
import SonaLam from '../assets/SonaLam.png'
import royal from '../assets/royal.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function OurBrands() {


    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div class="container px-5 py-10 mx-auto border-b-[0.5px] border-gray-100">
            <div class="flex flex-col text-center w-full mb-10">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="150"
                    data-aos-easing="ease-in"
                    className='text-Poppins text-4xl font-[800] text-secondary text-center mb-3'>Our Brands</h2>
                {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-md">Step into luxury and elevate your space with our exquisite flooring collection. Immerse yourself in timeless elegance and unmatched quality for a floor that makes a lasting impression</p> */}
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="400"
                data-aos-easing="ease-in"
                className='flex item-center justify-center gap-x-28'>
                <img alt="gallery" class="rounded-xl h-24 inset-0 w-auto object-cover object-center" src={SonaLam} />
                <img alt="gallery" class="rounded-xl inset-0 w-auto h-24 object-cover object-center" src={royal} />
            </div>
        </div>
    )
}
