import React from 'react'
import Kitchen02 from '../assets/kitchen02.jpg'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import slider1 from '../assets/slider1.jpg'

import '../App.css'
export default function GallerySlider() {
    return (
        <div class="flex gridAnimated backdrop-blur-md bg-blur shadow-inner gap-4 py-16 min-h-[600px]">
            <div class="grid gap-4  row1">
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>
                <div>
                    <img class="gallery_image rounded-lg" src={slider1} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg2} alt="" />
                </div>
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>

            </div>
            <div class="grid gap-4  row2">
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>
                <div>
                    <img class="gallery_image rounded-lg" src={slider1} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg2} alt="" />
                </div>
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>

            </div>
            <div class="grid gap-4  row3">
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>
                <div>
                    <img class="gallery_image rounded-lg" src={slider1} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg2} alt="" />
                </div>
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>

            </div>
            <div class="grid gap-4  row4">
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>
                <div>
                    <img class="gallery_image rounded-lg" src={slider1} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg2} alt="" />
                </div>
                <div>
                    <img class=" gallery_image rounded-lg" src={Kitchen02} alt="" />
                </div>
                <div>
                    <img class="  gallery_image rounded-lg" src={bg1} alt="" />
                </div>

            </div>
        </div>
    )
}
