import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
export default function CheckoutOrder({ status, productData, handleSubmit,userAddress }) {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const [discount, setDiscount] = useState(false)
    const [color, setColor] = useState(' #00e9bf')
    const product = useSelector((state) => state.cart)
    const keys = Object.keys(product)
    const { error, isLoading, Razorpay } = useRazorpay();

    var totalAmount = productData.reduce((p1, p2) => {
        var amt = p2.price * p2.qty
        return p1 + amt
    }, 0)

    var totalSaving = productData.reduce((p1, p2) => {
        var amt = p2.offerprice == 0 ? 0 : (p2.price - p2.offerprice) * p2.qty
        return p1 + amt
    }, 0)

    var netAmount = totalAmount - totalSaving

    const handlePayment = async () => {
        if (!status)
            handleSubmit()
        else
            await handleRazorPayment()
    }
    const handleRazorPayment = async () => {
        const options = {
            key: "rzp_test_GQ6XaPC6gMPNwH",
            amount: 50000, // Amount in paise
            currency: "INR",
            name: "Test Company",
            description: "Test Transaction",
            //order_id: "order_9A33XWu170gUtm", // Generate order_id on server
            handler: async (response) => {
                console.log(response);
                alert("Payment Successful!");
            },
            prefill: {
                name: "John Doe",
                email: "john.doe@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    return (<>
        <div style={{ width: '100%', position: md ? '' : 'sticky', top: md ? '' : 50, display: 'flex', justifyContent: md ? 'center' : '', marginBottom: md ? 30 : '' }}>
            <div style={{ width: md ? '95%' : '65%', background: ' #ffffff', minHeight: discount ? 315 : 260, marginLeft: md ? '' : 15, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 30, marginTop: matches ? 30 : '' }}>
                <div style={{ width: '90%', height: '85%', }}>
                    <div style={{ width: '100%', height: 35, fontSize: md ? '110%' : '120%', fontWeight: 700, }}>
                        Order Summary ({keys !== 0 && `${keys.length} items`})
                    </div>
                    <div style={{ width: '100%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: md ? '100%' : '' }}>
                        <div>Original Price</div><div>{'\u20B9'} {totalAmount}</div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: 45, display: 'flex', alignItems: 'center', fontSize: md ? '100%' : '' }}>Savings</div>
                            {discount ?
                                (<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', height: 45, alignItems: 'center' }}>< RemoveCircleIcon onClick={() => setDiscount(false)} style={{ fontSize: '105%', marginLeft: 5, color: ' #088466' }} /> <div style={{ fontSize: md ? '100%' : '' }}>{'\u20B9'} {totalSaving}</div></div>

                                </div>) :
                                (<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 45, alignItems: 'center' }}><AddCircleIcon onClick={() => setDiscount(true)} style={{ fontSize: '105%', marginLeft: 5, color: ' #088466' }} /> <div style={{ fontSize: md ? '100%' : '' }}>{'\u20B9'} {totalSaving}</div></div>)}
                        </div>
                        {discount ? (
                            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '100%', height: 0.5, background: ' #000000' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: 30 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: md ? '100%' : '80%' }}>Discount on MRP</div> <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: md ? '100%' : '80%' }}>{'\u20B9'} {totalSaving}</div>
                                </div>
                                <div style={{ width: '100%', height: 0.5, background: ' #000000' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: 30 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: md ? '100%' : '80%' }}>Coupon Discount</div> <div style={{ display: 'flex', justifyContent: 'center', alignitem: 'center', fontSize: md ? '100%' : '80%' }}>{'\u20B9'} 0</div>
                                </div>
                                <div style={{ width: '100%', height: 0.5, background: ' #000000' }}></div>
                            </div>) : (<></>)}
                    </div>
                    <div style={{ width: '100%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: md ? '100%' : '' }}>
                        <div>Total</div><div>{'\u20B9'} {netAmount}</div>
                    </div>
                    <div style={{ width: '100%', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div onMouseEnter={() => { setColor(' #00b594') }} onMouseLeave={() => { setColor(' #00e9bf') }} style={{ width: '100%', height: '70%', background: color, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, fontSize: '80%', fontWeight: 600, cursor: 'pointer' }} onClick={handlePayment}>Proceed To Payment</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}