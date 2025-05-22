import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MainSlider() {
   
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    var data={id:1,images:'b1.webp,b2.webp,b3.webp,b4.webp,b5.webp,b6.webp,b7.webp,b8.webp'}
    return (
        <div style={{margin:3 , width: '100%', display: 'flex', alignItems: 'center',justifyContent:'center'}}>
            
        </div>
    )
}