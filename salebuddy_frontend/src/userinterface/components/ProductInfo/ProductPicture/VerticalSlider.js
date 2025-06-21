import Slider from "react-slick";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useRef } from "react";
import VerticalArrowUp from "./VerticalArrowUp";
import VerticalArrowDown from "./VerticalArrowDown";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function VerticalSlider({ onImageClick }) {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    color: white;
    opacity: 10;
  }

  .slick-dots li.slick-active button:before {
    color: #00e9bf;
    opacity: 1;
  }
`;
  
    const ref = useRef()
    const [selectedImage, setSelectedImage] = useState(0)
    const [bgcolor, setBgcolor] = useState(null)

    const settings = {
        dots: matches ? true : false,
        infinite: true,
        slidesToShow: matches ? 1 : 4,
        slidesToScroll: 1,
        vertical: matches ? false : true,
        verticalSwiping: matches ? false : true,
        pauseOnHover: false,
        arrows: false,
        initialSlide: selectedImage
    };
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

            return matches ?
                <div key={i} style={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', }}>
                    <div
                        style={{ width: '100%', height: 400, display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: '7%', borderRadius: 5, cursor: 'pointer', padding: 1 }}>
                        {isVideo ? (<video controls src={item} style={{ height: '100%', maxWidth: '95%' }} />
                        ) : (<img src={item} style={{ height: '100%', }} />)}
                    </div>
                </div>
                :
                <div key={i} style={{ width: '100%', height: 70, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <div
                            onMouseEnter={() => setBgcolor(i)}
                            onMouseLeave={() => setBgcolor(null)}
                            onClick={() => handleClick(item, i)}
                            style={{ background: '#191919', width: 70, height: 70, display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: '7%', borderRadius: 5, cursor: 'pointer', border: isActive ? '2px solid #00e9bf' : '1px solid #ffffff', padding: 1 }}>
                            {isVideo ? (<div style={{ width: isActive ? '95%' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <PlayCircleIcon style={{ color: '#12daa8', fontSize: '300%', width: '100%' }} />
                            </div>
                            ) : (<img src={item} style={{ width: isActive ? '95%' : '100%', }} />)}
                        </div>
                    </div>
                </div >
        })
    }

    return (
        <div style={{ position: 'relative', margin: 0, padding: 0, marginBottom: 30 }}>
            <div style={{ width: '100%', display: 'flex', }}><VerticalArrowUp VerticalArrow={ref} /></div>
            <StyledSlider  ref={ref} {...settings} style={{ width: '100%', height: '100%' }}>
                {showImages()}
            </StyledSlider>
            <div style={{ width: '100%', display: 'flex', }}><VerticalArrowDown VerticalArrow={ref} /></div>
        </div>
    );
}