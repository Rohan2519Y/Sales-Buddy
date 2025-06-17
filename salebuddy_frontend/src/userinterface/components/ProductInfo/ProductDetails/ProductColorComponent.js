import { useState,useEffect } from "react"

export default function ProductColorComponent({ color, defaultColor }) {

    const [pcolor, setPcolor] = useState('')
    const handleClick = (item) => {
        setPcolor(item);
    };
    useEffect(() => {
    if (defaultColor && color.includes(defaultColor)) {
      setPcolor(defaultColor);
    } else if (color.length > 0) {
      setPcolor(color[0]); // fallback to first if not found
    }
  }, [defaultColor, color]);

    return (<>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <div style={{ width: '80%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: ' #ffffff', fontSize: '90%', marginBottom: 20 }}>Brand Color</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                    {color.map((item) => (
                        <div
                            onClick={() => handleClick(item)}
                            onMouseEnter={(e) => e.currentTarget.style.border = '1px solid #00e9bf'}
                            onMouseLeave={(e) => e.currentTarget.style.border = pcolor === item ? '1px solid rgb(0, 255, 208)' : '1px solid #ffffff'}
                            style={{ display: 'flex', justifyContent: 'center', backgroundColor: pcolor === item ? ' #000000' : 'transparent', alignItems: 'center', border: pcolor === item ? '1px solid rgb(0, 255, 208)' : '1px solid #ffffff', marginRight: 20, marginBottom: 10, borderRadius: 5, }}>
                            <div style={{ color: ' #ffffff', margin: 10, fontSize: '80%' }}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
}