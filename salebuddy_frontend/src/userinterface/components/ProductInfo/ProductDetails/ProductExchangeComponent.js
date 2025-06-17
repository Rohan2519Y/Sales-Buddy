import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useState } from 'react';
export default function ProductExchangeComponent() {
    const [selected, setSelected] = useState(false);

    return (<>
        <div style={{ width: '100%', display: 'flex', marginTop: 20 }}>
            <div style={{ width: '80%', height: 170, border: '1px solid #9A9A9A', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div onClick={() => setSelected(!selected)} style={{ width: '90%', height: 100, flexDirection:'column',display: 'flex',justifyContent:'center', color: ' #ffffff' }}>
                    <div style={{display:'flex',alignItems:'center'}}>{selected ? (
                        <RadioButtonCheckedIcon style={{ color: ' #00e9bf', marginRight: 5, fontSize: '140%' }} />
                    ) : (
                        <RadioButtonUncheckedIcon style={{ color: '#ffffff', marginRight: 5, fontSize: '140%' }} />
                    )}<b>With Exchange up </b> to ₹13,174.15 off</div>
                    <div style={{width:330,height:40,background:' #12daa8',marginLeft:30,marginTop:10,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',color:' #000000',fontSize:'90%',fontWeight:600}}>Choose Your Phone For Exchange</div>
                </div>
                <div style={{ width: '90%', height: 1, background: ' #9A9A9A' }}></div>
            </div>
        </div>
    </>)
}