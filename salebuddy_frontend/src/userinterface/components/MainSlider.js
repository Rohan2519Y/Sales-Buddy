import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {serverURL} from "../../backendservices/FetchNodeServices"

export default function MainSlider() {
   
    var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    var data={id:1,images:'b1.webp,b2.webp,b3.webp,b4.webp,b5.webp,b6.webp,b7.webp,b8.webp'}
    var images=data?.images?.split(',')
    const showImages=()=>{
        return images.map((item,i)=>{
        return<div>
            <img src={`${serverURL}/images/${item}`} style={{width:'100%'}}/>
        </div>

        })
    }
    return (
        <div >
            <Slider {...settings} style={{width:'100%'}}>
                {showImages()}
            </Slider>
        </div>
    )
}