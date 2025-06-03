import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../backendservices/FetchNodeServices"
import ProductScrollerFront from './ProductScrollerFront'
import ProductScrollerBack from "./ProductScrollerBack";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRef } from "react";
import ProductComponent from "./ProductComponent";

export default function ProductScroller({ data, title }) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');
    const ref = useRef()

    var settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: sm ? 2 : md ? 3 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false
    };

    return (<>
        <div style={{ width: '100%', color: 'white', height: '10vh', display: 'flex', alignItems: 'center', fontSize: matches ? '170%' : '200%', justifyContent: 'center' }}>
            <div style={{ width: matches?'75%':'78%' }}> {title}</div>
        </div>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '9%', display: 'flex', justifyContent: 'flex-end' }}><ProductScrollerBack productScroller={ref} /></div>
            <div style={{ width: smatches?'90%':'82%', margin: '0 auto', padding: 0, position: 'relative' }}>
                <Slider ref={ref} {...settings}>
                    {data.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: landscape ? '90vh' : smatches ? '40vh' : '52vh', width: '100%', }}  >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                    <ProductComponent item={item} i={i} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div style={{ width: '9%', display: 'flex' }}><ProductScrollerFront productScroller={ref} /></div>
        </div>
    </>);
}