import { Button, Dialog } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState, useEffect } from "react";
import OtpInput from 'react-otp-input';

export default function OTPComponent({ open = true, onClose = () => { } }) {

    const [seconds, setSeconds] = useState(30);
    const [otp, setOtp] = useState('');

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [seconds]);


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
                <div style={{ width: '70%', height: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '10%', fontSize: '120%', fontWeight: 700, color: ' #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>VERIFY WITH OTP</div>
                    <div style={{ width: '100%', height: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '100%', color: ' #ffffff' }}>Sent to 9274819473</div>
                    <div style={{ width: '80%', height: '25%', display: 'flex', justifyContent: 'space-evenly' }}>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span style={{ margin: '0 8px' }}> </span>}
                            renderInput={(props) => (
                                <input 
                                    {...props}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        background: ' #191919',
                                        textAlign: 'center',
                                        fontSize: '120%',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        color: ' #ffffff'
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '100%', fontWeight: 600, color: ' #ffffff' }}>
                        {seconds == 0 ? (
                            <div style={{ fontSize: '100%' }}> Didn't receive OTP? <u style={{ color: ' #00e9bf', fontSize: '90%', cursor: 'pointer' }}>Resend OTP</u> </div>
                        ) :
                            (`Resend OTP in 00:${seconds.toString().padStart(2, '0')}`)}
                    </div>
                    <Button disabled style={{ width: '90%', height: '17%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: ' #353535', borderRadius: 10, color: ' #a1a1a1', fontSize: '90%', fontWeight: 600 }}>Submit OTP</Button>
                </div>
            </div>
        </Dialog>
    </>);
}