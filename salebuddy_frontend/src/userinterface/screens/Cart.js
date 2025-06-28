import ApplyCoupon from "../components/CartComponent/ApplyCoupon";
import OrderSummary from "../components/CartComponent/OrderSummary";
import ShowProductCart from "../components/CartComponent/ShowProductCart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Cart() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #f9f9f9', fontFamily: '"Inter", sans-serif' }}>
            <div>
                <Header />
            </div>
            <div style={{ width: '100%', height: 100, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: matches?'95%':'75%', height: '100%', display: 'flex', alignItems: 'center', fontSize: '140%', fontWeight: 700, }}>Your Cart</div>
            </div>
            <div style={{ width: '100%', minHeight: 500, display: 'flex', flexDirection: matches ? 'column' : '' }}>
                <div style={{ width: matches?'100%':'65%', display: 'flex', flexDirection: 'column' }}>
                    <div><ApplyCoupon /></div>
                    <div><ShowProductCart /></div>
                </div>
                <div style={{ width: matches?'100%':'35%' }}>
                    <OrderSummary />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>)
}