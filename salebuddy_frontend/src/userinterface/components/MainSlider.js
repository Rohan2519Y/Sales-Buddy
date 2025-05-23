import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../backendservices/FetchNodeServices"
import MainsliderForward from "./MainsliderForward";
import MainsliderBack from "./MainsliderBack";
import { useState,useRef } from "react";

export default function MainSlider() {
    const ref=useRef()
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    var data = { id: 1, images: 'b1.webp,b2.webp,b3.webp,b4.webp,b5.webp,b6.webp,b7.webp,b8.webp' }
    var images = data?.images?.split(',')
    const showImages = () => {
        return images.map((item, i) => {
            return <div>
                <img src={`${serverURL}/images/${item}`} style={{ width: '100%' }} />
            </div>

        })
    }
    return (
        <div style={{ position: 'relative' }}>
            <MainsliderForward mainslider={ref}/> 
            <Slider ref={ref} {...settings} style={{ width: '100%' }}>
                {showImages()}
            </Slider>
            <MainsliderBack mainslider={ref}/> 
        </div>
    )
}