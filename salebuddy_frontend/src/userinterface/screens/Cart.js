import ApplyCoupon from "../components/CartComponent/ApplyCoupon";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Cart() {
    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #f9f9f9', fontFamily: '"Inter", sans-serif' }}>
            <div>
                <Header />
            </div>
            <div style={{ width: '100%', height: 100, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '75%', height: '100%', display: 'flex', alignItems: 'center', fontSize: '140%', fontWeight: 700, transform: 'scaleX(1.1)', transformOrigin: 'left' }}>Your Cart</div>
            </div>
            <div style={{ width: '100%', minHeight: 500 }}>
                <div style={{width:'65%',minHeight:50,display:'flex',flexDirection:'column'}}>
                    <div><ApplyCoupon/></div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}