import ProductCart from "./ProductCart"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ShowProductCart() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');


    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 256GB, Titanium Silverblue)', storage: '256GB', color: 'Titanium Blue', ram: '12GB',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 4, price: 78000.00,
        delivery: 'Standard Delivery by 1 July 2025 | Free', offerapply: 'Buy & Get Rs.2010 off (Discount auto applied in cart) Offer Applied'
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy Z6 (12GB RAM, 128GB, Titanium Silverblack)', storage: '128GB', color: 'Titanium Blue', ram: '12GB',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778280/sam_z6_v6ubdl.png', ratings: 3.6, price: 88000.00, offerprice: 80000.00,
        delivery: 'Standard Delivery by 1 July 2025 | Free'
    }]

    return (<>
        <div style={{ display: 'flex', width: '100%', alignItems: matches?'center':'flex-end', flexDirection: 'column' }}>
            {data.map((item) => (
                <div style={{ width:md?'95%': '80%', height: 280, background: ' #ffffff', marginBottom: 30, display: 'flex', alignItems: 'center' }}>
                    <ProductCart item={item} />
                </div>
            ))}
        </div>
    </>)
}