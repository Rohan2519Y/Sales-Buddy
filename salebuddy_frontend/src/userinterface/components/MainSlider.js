import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { serverURL } from "../../backendservices/FetchNodeServices"
import { useState } from "react";

export default function MainSlider() {
    const [isHovered, setIsHovered] = useState(false);
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
            <div style={{ width: '3%', height: '7%', background: isHovered ? '#2d3436' : '#576574', opacity: 0.7, cursor: 'pointer', transition: 'background 0.3s ease', position: 'absolute', zIndex: 2, top: '40%', borderTopRightRadius: 15, borderBottomRightRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div style={{ display: 'flex', width: '100%' }}><ArrowBackIosNewIcon style={{ width: '100%', fontSize: '230%', color: 'white' }} /></div>
            </div>
            <Slider {...settings} style={{ width: '100%' }}>
                {showImages()}
            </Slider>
        </div>
    )
}