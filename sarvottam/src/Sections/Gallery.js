import React from 'react'
import '../App.css'
import GallerySlider from '../Component/GallerySlider'
export default function Gallery() {

    return (
        <section class="text-gray-600 body-font px-24 mt-5 ">
            <h2 className='text-Poppins text-4xl font-[800] text-secondary text-center'>Gallery</h2>
            <div className='relative mt-[50px] section'>
                <GallerySlider />
            </div>

        </section>
    )
}
