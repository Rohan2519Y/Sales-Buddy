import { Button, Dialog } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";
import OtpInput from 'react-otp-input';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function OTPComponent({ open = true, number, handleOTPClose, handleProfile }) {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const [seconds, setSeconds] = useState(30);
    const [otp, setOtp] = useState('');
    const [submit, setSubmit] = useState('#12daa8')

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
            <CloseIcon onClick={handleOTPClose} style={{ color: 'white', right: 6, position: 'absolute', top: 3, }} />
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: smatches ? '90%' : '70%', height: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '10%', fontSize: '120%', fontWeight: 700, color: ' #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>VERIFY WITH OTP</div>
                    <div style={{ width: '100%', height: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '100%', color: ' #ffffff' }}>Sent to {number}</div>
                    <div style={{ width: '80%', height: '25%', display: 'flex', justifyContent: 'space-evenly' }}>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span style={{ margin: '0 8px' }}> </span>}
                            renderInput={(props) => (
                                <input {...props} style={{ width: '30%', height: '60%', background: ' #191919', textAlign: 'center', fontSize: '120%', border: '1px solid #ccc', borderRadius: '4px', color: ' #ffffff' }} />
                            )} />
                    </div>
                    <div style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '100%', fontWeight: 600, color: ' #ffffff' }}>
                        {seconds == 0 ? (
                            <div style={{ fontSize: '100%' }}> Didn't receive OTP? <u style={{ color: ' #00e9bf', fontSize: '90%', cursor: 'pointer' }}>Resend OTP</u> </div>
                        ) :
                            (`Resend OTP in 00:${seconds.toString().padStart(2, '0')}`)}
                    </div>
                    <Button disabled={otp.length !== 4}
                        onClick={handleProfile}
                        onMouseEnter={() => { setSubmit('#00b594') }}
                        onMouseLeave={() => { setSubmit('#12daa8') }}
                        style={{ width: '90%', height: '17%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: otp.length === 4 ? submit : '#353535', borderRadius: 10, color: otp.length === 4 ? '#000' : '#a1a1a1', fontSize: '90%', fontWeight: 600, cursor: otp.length === 4 ? 'pointer' : 'not-allowed' }}>Submit OTP</Button>
                </div>
            </div>
        </Dialog>
    </>);
}