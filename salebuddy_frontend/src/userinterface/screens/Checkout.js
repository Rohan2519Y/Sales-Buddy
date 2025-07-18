import ShowProductCart from "../components/CartComponent/ShowProductCart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutOrder from "../components/checkout/CheckoutOrder";
import ShippingInfo from "../components/checkout/ShippingInfo";
import ProfilePage from "../components/checkout/ProfilePage";
import Address from "../components/checkout/Address";
import Delivery from "../components/checkout/Delivery";
import GST from "../components/checkout/GST";
import Contact from "../components/checkout/Contact";

export default function Checkout() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const [refresh, setRefresh] = useState('')
    var product = useSelector((state) => state.cart)
    var productData = Object.values(product)

    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #f9f9f9', fontFamily: '"Inter", sans-serif' }}>
            <div>
                <Header />
            </div>
            <div style={{ width: '100%', minHeight: 500, display: 'flex', flexDirection: md ? 'column' : '', marginTop: 25 }}>
                <div style={{ width: md ? '100%' : '65%', display: 'flex', flexDirection: 'column' }}>
                    <ShippingInfo />
                    <ProfilePage />
                    <Address />
                    <Contact />
                    <Delivery refresh={refresh} setRefresh={setRefresh} productData={productData} />
                    <GST />
                </div>
                <div style={{ width: md ? '100%' : '35%', }}>
                    <CheckoutOrder productData={productData} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}