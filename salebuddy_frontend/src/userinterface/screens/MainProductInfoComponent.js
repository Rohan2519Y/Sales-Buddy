import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductInfoComponent from "../components/ProductInfo/ProductDetails/ProductInfoComponent";
import ProductPictureComponent from "../components/ProductInfo/ProductPicture/ProductPictureComponent";
import VerticalSlider from "../components/ProductInfo/ProductPicture/VerticalSlider";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductColorComponent from "../components/ProductInfo/ProductDetails/ProductColorComponent";
import ProductRamComponent from "../components/ProductInfo/ProductDetails/ProductRamCompontent";
import ProductStorageComponent from "../components/ProductInfo/ProductDetails/ProductStorage";
import ProductExchangeComponent from "../components/ProductInfo/ProductDetails/ProductExchangeComponent";
import KeyfeatureComponent from "../components/ProductInfo/ProductDetails/KeyfeatureComponent";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function MainProductInfoComponent() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const [selectedMedia, setSelectedMedia] = useState(null);

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 256GB, Titanium Silverblue)', storage: '128GB', color: 'Titanium Blue', ram: '12GB',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 3.3, price: 78000.00, offerprice: 70000.00,
        display: '6.68 inches (16.96 cm), LCD, 120 Hz Refresh Rate',
        memory: '6GB RAM, 128GB ROM, Memory Card (Hybrid) upto 1TB',
        processor: 'MediaTek Dimensity 6300, Octa Core, 2.4 GHz',
        camera: '50 MP + 0.08 MP Dual Rear & 8 MP Front Camera',
        battery: '5500 mAh with 44W FlashCharge',
        usp: 'IP64 Dust & Water Resistance, AI-Enhanced Stunning Photos, Shock-Absorbing Corners',
    }]
    var color = ['Titanium Blue', 'Titanium Black', 'Titanium White', 'Titanium Silver', 'Titanium WhiteSilver']
    var ram = ['8GB', '12GB', '16GB']
    var storage = ['64GB', '128GB', '256GB', '512GB', '1TB']
    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #191919', fontFamily: '"Inter", sans-serif' }}>
            <div>
                <Header />
            </div>
            <div style={{ width: '100%', height: 40, color: ' #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '70%', fontSize: '100%', fontWeight: 400 }}>Phones & Wearables <ArrowForwardIosIcon style={{ fontSize: '80%' }} /> Mobile Phones <ArrowForwardIosIcon style={{ fontSize: '80%' }} /> Android Phones</div>
            </div>
            <div style={{ display: 'flex', flexDirection: matches ? 'column' : '' }}>
                <div style={{ width: matches ? '100%' : '50%', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ width: '17%', height: '100%' }}>
                        <VerticalSlider onImageClick={setSelectedMedia} />
                    </div>
                    {matches ? <></> : <div style={{ width: md ? '80%' : '60%', }}>
                        <ProductPictureComponent media={selectedMedia} />
                    </div>}
                </div>
                <div style={{ display: 'flex', width: matches ? '100%' : '50%', height: '100vh', flexDirection: 'column', overflowY: matches ? '' : 'auto', scrollbarWidth: 'none' }}>
                    <ProductInfoComponent data={data} />
                    <ProductExchangeComponent />
                    <ProductColorComponent color={color} defaultColor={data[0].color} />
                    <ProductRamComponent ram={ram} defaultRam={data[0].ram} />
                    <ProductStorageComponent storage={storage} defaultStorage={data[0].storage} />
                    <KeyfeatureComponent data={data[0]} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}