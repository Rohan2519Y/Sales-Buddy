import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';
import Menu from "./Menu"
import Search from "./SearchBar"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, fabClasses } from '@mui/material';
import { useNavigate } from 'react-router'
import { useEffect, useRef, useState } from "react";
import UserLogin from './user/UserLogin';
import OTPComponent from './user/OTPComponent';

export default function Header({ cLogin, setCLogin, screencart }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const navigate = useNavigate()

    const [open, setOpenDialog] = useState(false)
    const [openOtp, setOpenOtp] = useState(false)
    const [otpValue, setOtpValue] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [screen, setScreen] = useState('header')

    const handleLogin = () => {
        setOpenDialog(true)
        if (cLogin == true) {
            setCLogin(false)
        }
    }

    //const product=useSelector((state)=>state.cart)
    // keys=Object.keys(product)
    ///localstorage  
    var keys = 0
    try {
        const product = JSON.parse(localStorage.getItem('cart'))
        keys = Object.keys(product)
        //alert(JSON.stringify(Object.values(product)))
    }
    catch (e) { }
    var user = {}
    try {
        user = JSON.parse(localStorage.getItem('user')) || {}
    } catch (e) { }

    const dispatch = useDispatch()
    ////////////////////

    useEffect(function () {
        setOpenDialog(cLogin)
    }, [cLogin])

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //USER

    const [hover, setHover] = useState(false)
    const [loginColor, setLoginColor] = useState('#ffffff')
    const [orderColor, setOrderColor] = useState('#ffffff')
    const [profileColor, setProfileColor] = useState('#ffffff')
    const [logoutColor, setLogoutColor] = useState('#ffffff')

    const handleLogout = () => {
        if (JSON.stringify(user) != '{}') {
            dispatch({ type: "LOGOUT" })
            dispatch({ type: "CLEAR_CART" })
            navigate('/')
        }
    }
    const UserHover = () => {
        return (<>
            {JSON.stringify(user) == '{}' ? <></> : <>
                <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 250, minHeight: 200, zIndex: 20, borderRadius: 10, background: ' #393939', fontFamily: '"Inter", sans-serif', fontSize: '120%', position: 'absolute', right: '4%', top: '9%', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)' }}>
                    {/* <div onMouseEnter={() => { setLoginColor('#12DAA8') }} onMouseLeave={() => { setLoginColor('#ffffff') }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, cursor: 'pointer', color: loginColor }}><LoginIcon style={{ marginRight: 10, fontSize: '190%' }} /> Login</div> */}
                    <div onMouseEnter={() => { setProfileColor('#12DAA8') }} onMouseLeave={() => { setProfileColor('#ffffff') }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, cursor: 'pointer', color: profileColor }}><AccountCircleOutlinedIcon style={{ marginRight: 10, fontSize: '190%' }} /> Update Profile</div>
                    <div onMouseEnter={() => { setOrderColor('#12DAA8') }} onMouseLeave={() => { setOrderColor('#ffffff') }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, cursor: 'pointer', color: orderColor }}><InventoryIcon style={{ marginRight: 10, fontSize: '190%' }} /> Order  History</div>
                    <div onClick={handleLogout} onMouseEnter={() => { setLogoutColor('#12DAA8') }} onMouseLeave={() => { setLogoutColor('#ffffff') }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, cursor: 'pointer', color: logoutColor }}><LogoutIcon style={{ marginRight: 10, fontSize: '190%' }} /> Logout</div>
                </div></>}
        </>)
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (<>
        <UserLogin open={open} setOpenDialog={setOpenDialog} openOtp={openOtp} setOpenOtp={setOpenOtp} otpValue={otpValue} setOtpValue={setOtpValue} mobileNo={mobileNo} setMobileNo={setMobileNo} setCLogin={setCLogin} />
        <OTPComponent screen={screen} setScreen={setScreen} screencart={screencart} open={open} setOpenDialog={setOpenDialog} openOtp={openOtp} setOpenOtp={setOpenOtp} otpValue={otpValue} setOtpValue={setOtpValue} mobileNo={mobileNo} setMobileNo={setMobileNo} />
        {hover && <UserHover />}
        <div style={{ boxSizing: 'border-box', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: matches ? 'auto' : 75, background: '#000', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', width: '95%', height: '100%' }}>
                <Menu />
                <div style={{ color: 'white', width: "15%", display: 'flex', alignItems: 'center', fontSize: 22, flexGrow: 1 }}><div style={{ marginRight: '40%', fontSize: matches ? 25 : 30, cursor: 'pointer' }} onClick={() => { navigate('/') }}>SalesBuddy</div></div>
                {matches ? <></> : <Search />}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24%', height: '100%' }}>
                    {matches ? <></> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <RoomIcon style={{ color: 'white', fontSize: 25, margin: 2 }} />
                        <div style={{ color: 'white', fontSize: 16 }}>Gwalior,474011</div>
                        <EditIcon style={{ color: 'white', fontSize: 16 }} />
                    </div>}
                    <div style={{ marginLeft: matches ? 'auto' : 0, marginRight: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                        <div onClick={() => {
                            if (JSON.stringify(user) === '{}') { handleLogin(); }
                        }}
                            onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} style={{ color: 'white', fontSize: 25, marginRight: 10, cursor: 'pointer', height: hover ? '100%' : '', display: 'flex', alignItems: 'center' }} ><PersonIcon /></div>
                        <Badge style={{ margin: '0 8 0 8' }} invisible={keys.length === 0} badgeContent={keys.length} sx={{ '& .MuiBadge-badge': { backgroundColor: '#12DAA8', color: '#000' } }}>
                            <ShoppingCartIcon onClick={() => navigate('/cart')} style={{ color: 'white', fontSize: 25, cursor: 'pointer' }} />
                        </Badge>
                    </div>
                </div>
            </div>
            {matches ? <Search /> : <></>}
        </div>
    </>
    )
}