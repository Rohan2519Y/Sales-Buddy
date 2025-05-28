import Header from "../components/Header"
import MainSlider from "../components/MainSlider"
import Footer from "../components/Footer"
import BrandSlider from "../components/BrandSlider"
import ProductComponent from "../components/ProductComponent"
export default function Home() {
    return (<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
        <Header />
        <div style={{ width: '100%',height:'100%',overflowX: "hidden",background:' #191919'}}>
            <MainSlider />
        </div>
        <div>
        <ProductComponent />
        </div>
        <div >
        <BrandSlider />
        </div>
        <div>
        <Footer />
        </div>
    </div>
    )
}