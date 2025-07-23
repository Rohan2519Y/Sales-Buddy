import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from "./Menu"
import Search from "./SearchBar"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Badge, fabClasses } from '@mui/material';
import { useNavigate } from 'react-router'
import { useEffect, useState } from "react";
import UserLogin from './user/UserLogin';
import OTPComponent from './user/OTPComponent';

export default function Header({ cLogin, setCLogin, screencart }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const product = useSelector((state) => state.cart)
    const keys = Object.keys(product)
    const navigate = useNavigate()

    const [open, setOpenDialog] = useState(false)
    const [openOtp, setOpenOtp] = useState(false)
    const [otpValue, setOtpValue] = useState('')
    const [number, setNumber] = useState('')
    const [screen, setScreen] = useState('header')

    const handleLogin = () => {
        setOpenDialog(true)
        if (cLogin == true) {
            setCLogin(false)
        }
    }

    useEffect(function () {
        setOpenDialog(cLogin)
    }, [cLogin])

    return (<>
        <UserLogin open={open} setOpenDialog={setOpenDialog} openOtp={openOtp} setOpenOtp={setOpenOtp} otpValue={otpValue} setOtpValue={setOtpValue} number={number} setNumber={setNumber} setCLogin={setCLogin} />
        <OTPComponent screen={screen} setScreen={setScreen} screencart={screencart} open={open} setOpenDialog={setOpenDialog} openOtp={openOtp} setOpenOtp={setOpenOtp} otpValue={otpValue} setOtpValue={setOtpValue} number={number} setNumber={setNumber} />

        <div style={{ boxSizing: 'border-box', padding: 5, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: matches ? 'auto' : '9vh', background: '#000', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
                <Menu />
                <div style={{ color: 'white', width: "15%", display: 'flex', alignItems: 'center', fontSize: 22, flexGrow: 1 }}><div style={{ marginRight: '40%', fontSize: matches ? 25 : 30, cursor: 'pointer' }} onClick={() => { navigate('/') }}>SalesBuddy</div></div>
                {matches ? <></> : <Search />}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24%' }}>
                    {matches ? <></> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <RoomIcon style={{ color: 'white', fontSize: 20, margin: 2 }} />
                        <div style={{ color: 'white', fontSize: 13 }}>Gwalior,474011</div>
                        <EditIcon style={{ color: 'white', fontSize: 13 }} />
                    </div>}
                    <div style={{ marginLeft: matches ? 'auto' : 0, marginRight: 10 }}>
                        <PersonIcon style={{ color: 'white', fontSize: 20, margin: '0 5 0 5', cursor: 'pointer' }} onClick={handleLogin} />
                        <Badge invisible={keys.length === 0} badgeContent={keys.length} color="secondary"
                            sx={{ '& .MuiBadge-badge': { backgroundColor: '#12DAA8', color: '#000' } }}>
                            <ShoppingCartIcon onClick={() => navigate('/cart')} style={{ color: 'white', fontSize: 20, margin: '0 5 0 5', cursor: 'pointer' }} />
                        </Badge>
                    </div>
                </div>
            </div>
            {matches ? <Search /> : <></>}
        </div>
    </>
    )
}