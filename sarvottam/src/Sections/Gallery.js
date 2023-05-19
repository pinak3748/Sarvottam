import React, { useEffect } from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import GallerySlider from '../Component/GallerySlider'
export default function Gallery() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section class="text-gray-600 body-font px-24 mt-5 border-b-[0.5px] border-gray-200">
            {/* <h2 className='text-Poppins text-4xl font-[800] text-secondary text-center'>Gallery</h2> */}
            <div class="flex flex-col text-center w-full mb-20">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="150"
                    data-aos-easing="ease-in"
                    className='text-Poppins text-4xl font-[800] text-secondary text-center mb-3'>Gallery</h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="400"
                    data-aos-easing="ease-in"
                    class="lg:w-2/3 mx-auto leading-relaxed text-md">Step into our gallery and immerse yourself in a visual feast of exquisite flooring designs, where elegance meets functionality. Discover the perfect foundation for your space, crafted with precision and style.</p>
            </div>
            <div className='relative mt-[50px] section'>
                <GallerySlider />
            </div>

        </section>
    )
}
