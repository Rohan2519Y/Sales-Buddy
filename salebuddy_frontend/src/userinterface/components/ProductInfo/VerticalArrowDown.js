import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function VerticalArrowDown({ VerticalArrow }) {
    const [slider, setSlider] = useState('#576574')
    const handleBack = () => {
        VerticalArrow?.current?.slickNext();
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (<>
        {matches ? <></> : <div onClick={handleBack} style={{ width: 'auto', height: '5%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', right: '0.1%' }}>
            <div style={{ display: 'flex', width: '100%' }}><KeyboardArrowDownIcon style={{ width: '100%', fontSize: '300%', color: 'white' }} /></div>
        </div>}
    </>)
}