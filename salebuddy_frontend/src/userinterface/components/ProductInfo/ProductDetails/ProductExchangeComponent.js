import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useState } from 'react';
export default function ProductExchangeComponent() {
    const [selected, setSelected] = useState('with');

    return (<>
        <div style={{ width: '100%', display: 'flex', marginTop: 20 }}>
            <div style={{ width: '75%', border: '1px solid #9A9A9A', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div onClick={() => setSelected('with')} style={{ width: '90%', minHeight: 60, flexDirection: 'column', display: 'flex', justifyContent: 'center', color: ' #ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: 30,marginTop:5 }}>{selected === 'with' ? (
                        <RadioButtonCheckedIcon style={{ color: ' #00e9bf', marginRight: 10, fontSize: '140%',cursor:'pointer' }} />
                    ) : (
                        <RadioButtonUncheckedIcon style={{ color: '#ffffff', marginRight: 10, fontSize: '140%',cursor:'pointer' }} />
                    )}<div style={{ display: 'flex', alignItems: 'center', fontSize: '85%' }}><b style={{ marginRight: 3 }}>With Exchange up </b> to ₹13,174.15 off</div>
                    </div>
                    {selected === 'with' && (<div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30, marginTop: 10 }}>
                        <div style={{ width: 330, height: 40, background: ' #12daa8', borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 5, color: ' #000000', fontSize: '90%', fontWeight: 700 }}>
                            Choose Your Phone For Exchange
                        </div>
                        <div style={{ color: ' #12daa8', marginTop: 4, fontSize: '90%', marginBottom: 7 }}><u>How does exchange work?</u></div>
                    </div>)}
                </div>
                <div style={{ width: '90%', height: 1, background: ' #9A9A9A' }}></div>
                <div onClick={() => setSelected('without')} style={{ width: '90%', height: 60, flexDirection: 'column', display: 'flex', justifyContent: 'center', color: ' #ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>{selected === 'without' ? (
                        <RadioButtonCheckedIcon style={{ color: ' #00e9bf', marginRight: 10, fontSize: '140%',cursor:'pointer' }} />
                    ) : (
                        <RadioButtonUncheckedIcon style={{ color: '#ffffff', marginRight: 10, fontSize: '140%' ,cursor:'pointer'}} />
                    )}<div style={{ display: 'flex', alignItems: 'center', fontSize: '85%' }}><b>Without Exchange</b></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}