import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductPictureComponent from "../components/ProductInfo/ProductPictureComponent";
import VerticalSlider from "../components/ProductInfo/VerticalSlider";
import { useState } from "react";

export default function MainProductInfoComponent() {
     const [selectedMedia, setSelectedMedia] = useState(null);
    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #393939' }}>
            <div>
                <Header />
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '11%', height: '80vh' }}>
                    <VerticalSlider onImageClick={setSelectedMedia} />
                </div>
                <div style={{ width: '60%', height: '80vh' }}>
                    <ProductPictureComponent media={selectedMedia} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}