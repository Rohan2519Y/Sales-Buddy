import Footer from "../components/Footer";
import Header from "../components/Header";
import VerticalSlider from "../components/ProductInfo/VerticalSlider";

export default function MainProductInfoComponent(){
    return (<>
    <div style={{width:'100%',height:'100%',background:' #393939'}}>
    <div>
        <Header/>
    </div>
    <div>
        <VerticalSlider/>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
    </>)
}