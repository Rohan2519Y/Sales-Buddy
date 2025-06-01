import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { serverURL } from "../../backendservices/FetchNodeServices"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function ProductComponent() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const [heart, setHeart] = useState(null)

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748777796/15_pro_max_p1iwhz.jpg', ratings: 3.3, price: 78000.00, offer: 70000.00
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778280/sam_z6_v6ubdl.png', ratings: 3.3, price: 78000.00, offer: 70000.00
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 3.3, price: 78000.00, offer: 70000.00
    }]

    const showProducts = () => {
        return (
            <div style={{ height: '52vh', width: '100%', background: ' #191919', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '80%', height: '100%' }}>
                    {data.map((item,i) => (
                        <div style={{ height: matches ? 300 : 350, width: matches ? 170 : 220, background: ' black', margin: 30, borderRadius: 10, display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', height: '60%', width: '90%', position: 'relative', alignItems: 'center' }}>
                                <img src={item.image} width={'75%'} style={{ position: 'absolute' }} />
                                <FavoriteBorderIcon onMouseEnter={() => setHeart(i) } onMouseLeave={() =>setHeart(null) } style={{ fontSize: matches ? '150%' : '200%', color: heart == i ? ' #00e9bf' : 'white', position: 'absolute', right: '-4%', top: '-4%', cursor: 'pointer' }} />
                            </div>
                            <div style={{ width: '95%', height: '30%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: '5%' }}>
                                <div style={{ width: '90%', color: 'white', justifyContent: 'center', marginBottom: '2%' }}>{matches ? (item.productname.length > 33 ? item.productname.substring(0, 33) + '...' : item.productname) : (item.productname.length > 40 ? item.productname.substring(0, 40) + '...' : item.productname)}</div>
                                <div style={{ width: '90%', height: '40%', color: 'white', display: 'flex', alignItems: 'center' }}>
                                    <div style={{ fontSize: matches ? '125%' : "140%", fontWeight: 600 }}>{'\u20B9'}{item.price.toFixed(2)}</div>
                                    <div style={{ width: '100%', display: 'flex', height: '70%', justifyContent: 'center' }}><div style={{ width: '90%', fontSize: matches ? '80%' : "100%", fontWeight: 400, color: 'grey' }}><s>{'\u20B9'}{item.offer.toFixed(2)}</s></div></div>
                                </div>
                                <div style={{ display: 'flex', width: '90%' }}>
                                    <Rating name="half-rating-read" defaultValue={item.ratings} precision={0.1} readOnly icon={<StarIcon sx={{ color: '#00e9bf' }} />} emptyIcon={<StarIcon sx={{ color: 'grey' }} />} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (<div>
        {showProducts()}
    </div>
    )
}