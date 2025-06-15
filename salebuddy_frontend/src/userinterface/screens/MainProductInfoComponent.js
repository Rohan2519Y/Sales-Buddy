import Footer from "../components/Footer";
import Header from "../components/Header";
import VerticalSlider from "../components/ProductInfo/VerticalSlider";

export default function MainProductInfoComponent(){
    return (<>
    <div style={{width:'100%',height:'100%',background:' #393939'}}>
    <div>
        <Header/>
    </div>
    <div style={{width:'50%',display:'flex',justifyContent:'flex-end'}}>
        <div style={{width:'15%',height:'80vh'}}>
        <VerticalSlider/>
        </div>
        <div style={{width:'50%',height:'80vh',background:'red'}}>

        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
    </>)
}