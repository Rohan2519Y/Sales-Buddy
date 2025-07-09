import { Button, Dialog } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from "react";

export default function OTPComponent({ open = true, onClose = () => { } }) {

    const [check, setCheck] = useState(false)
    const [buttonColor, setButtonColor] = useState('#12daa8')

    return (<>
        <style>
            {`
          .placeholdercolor::placeholder {
            font-size: 100%;
            color: #aaa;
          }
        `}
        </style>
        <Dialog
            open={open}
            PaperProps={{ sx: { width: '565px', height: '426px', background: ' #191919', borderRadius: 2, } }}>
            <CloseIcon onClick={onClose} style={{ color: 'white', right: 6, position: 'absolute', top: 3, }} />
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '70%', height: '80%',display:'flex',alignItems:'center',flexDirection:'column' }}>
                    <div style={{ width: '100%', height: '10%', fontSize: '120%', fontWeight: 700, color: ' #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>VERIFY WITH OTP</div>
                    <div style={{ width: '100%', height: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '100%', color: ' #ffffff' }}>Sent to 9274819473</div>
                    <div style={{ width: '80%', height: '25%', display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ width: '17%', height: '65%', border: '1px solid #ffffff', borderRadius: 4 }}></div>
                        <div style={{ width: '17%', height: '65%', border: '1px solid #ffffff', borderRadius: 4 }}></div>
                        <div style={{ width: '17%', height: '65%', border: '1px solid #ffffff', borderRadius: 4 }}></div>
                        <div style={{ width: '17%', height: '65%', border: '1px solid #ffffff', borderRadius: 4 }}></div>
                    </div>
                    <div style={{width:'100%',height:'20%'}}></div>
                </div>
            </div>
        </Dialog>
    </>);
}