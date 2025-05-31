import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { serverURL } from "../../backendservices/FetchNodeServices"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function ProductComponent() {
    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: '1ee1673c-4cac-4d62-aba2-bd9d577b3b09.png', ratings: 3.5, price: 78000.00, offer: 70000.00
    }]

    const showProducts = () => {

        return (
            <div style={{ height: '50vh', width: '100%', background: ' #191919', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '80%', height: '100%' }}>
                    {data.map((item) => (
                        <div style={{ height: 370, width: 220, background: ' black', margin: 30, borderRadius: 10, display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', height: '60%', width: '99%', position: 'relative' }}>
                                <img src={`${serverURL}/images/${item.image}`} width={'90%'} style={{ marginTop: '2%', position: 'absolute' }} />
                                <FavoriteBorderIcon style={{ fontSize: '200%', color: 'white', position: 'absolute', right: '1%', top: '2%' }} />
                            </div>
                            <div style={{ width: '100%', height: '30%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: '5%', background: 'red' }}>
                                <div style={{ width: '90%', color: 'white', justifyContent: 'center', marginBottom: '2%' }}>{item.productname}</div>
                                <div style={{ width: '90%', height: '50%', color: 'white', justifyContent: 'center', display: 'flex' }}>
                                    <div style={{ fontSize: 25, fontWeight: 600 }}>{'\u20B9'}{item.price.toFixed(2)}</div> <div style={{ fontSize: 20, fontWeight: 400, color: 'grey' }}><s>{'\u20B9'}{item.offer.toFixed(2)}</s></div>
                                </div>
                                <div>
                                    <Rating name="read-only" value={item.ratings} readOnly style={{ color: 'green', margin: "2%" }} />
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