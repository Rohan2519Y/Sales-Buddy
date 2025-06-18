import { useState, useEffect } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ProductStorageComponent({ storage, defaultStorage }) {

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
        if (defaultStorage && storage.includes(defaultStorage)) {
            setPcolor(defaultStorage);
        } else if (storage.length > 0) {
            setPcolor(storage[0]);
        }
    }, [defaultStorage, storage]);

    return (<>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <div style={{ width:md?'95%': '80%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: ' #ffffff', fontSize: '90%', marginBottom: 15 }}>Internal Storage</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                    {storage.map((item) => (
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
                            }} style={{ display: 'flex', justifyContent: 'center', backgroundColor: pcolor === item ? ' #000000' : 'transparent', alignItems: 'center', border: pcolor === item ? '1px solid rgb(0, 255, 208)' : '1px solid #ffffff', marginRight: 20, marginBottom: 10, borderRadius: 5, }}>
                            <div style={{ color: ' #ffffff', margin: 10, fontSize: '80%' }}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
}