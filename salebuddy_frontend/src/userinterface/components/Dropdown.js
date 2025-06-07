import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function Dropdown() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = useState(false)
    const service = ['Android', 'Ios', 'Windows', 'Mac']
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 140, height: 35, background: '#373737', borderRadius: 10 }}>
                <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: ' #fff' }}>
                    Categories <KeyboardArrowDownIcon style={{ fontSize: '100%' }} />
                </button>

            </div>
            {open &&
                service.map((item) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', height: 40, background: '#373737', borderRadius: 10, color: '#fff', fontSize: '100%' }}>
                            <div style={{ width: '30%' }}><Checkbox {...label} style={{ color: ' #12daa8' }} /></div>
                            <div style={{ width: '70%' }}>{item}</div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
