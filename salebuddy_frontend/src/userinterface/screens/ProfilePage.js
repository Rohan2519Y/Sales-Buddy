import Footer from '../components/Footer'
import Header from '../components/Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
export default function ProfilePage() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)')

    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (touched && firstName.length == 0) {
            setError('First Name is required');
        } else {
            setError('');
        }
    }, [firstName, touched]);

    return (<>

        <style>{`
        .placeholdercolor::placeholder {
          font-size: ${matches ? '80%' : '100%'};
          color: #aaa;
        }
      `}</style>

        <div style={{ width: '100%', height: '100%', background: ' #191919', fontFamily: '"Inter", sans-serif' }}>
            <Header />
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ width: '85%', height: 80, fontSize: matches ? '75%' : '100%', fontWeight: 400, color: '#ffffff', display: 'flex', alignItems: 'center' }}>My Account <ArrowForwardIosIcon style={{ fontSize: '80%' }} /> My Profile Page </div>
                <div style={{ width: '45%', height: 80, display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '160%', color: ' #ffffff' }}>My Profile Page</div>
                <div style={{ width: '45%', height: 105, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: 90, position: 'relative' }}>
                        <div style={{ width: '100%', fontSize: '110%', height: 40, marginBottom: 'auto', color: ' #ffffff', display: 'flex', alignItems: 'center' }}>Title</div>
                        <Select displayEmpty
                            sx={{ width: '97%', height: 55, border: '1px solid #ffffff', backgroundColor: '#191919', borderRadius: 2.2, color: '#bebebeff', pl: 1, fontSize: '120%', '.MuiSvgIcon-root': { color: 'transparent' }, '.MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                            MenuProps={{ PaperProps: { sx: { backgroundColor: '#191919', color: '#fff', borderRadius: 1, boxShadow: 'none', fontWeight: 600 } } }}>
                            <MenuItem value="Mr" sx={{ fontWeight: 650, '&.Mui-selected': { backgroundColor: '#191919' }, '&.Mui-selected:hover': { backgroundColor: '#191919' }, '&:hover': { backgroundColor: '#191919' } }}>Mr</MenuItem>
                            <MenuItem value="Mrs" sx={{ fontWeight: 650, '&.Mui-selected': { backgroundColor: '#191919' }, '&.Mui-selected:hover': { backgroundColor: '#191919' }, '&:hover': { backgroundColor: '#191919' } }}>Mrs</MenuItem>
                            <MenuItem value="Miss" sx={{ fontWeight: 650, '&.Mui-selected': { backgroundColor: '#191919' }, '&.Mui-selected:hover': { backgroundColor: '#191919' }, '&:hover': { backgroundColor: '#191919' } }}>Miss</MenuItem>
                            <MenuItem value="Ms" sx={{ fontWeight: 650, '&.Mui-selected': { backgroundColor: '#191919' }, '&.Mui-selected:hover': { backgroundColor: '#191919' }, '&:hover': { backgroundColor: '#191919' } }}>Ms</MenuItem>
                            <MenuItem value="Dr" sx={{ fontWeight: 650, '&.Mui-selected': { backgroundColor: '#191919' }, '&.Mui-selected:hover': { backgroundColor: '#191919' }, '&:hover': { backgroundColor: '#191919' } }}>Dr</MenuItem>
                            <MenuItem value="Prof" sx={{ fontWeight: 650, '&.Mui-selected': { backgroundColor: '#191919' }, '&.Mui-selected:hover': { backgroundColor: '#191919' }, '&:hover': { backgroundColor: '#191919' } }}>Prof</MenuItem>
                        </Select>
                        <KeyboardArrowDownIcon style={{ position: 'absolute', right: '6%', top: '48%', color: ' #666666', fontSize: '250%', pointerEvents: 'none' }} />

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: error ? 112 : 90, alignItems: 'flex-end' }}>
                        <div style={{ width: '97%', fontSize: '110%', height: 38, marginBottom: 'auto', color: ' #ffffff', display: 'flex', alignItems: 'center' }}>First Name</div>
                        <div style={{ width: '97%', height: 55, background: ' #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, border:error?'1px solid red':'1px solid #ffffff'}}>
                            <input onBlur={() => setTouched(true)} onChange={(e) => setFirstName(e.target.value)} value={firstName} className="placeholdercolor" type="text" placeholder="Enter First Name" style={{ width: '90%', height: '90%', border: '0px solid transparent', outline: 'none', fontSize: '120%' }} />
                        </div>
                        {error && (
                            <Typography
                                sx={{
                                    width: '97%',
                                    fontSize: '90%',
                                    color: '#f44336',
                                }}
                            >
                                {error}
                            </Typography>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}