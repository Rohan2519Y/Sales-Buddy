import { useState } from "react"
import { useNavigate } from "react-router"

export default function CheckOutHeader() {

    const navigate = useNavigate()
    const[color,setColor]=useState('#ffffff')

    return (<>
        <div style={{ width: '100%', height: 80, background: '#000000', display: 'flex', alignItems: 'center' }}>
            <div onClick={()=>navigate('/')} style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '200%', color: '#ffffff', fontWeight: 500,cursor:'pointer' }}>SalesBuddy</div>
            <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', }}>
                <div onMouseEnter={()=>{setColor('#49a5a2')}} onMouseLeave={()=>{setColor('#ffffff')}} onClick={() => { navigate('/cart') }} style={{ background:'#191919',width: '15%', height: '60%', borderRight: '2px solid #12daa8', borderTopLeftRadius: 7, borderBottomLeftRadius: 7, borderLeft: '2px solid #545454', borderTop: '2px solid #545454', borderBottom: '2px solid #545454', color: color, display: 'flex', justifyContent: 'center', alignItems: 'center',cursor:'pointer' }}>Cart</div>
                <div style={{ background:'#191919',width: '15%', height: '60%', borderTop: '2px solid #12daa8', borderBottom: '2px solid #12daa8', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Shipping</div>
                <div style={{ background:'#191919',width: '15%', height: '60%', borderLeft: '2px solid #12daa8', borderTop: '2px solid #545454', borderBottom: '2px solid #545454', borderRight: '2px solid #545454', borderTopRightRadius: 7, borderBottomRightRadius: 7, color: '#545454', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Payment</div>
            </div>
        </div>
    </>)
}