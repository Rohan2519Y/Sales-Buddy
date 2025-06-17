import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductInfoComponent from "../components/ProductInfo/ProductDetails/ProductInfoComponent";
import ProductPictureComponent from "../components/ProductInfo/ProductPicture/ProductPictureComponent";
import VerticalSlider from "../components/ProductInfo/ProductPicture/VerticalSlider";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MainProductInfoComponent() {
    const [selectedMedia, setSelectedMedia] = useState(null);

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 3.3, price: 78000.00, offer: 70000.00
      }]
    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #191919',fontFamily: '"Inter", sans-serif' }}>
            <div>
                <Header />
            </div>
            <div style={{ width: '100%', height: 40, color: ' #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '70%', fontSize: '100%',fontWeight:400 }}>Phones & Wearables <ArrowForwardIosIcon style={{fontSize:'80%'}}/> Mobile Phones <ArrowForwardIosIcon style={{fontSize:'80%'}}/> Android Phones</div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ width: '15%', height: '100%' }}>
                        <VerticalSlider onImageClick={setSelectedMedia} />
                    </div>
                    <div style={{ width: '60%', }}>
                        <ProductPictureComponent media={selectedMedia} />
                    </div>
                </div>
                <div style={{ display: 'flex', width: '50%', justifyContent: 'center', background: 'red', height: '80vh' }}>
                    <ProductInfoComponent data={data}/>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}