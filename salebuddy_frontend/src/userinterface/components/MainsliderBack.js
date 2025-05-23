import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
export default function MainsliderBack({mainslider}){
     const [slider,setSlider]=useState('#2d3436')
     const handleBack=()=>{
        mainslider.current.slickPrev();
    }
    
    return(<div onClick={handleBack} onMouseEnter={()=>setSlider('#576574')} onMouseLeave={()=>setSlider('#2d3436')} style={{ width: '3%', height: '8%', background: slider , opacity: 0.8, cursor: 'pointer', transition: 'background 0.3s ease', position: 'absolute', zIndex: 2, top: '40%',left:'0.1%' ,borderTopRightRadius: 15, borderBottomRightRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '100%' }}><ArrowBackIosNewIcon style={{ width: '100%', fontSize: '230%', color: 'white' }} /></div>
            </div>)
}