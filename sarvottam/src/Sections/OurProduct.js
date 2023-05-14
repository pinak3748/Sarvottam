import React, { useState, useEffect } from 'react'
import Kitchen01 from '../assets/kitchen01.jpg'
import Kitchen02 from '../assets/kitchen02.jpg'
import florring01 from '../assets/florring01.jpg'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
export default function OurProduct() {

    return (
        <>
            <div id="scrollable-component" className={`flex  py-20 bg-green-100`}>
                <div className={`w-1/2 py-32 px-20`}>
                    <div className='space-y-4 '>
                        <h2 className="text-2xl font-bold">{"data[currentImageIndex].title"}</h2>
                        <p>{"data[currentImageIndex].description"}</p>
                        <p>{"data[currentImageIndex].description"}</p>
                        <p>{"data[currentImageIndex].description"}</p>
                    </div>

                </div>
                <div className="w-1/2">
                    <Parallax className="" y={[-20, 20]}>
                        <img
                            src={Kitchen02}
                            alt={"data[currentImageIndex].title"}
                            className="object-cover rounded-full mx-auto mt-16 h-[400px] w-[400px]"
                        />
                    </Parallax>
                </div>
            </div>
        </>
    )
}
