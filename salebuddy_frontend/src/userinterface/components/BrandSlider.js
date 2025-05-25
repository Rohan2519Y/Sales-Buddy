import React from "react";
import Slider from "react-slick";
import { serverURL } from "../../backendservices/FetchNodeServices";
export default function BrandSlider() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoPlay:true
    };
    var data = { id: 1, images: 'br1.png,br2.png,br3.png,br4.png,br5.png,br6.png,br7.png,br8.png,br9.png,br10.png' }
    var images = data?.images?.split(',')
    const showImages = () => {
        return images.map((item, i) => {
            return <div style={{ width: '100%', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <div style={{background:'#393939',width: 'auto', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', margin:'7%',borderRadius:5,cursor:'pointer' }}>
                        <img src={`${serverURL}/images/${item}`} style={{ width:'90%', margin: 10 }} />
                </div>
            </div >
        })
    }
return (
    <div className="slider-container" style={{ width: "100%", height:'75%',display: 'flex', justifyContent: 'center', alignItems: 'center',background:' #191919',marginTop:10,marginBottom:0 }}>
        <Slider {...settings} style={{ width: '80%', height:'100%',background: ' #191919', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {showImages()}
        </Slider>
    </div>
);

}