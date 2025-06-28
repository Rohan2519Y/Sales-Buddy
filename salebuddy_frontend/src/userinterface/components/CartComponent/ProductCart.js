import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

export default function ProductCart({ item }) {

    const [color, setColor] = useState(false)
    const [rcolor, setRcolor] = useState(false)

    var discount = item.price - item.offerprice
    var percent = (discount / item.price) * 100;

    return (<>
        <div style={{ width: '100%', height: '80%', display: 'flex' }}>
            <div style={{ width: '23%', height: '100%', }}>
                <div style={{ width: '100%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={item.image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            </div>
            <div style={{ width: '77%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '75%', width: '100%', display: 'flex' }}>
                    <div style={{ width: '60%', height: '100%', }}>
                        <div style={{ width: '100%', height: 50, fontSize: '110%', fontWeight: 550 }}>{item.productname}</div>
                        <div style={{ width: '100%', height: 25 }}>
                            <Rating name="half-rating-read" defaultValue={item.ratings} precision={0.1} readOnly icon={<StarIcon sx={{ color: ' #00e9bf' }} style={{ fontSize: '70%' }} />} emptyIcon={<StarIcon sx={{ color: 'grey' }} style={{ fontSize: '70%' }} />} />
                        </div>
                        <div style={{ width: '50%', height: 35, fontSize: '90%', }}>{item.delivery}</div>
                        <div style={{ width: '100%', height: 60, display: 'flex', alignItems: 'center' }}>
                            <div onMouseEnter={() => { setColor(true) }} onMouseLeave={() => { setColor(false) }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid ', borderColor: color ? ' #00e9bf' : ' #000000', borderRadius: 10, boxSizing: 'border-box', cursor: 'pointer', marginRight: 15 }}><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 30, marginLeft: 30, marginTop: 7, marginBottom: 7, fontSize: '90%', fontWeight: 600 }}>Move To Whislist</div></div>
                            <div onMouseEnter={() => { setRcolor(true) }} onMouseLeave={() => { setRcolor(false) }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid ', borderColor: rcolor ? ' #00e9bf' : ' #000000', borderRadius: 10, boxSizing: 'border-box', cursor: 'pointer' }}><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 30, marginLeft: 30, marginTop: 7, marginBottom: 7, fontSize: '90%', fontWeight: 600 }}>Remove</div></div>
                        </div>
                    </div>
                    <div style={{ width: '40%', height: '100%', display: 'flex', }}>
                        <div style={{ width: '90%', height: '100%' }}>
                            <div style={{ width: '100%', height: 25, fontSize: '140%', fontWeight: 700, display: 'flex', justifyContent: 'flex-end' }}>{'\u20B9'}{item.offerprice}</div>
                            <div style={{ width: '100%', height: 30, fontSize: '90%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>(Incl. all Taxes)</div>
                            <div style={{ width: '50%', height: 0.5, background: ' #000000', justifySelf: 'flex-end', marginTop: 7, marginBottom: 10 }}></div>
                            <div style={{ width: '100%', height: 15, fontSize: '85%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', }}><s>MRP {'\u20B9'}{item.price.toFixed(2)}</s></div>
                            <div style={{ width: '100%', height: 15, fontSize: '75%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', color: ' #9A9A9A' }}>{'\u20B9'}{discount}</div>
                            <div style={{ width: '50%', height: 0.5, background: ' #000000', justifySelf: 'flex-end', marginTop: 10, marginBottom: 10 }}></div>
                            <div style={{ width: '100%', height: 25, fontSize: '100%', fontWeight: 700, display: 'flex', justifyContent: 'flex-end' }}>{'\u20B9'}6457/mo*</div>
                            <div style={{ width: '100%', height: 15, fontSize: '80%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', color: ' #088466' }}><u>EMI Options</u></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', height: 0.5, background: ' #000000', justifySelf: 'flex-end', marginTop: 10, marginBottom: 10 }}></div>
                <div style={{ height: '25%', width: '60%', display: 'flex',  alignItems: 'center' }}>
                    <DoneIcon style={{display:'flex',alignSelf:'flex-start',fontSize:'140%',color:' #00e9bf',marginRight:10}}/><div style={{fontSize:'85%'}}>Buy & Get Rs.2010 off (Discount auto applied in cart) Offer Applied</div>
                </div>
            </div>
        </div>
    </>)
}