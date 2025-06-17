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

export default function MainProductInfoComponent() {
    const [selectedMedia, setSelectedMedia] = useState(null);

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 256GB, Titanium Silverblue)', storage: '128GB', color: 'Titanium Blue',ram:'12GB',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 3.3, price: 78000.00, offerprice: 70000.00
      }]
    var color=['Titanium Blue','Titanium Black','Titanium White','Titanium Silver','Titanium WhiteSilver'] 
    var ram=['8GB','12GB','16GB'] 
    var storage=['64GB','128GB','256GB','512GB','1TB']
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
                <div style={{ display: 'flex', width: '50%', height: '80vh',flexDirection:'column' }}>
                    <ProductInfoComponent data={data}/>
                    <ProductExchangeComponent/>
                    <ProductColorComponent color={color} defaultColor={data[0].color}/>
                    <ProductRamComponent ram={ram} defaultRam={data[0].ram}/>
                    <ProductStorageComponent storage={storage} defaultStorage={data[0].storage}/>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}