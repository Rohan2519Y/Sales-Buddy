import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
export default function MainsliderForward({mainslider}) {

    const [slider,setSlider]=useState('#2d3436')
    const handleForward=()=>{
        mainslider.current.slickNext();
    }

    return (<div onClick={handleForward} onMouseEnter={()=>setSlider('#576574')} onMouseLeave={()=>setSlider('#2d3436')} style={{ width: '3%', height: '8%', background: slider, opacity: 0.9, cursor: 'pointer', transition: 'background 0.3s ease', position: 'absolute', zIndex: 2, top: '40%', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', right: '0.1%' }} >
        <div style={{ display: 'flex', width: '100%' }}><ArrowForwardIosIcon style={{ width: '100%', fontSize: '230%', color: 'white' }} /></div>
    </div>)
}