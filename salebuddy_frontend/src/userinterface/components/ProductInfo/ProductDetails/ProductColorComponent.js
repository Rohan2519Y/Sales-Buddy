import { useState, useEffect } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ProductColorComponent({ color, defaultColor }) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const [pcolor, setPcolor] = useState('')
    const handleClick = (item) => {
        setPcolor(item);
    };
    useEffect(() => {
        if (defaultColor && color.includes(defaultColor)) {
            setPcolor(defaultColor);
        } else if (color.length > 0) {
            setPcolor(color[0]);
        }
    }, [defaultColor, color]);

    return (<>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 20,alignItems:matches?'center':'' }}>
            <div style={{ width:matches?'90%':md?'95%': '80%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: ' #ffffff', fontSize: '90%', marginBottom: 15 }}>Brand Color</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                    {color.map((item) => (
                        <div
                            onClick={() => handleClick(item)}
                            onMouseEnter={(e) => {
                                if (pcolor !== item) {
                                    e.currentTarget.style.border = '1px solid #49a5a2';
                                    e.currentTarget.style.background = '#49a5a2';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pcolor !== item) {
                                    e.currentTarget.style.border = '1px solid #ffffff';
                                    e.currentTarget.style.background = '';
                                }
                            }} style={{ display: 'flex', justifyContent: 'center', backgroundColor: pcolor === item ? ' #000000' : 'transparent', alignItems: 'center', border: pcolor === item ? '1px solid rgb(0, 255, 208)' : '1px solid #ffffff', marginRight: 20, marginBottom: 10, borderRadius: 5, cursor: 'pointer' }}>
                            <div style={{ color: ' #ffffff', margin: 10, fontSize: '80%' }}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
}