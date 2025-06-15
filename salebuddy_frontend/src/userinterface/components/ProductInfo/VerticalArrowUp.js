import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function VerticalArrowUp({VerticalArrow}) {

    const [slider,setSlider]=useState(' #576574')
    const handleForward=()=>{
        VerticalArrow?.current?.slickPrev();
    }
     const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (<>
    {matches?<></>:<div onClick={handleForward} style={{ width: 'auto', height: '9%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', top:'1%', }} >
        <div style={{ display: 'flex', width: '100%' }}><KeyboardArrowUpIcon style={{ width: '100%', fontSize: '350%', color: 'white' }} /></div>
    </div>}</>)
}