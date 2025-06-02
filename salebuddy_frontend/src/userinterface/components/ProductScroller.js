import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../backendservices/FetchNodeServices"
import MainsliderForward from "./MainsliderForward";
import MainsliderBack from "./MainsliderBack";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRef } from "react";
import ProductComponent from "./ProductComponent";

export default function ProductScroller({ data }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');
    const ref = useRef()

    var settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    };

    

    return (
        <div style={{ position: 'relative', margin: 0, padding: 0 }}>
            <MainsliderForward mainslider={ref} />
            <Slider ref={ref} {...settings}>
                {Array.isArray(data) && data.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#191919', height: landscape ? '90vh' : smatches ? '40vh' : '52vh' }}>
                        <div style={{ display: 'flex', alignItems: 'center', width: smatches ? '90%' : '80%', height: '100%', justifyContent: 'center' }}>
                        <ProductComponent item={item} i={i} />
                         </div>
                    </div>
                ))}
            </Slider>

            <MainsliderBack mainslider={ref} />
        </div>
    )
}