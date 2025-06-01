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
    const smallmatches = useMediaQuery(theme.breakpoints.down('sm'));
    const [heart, setHeart] = useState('white')

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: '1f2f5fd2-9076-48c7-8075-14642a9d2989.png', ratings: 3.3, price: 78000.00, offer: 70000.00
    }]

    const showProducts = () => {
        return (
            <div style={{ height: '52vh', width: '100%', background: ' #191919', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '80%', height: '100%' }}>
                    {data.map((item) => (
                        <div style={{ height: matches ? 300 : 350, width: matches ? 170 : 220, background: ' black', margin: 30, borderRadius: 10, display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', height: '60%', width: '99%', position: 'relative' }}>
                                <img src={`${serverURL}/images/${item.image}`} width={'90%'} style={{ marginTop: '2%', position: 'absolute' }} />
                                <FavoriteBorderIcon onMouseEnter={() => { setHeart(' #00e9bf') }} onMouseLeave={() => { setHeart('white') }} style={{ fontSize: matches ? '150%' : '200%', color: heart, position: 'absolute', right: '1%', cursor: 'pointer' }} />
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