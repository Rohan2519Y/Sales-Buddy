import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
export default function OrderSummary() {
    return (<>
        <div style={{ width: '100%', display: 'flex', }}>
            <div style={{ width: '65%', height: 250, marginLeft: 15, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center',background:' #ffffff' }}>
                <div style={{ width: '90%', height: '85%' }}>
                    <div style={{ width: '100%', height: '15%', fontSize: '125%', fontWeight: 700, }}>
                        Order Summary ( 2 items )
                    </div>
                    <div style={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>Original Price</div><div>{'\u20B9'} 147,000.00</div>
                    </div>
                    <div style={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>Savings <AddCircleIcon style={{ fontSize: '105%', marginLeft: 5, color: ' #088466' }} /> </div><div>{'\u20B9'} 4,020.00</div>
                    </div>
                    <div style={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>Total</div><div>{'\u20B9'} 142,980.00</div>
                    </div>
                    <div style={{ width: '100%', height: '25%', display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <div style={{width:'100%',height:'70%',background:' #12daa8',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:10,fontSize:'80%',fontWeight:600}}>Checkout</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}