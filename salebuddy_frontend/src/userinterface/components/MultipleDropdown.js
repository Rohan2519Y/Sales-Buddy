import Dropdown from "./Dropdown";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function MultipleDropdown() {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const catagories = ['Android', 'Ios', 'Windows', 'Mac']
    const storage = ['64GB', '128GB', '256GB', '512GB', '1TB']
    const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Motorola", "Nokia", "Google", "Huawei", "Sony", "Asus", "Infinix", "Tecno", "Lenovo", "Honor", "iQOO", "Lava", "Micromax"];
    const tower = ['5G', '4G', '3G', '2G']
    const discount = ['BELOW 20%', '20% TO 40%', '40% TO 60%', '60% TO 80%', '80% AND ABOVE']
    const delivery = ['EXPRESS DELIVERY', 'HOME DELIVERY']
    return (<>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '90%', display: 'flex', overflowX: md?'auto':'',  scrollbarWidth: md?'none':'' }}>
                <div style={{ margin: '1%',cursor:'pointer' }}>
                    <Dropdown data={catagories} title='Categories' />
                </div>
                <div style={{ margin: '1%',cursor:'pointer' }}>
                    <Dropdown data={storage} title='Internal Storage' />
                </div>
                <div style={{ margin: '1%',cursor:'pointer' }}>
                    <Dropdown data={brands} title='Brands' />
                </div>
                <div style={{ margin: '1%',cursor:'pointer' }}>
                    <Dropdown data={tower} title='Cellular Tower' />
                </div>
                <div style={{ margin: '1%' ,cursor:'pointer'}}>
                    <Dropdown data={discount} title='Discount' />
                </div>
                <div style={{ margin: '1%' ,cursor:'pointer'}}>
                    <Dropdown data={delivery} title='Delivery' />
                </div>
            </div>
        </div>
    </>)
}