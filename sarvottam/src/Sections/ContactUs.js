import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ContactUs() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section class="text-gray-600 body-font relative mt-24 px-24 border-b-[0.5px] border-gray-100">
            <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="150"
                data-aos-easing="ease-in"
                className='text-Poppins text-4xl font-[800] text-secondary text-center'>Contact Us</h2>
            <div class="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://my.atlist.com/map/b6c122ff-ee91-4327-a79b-92aee724c561?share=true" ></iframe>
                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-secondary text-Inter  tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1 text-Inter">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font text-Inter font-semibold text-secondary tracking-widest text-xs">EMAIL</h2>
                            <a class="text-indigo-500 leading-relaxed text-Inter">sarvottamdecor@gmail.com</a>
                            <h2 class="title-font font-semibold text-Inter text-secondary tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed text-Inter">818-674-1177</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full  md:mt-0">
                    <h2 class="text-secondary text-lg mb-1 font-medium title-font text-Inter">Feedback</h2>
                    <p class="leading-relaxed mb-5 text-gray-600 text-Inter">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-Inter text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full text-Inter bg-white rounded border border-gray-300 focus:border-[#f0504f] focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-Inter text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full text-Inter bg-white rounded border border-gray-300 focus:border-[#f0504f] focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-Inter text-gray-600">Message</label>
                        <textarea id="message" name="message" class="w-full text-Inter bg-white rounded border border-gray-300 focus:border-[#f0504f] focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button class="text-white bg-[#f0504f] border-0 text-Inter py-2 px-6 focus:outline-none hover:bg-[#f56565] rounded-xl text-lg">Button</button>
                    <p class="text-xs text-gray-500 mt-3 text-Inter">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    )
}
{/* <iframe src="" allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe> */ }