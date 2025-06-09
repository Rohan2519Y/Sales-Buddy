import React from "react";
import Slider from "react-slick";
import { serverURL } from "../../backendservices/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ProductScrollerBack from "./ProductScrollerBack";
import ProductScrollerFront from "./ProductScrollerFront";
import { useRef } from "react";
export default function BrandSlider() {
    const theme = useTheme();
    const ref = useRef()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery('(max-width:700px)');
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: matches ? 3 : 5,
        slidesToScroll: matches ? 3 : 4,
        autoPlay:false,
        arrows: false 
    };
    var data = { id: 1, images: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748783972/br3-Photoroom-Photoroom_1_xypxmd.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756692/br9_jqdv1x.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756691/br8_xakszg.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756690/br7_ygtleh.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756689/br6_dxfbso.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756689/br5_uf0l7o.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756687/br4_spki7i.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756685/br2_ly7arr.png,https://res.cloudinary.com/dio6iadsq/image/upload/v1748756684/br10_qu1s8a.png' }
    var images = data?.images?.split(',')
    const showImages = () => {
        return images.map((item, i) => {
            return <div style={{ width: '100%', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: '#393939', width: 'auto', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', margin: '7%', borderRadius: 5, cursor: 'pointer' }}>
                    <img src={item} style={{ width: '90%', margin: 10 }} />
                </div>
            </div >
        })
    }
    return (
        <div className="slider-container" style={{ width: "100%", height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: ' #191919', marginBottom: 0 }}>
            {sm?<></>:<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}><ProductScrollerBack productScroller={ref} /></div>}
            <Slider ref={ref} {...settings} style={{ width: matches ? '90%' : '80%', height: '100%', background: ' #191919', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {showImages()}
            </Slider>
            {sm?<></>:<div style={{ width: '100%', display: 'flex'}}><ProductScrollerFront productScroller={ref} /></div>}
        </div>
    );

}