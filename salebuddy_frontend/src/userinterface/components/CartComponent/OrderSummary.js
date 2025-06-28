import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'react';
export default function OrderSummary() {

    const [discount, setDiscount] = useState(false)
    const [color,setColor]=useState(' #00e9bf')

    return (<>
        <div style={{ width: '100%', display: 'flex', }}>
            <div style={{ width: '65%', minHeight: discount?315:260, marginLeft: 15, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', background: ' #ffffff' }}>
                <div style={{ width: '90%',height:'85%' }}>
                    <div style={{ width: '100%', height: 35, fontSize: '125%', fontWeight: 700, }}>
                        Order Summary ( 2 items )
                    </div>
                    <div style={{ width: '100%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>Original Price</div><div>{'\u20B9'} 147,000.00</div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: 45, display: 'flex', alignItems: 'center' }}>Savings</div>
                            {discount ?
                                (<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', height: 45, alignItems: 'center' }}>< RemoveCircleIcon onClick={() => setDiscount(false)} style={{ fontSize: '105%', marginLeft: 5, color: ' #088466' }} /> <div>{'\u20B9'} 4,020.00</div></div>

                                </div>) :
                                (<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 45, alignItems: 'center' }}><AddCircleIcon onClick={() => setDiscount(true)} style={{ fontSize: '105%', marginLeft: 5, color: ' #088466' }} /> <div>{'\u20B9'} 4,020.00</div></div>)}
                        </div>
                        {discount ? (
                            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '100%', height: 0.5, background: ' #000000' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: 30 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: '80%' }}>Discount on MRP</div> <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: '80%' }}>{'\u20B9'} 4,020.00</div>
                                </div>
                                <div style={{ width: '100%', height: 0.5, background: ' #000000' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: 30 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: '80%' }}>Coupon Discount</div> <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: '80%' }}>{'\u20B9'} 4,020.00</div>
                                </div>
                                <div style={{ width: '100%', height: 0.5, background: ' #000000' }}></div>
                            </div>) : (<></>)}
                    </div>
                    <div style={{ width: '100%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>Total</div><div>{'\u20B9'} 142,980.00</div>
                    </div>
                    <div style={{ width: '100%', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div onMouseEnter={()=>{setColor(' #00b594')}} onMouseLeave={()=>{setColor(' #00e9bf')}} style={{ width: '100%', height: '70%', background: color, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, fontSize: '80%', fontWeight: 600,cursor:'pointer' }}>Checkout</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}