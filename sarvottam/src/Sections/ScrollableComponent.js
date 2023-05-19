import React, { useEffect } from 'react'
import Fabric from '../assets/Fabric.jpeg';
import colour from '../assets/colour.jpeg';
import Liner from '../assets/Liner.jpeg';
import wooden_ from '../assets/wooden_.jpeg';
import MarbleC from '../assets/Marble-c.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ScrollableComponent = () => {


  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section class="text-gray-600 body-font border-b-[0.5px] border-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="50"
            data-aos-easing="ease-in"
            className='text-Poppins text-4xl font-[800] text-secondary text-center mb-3'>Our Products</h2>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="100"
            data-aos-easing="ease-in"
            class="lg:w-2/3 mx-auto leading-relaxed text-md">Step into luxury and elevate your space with our exquisite flooring collection. Immerse yourself in timeless elegance and unmatched quality for a floor that makes a lasting impression</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative rounded-xl">
              <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" src={Fabric} />
              <div class="px-8 py-10 relative z-10 w-full rounded-xl transition-all bg-[#ffeaea] duration-200 ease-in-out border-gray-200 border-[1px] shadow-md opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-base font-[600] text-Inter text-orange-600 mb-0.5">Explore the Finest Flooring Materials</h2>
                <h1 class="title-font text-lg font-[700] text-Poppins text-gray-900 mb-3">Fabric</h1>
                <p class="leading-relaxed">Experience unparalleled comfort and a touch of luxury with our fabric flooring options.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative rounded-xl">
              <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" src={Liner} />
              <div class="px-8 py-10 relative z-10 w-full rounded-xl transition-all bg-[#ffeaea] duration-200 ease-in-out border-gray-200 border-[1px] shadow-md opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-base font-[600] text-Inter text-orange-600 mb-0.5">Explore the Finest Flooring Materials</h2>
                <h1 class="title-font text-lg font-[700] text-Poppins text-gray-900 mb-3">Colour </h1>
                <p class="leading-relaxed">Unleash your creativity and transform your space with our extensive range of colorful flooring solutions.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative rounded-xl">
              <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" src={MarbleC} />
              <div class="px-8 py-10 relative z-10 w-full rounded-xl transition-all bg-[#ffeaea] duration-200 ease-in-out border-gray-200 border-[1px] shadow-md opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-base font-[600] text-Inter text-orange-600 mb-0.5">Explore the Finest Flooring Materials</h2>
                <h1 class="title-font text-lg font-[700] text-Poppins text-gray-900 mb-3">Liner </h1>
                <p class="leading-relaxed">Enhance the elegance of your interior with sophisticated and stylish liner flooring.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative rounded-xl">
              <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" src={wooden_} />
              <div class="px-8 py-10 relative z-10 w-full rounded-xl transition-all bg-[#ffeaea] duration-200 ease-in-out border-gray-200 border-[1px] shadow-md opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-base font-[600] text-Inter text-orange-600 mb-0.5">Explore the Finest Flooring Materials</h2>
                <h1 class="title-font text-lg font-[700] text-Poppins text-gray-900 mb-3">Wooden </h1>
                <p class="leading-relaxed">Add a touch of elegance and create a classic ambiance with our exquisite range of wooden flooring options.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative rounded-xl">
              <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" src={colour} />
              <div class="px-8 py-10 relative z-10 w-full rounded-xl transition-all bg-[#ffeaea] duration-200 ease-in-out border-gray-200 border-[1px] shadow-md opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-base font-[600] text-Inter text-orange-600 mb-0.5">Explore the Finest Flooring Materials</h2>
                <h1 class="title-font text-lg font-[700] text-Poppins text-gray-900 mb-3">Fabric</h1>
                <p class="leading-relaxed">Experience unparalleled comfort and a touch of luxury with our fabric flooring options.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative rounded-xl">
              <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" src={Fabric} />
              <div class="px-8 py-10 relative z-10 w-full rounded-xl transition-all bg-[#ffeaea] duration-200 ease-in-out border-gray-200 border-[1px] shadow-md opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-base font-[600] text-Inter text-orange-600 mb-0.5">Explore the Finest Flooring Materials</h2>
                <h1 class="title-font text-lg font-[700] text-Poppins text-gray-900 mb-3">Marble </h1>
                <p class="leading-relaxed">Immerse yourself in the timeless beauty and grandeur of marble flooring, elevating your space to new heights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableComponent;
