import Slider from "react-slick";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useRef } from "react";
import VerticalArrowUp from "./VerticalArrowUp";
import VerticalArrowDown from "./VerticalArrowDown";
import { useState, useEffect } from "react";

export default function VerticalSlider({ onImageClick }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: false,
        
    };
    const ref = useRef()
    const [selectedImage, setSelectedImage] = useState(0)
    const [bgcolor, setBgcolor] = useState(null)

    var data = {
        id: 1,
        images: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_0_u3lpmc_tngxpo.webp,https://res.cloudinary.com/dio6iadsq/video/upload/v1749891022/312580_pbzvd4_dbjpej.webm,https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_1_l0zqyg_peivwc.webp,https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_2_eul3kh_gq7cqw.webp,https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_5_gmurvh_va7cpg.webp,https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_6_tmvat3_hh87nc.webp,https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_7_o5mbmj_d0y18u.webp,https://res.cloudinary.com/dio6iadsq/image/upload/v1749891014/312580_8_pxkcdr_wkjny9.webp'
    }

    var images = data?.images?.split(',')

    useEffect(() => {
        if (images.length && onImageClick) {
            onImageClick(images[0]);
        }
    }, [onImageClick]);

    const handleClick = (item, i) => {
        setSelectedImage(i);
        onImageClick(item);
    };

    const showImages = () => {
        return images.map((item, i) => {
            const isVideo = item.includes('.webm') || item.includes('.mp4');
            const isActive = selectedImage === i || bgcolor === i;

            return <div key={i} style={{ width: '100%', height: 70, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <div
                    onMouseEnter={() => setBgcolor(i)}
                    onMouseLeave={() => setBgcolor(null)}
                    onClick={() => handleClick(item, i)}
                    style={{ background: '#191919', width: 70, height: 70, display: "flex", justifyContent: 'center', alignItems: 'center', margin: '7%', borderRadius: 5, cursor: 'pointer', border: isActive ? '2px solid #00e9bf' : '' }}>
                    {isVideo ? (<div style={{ width: isActive ? '95%' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <PlayCircleIcon style={{ color: '#12daa8', fontSize: '300%', width: '100%' }} />
                    </div>
                    ) : (<img src={item} style={{ width: isActive ? '95%' : '100%', }} />)}
                </div>
            </div >
        })
    }

    return (
        <div style={{ position: 'relative', margin: 0, padding: 0 }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><VerticalArrowUp VerticalArrow={ref} /></div>
            <Slider ref={ref} {...settings} style={{ width: '100%', height: '100%' }}>
                {showImages()}
            </Slider>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><VerticalArrowDown VerticalArrow={ref} /></div>
        </div>
    );
}