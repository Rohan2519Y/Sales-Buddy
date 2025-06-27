import ApplyCoupon from "../components/CartComponent/ApplyCoupon";
import OrderSummary from "../components/CartComponent/OrderSummary";
import ShowProductCart from "../components/CartComponent/ShowProductCart";
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
            <div style={{ width: '100%', minHeight: 500, display: 'flex' }}>
                <div style={{ width: '65%', display: 'flex', flexDirection: 'column' }}>
                    <div><ApplyCoupon /></div>
                    <div><ShowProductCart /></div>
                </div>
                <div style={{ width: '35%' }}>
                    <OrderSummary />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}