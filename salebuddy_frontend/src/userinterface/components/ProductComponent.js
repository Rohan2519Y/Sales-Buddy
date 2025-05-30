import { serverURL } from "../../backendservices/FetchNodeServices"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function ProductComponent() {
    var data = [{
        productdetailid: 1, productname: 'Apple iPhone 16', variant: '128 GB', color: 'Teal',
        image: '1ee1673c-4cac-4d62-aba2-bd9d577b3b09.png', ratings: 5, price: 78000.00, offer: 70000.00
    }]

    const showProducts = () => {

        return (
            <div style={{ height: '50vh', width: '100%', background: ' #191919', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '80%', height: '100%' }}>
                       { data.map((item) => (
                        <div style={{ height: '85%', width: '20%', background: ' black', margin: 30, borderRadius: 10, display: "flex", justifyContent: 'center',flexDirection:'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', height: '70%', width: '99%', position: 'relative' }}>
                                <img src={`${serverURL}/images/${item.image}`} style={{ width: '90%', height: '100%', marginTop: '7%' }} />
                                <FavoriteBorderIcon style={{ fontSize: '200%', color: 'white', position: 'absolute', right: '1%', top: '2%' }} />
                            </div>
                            <div style={{width:'90%',height:'30%',}}>

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