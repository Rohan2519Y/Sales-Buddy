import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Dropdown({ data, title }) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1250px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = useState(false)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 140, height: 35, background: '#373737', borderRadius: 10, margin: '0.2%' }}>
                <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 130, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: ' #fff' }}>
                    {title} <KeyboardArrowDownIcon style={{ fontSize: '100%' }} />
                </button>
            </div>
            {open &&
                data.map((item) => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 170, }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                            <div style={{ width: '30%' }}><Checkbox {...label} style={{ color: ' #12daa8' }} /></div>
                            <div style={{ width: '70%' }}>{item}</div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
