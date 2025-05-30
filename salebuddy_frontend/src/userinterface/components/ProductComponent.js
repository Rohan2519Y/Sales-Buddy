import { serverURL } from "../../backendservices/FetchNodeServices"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function ProductComponent() {
    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: '1ee1673c-4cac-4d62-aba2-bd9d577b3b09.png', ratings: 5, price: 78000.00, offer: 70000.00
    }]

    const showProducts = () => {

        return (
            <div style={{ height: '55vh', width: '100%', background: ' #191919', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '80%', height: '100%' }}>
                    {data.map((item) => (
                        <div style={{ height: '100%', width: '20%', background: ' black', margin: 30, borderRadius: 10, display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', height: '50%', width: '99%', position: 'relative', marginBottom: '5%', background: 'red' }}>
                                <img src={`${serverURL}/images/${item.image}`} width={'90%'} style={{ marginTop: '2%', position: 'absolute' }} />
                                <FavoriteBorderIcon style={{ fontSize: '200%', color: 'white', position: 'absolute', right: '1%', top: '2%' }} />
                            </div>
                            <div style={{ width: '100%', height: '40%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '95%', color: 'white', justifyContent: 'center' }}>{item.productname}</div>
                                <div style={{ width: '95%', color: 'white', justifyContent: 'center', background: 'red' }}>

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