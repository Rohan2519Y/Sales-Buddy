import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Select, MenuItem, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import Radio from '@mui/material/Radio'

export default function Address() {

    const theme = useTheme()
    const md = useMediaQuery('(max-width:1300px)')
    const sm = useMediaQuery('(max-width:790px)')
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const smatches = useMediaQuery(theme.breakpoints.down('sm'))
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)')

    const [nickName, setNickName] = useState('')
    const [errorN, setErrorN] = useState('')
    const [touchedN, setTouchedN] = useState(false)

    const [pin, setPin] = useState('')
    const [errorP, setErrorP] = useState('')
    const [touchedP, setTouchedP] = useState(false)

    const [address, setAddress] = useState('')
    const [errorA, setErrorA] = useState('')
    const [touchedA, setTouchedA] = useState(false)

    const [landmark, setLandmark] = useState('')
    const [errorL, setErrorL] = useState('')
    const [touchedL, setTouchedL] = useState(false)

    const [area, setArea] = useState('')
    const [errorAr, setErrorAr] = useState('')
    const [touchedAr, setTouchedAr] = useState(false)

    useEffect(() => {
        if (touchedN && nickName.length === 0) {
            setErrorN('Address Nickname is Required')
        } else {
            setErrorN('')
        }
        if (touchedP && pin.length === 0) {
            setErrorP('Pin Code is required')
        } else {
            setErrorP('')
        }
        if (touchedA && address.length === 0) {
            setErrorA('Address is Required')
        } else {
            setErrorA('')
        }
        if (touchedL && landmark.length === 0) {
            setErrorL('Landmark is required')
        } else {
            setErrorL('')
        }
        if (touchedAr && area.length === 0) {
            setErrorA('Locality / Sector / Area is Required')
        } else {
            setErrorA('')
        }
    }, [nickName, pin, address, landmark, area, touchedP, touchedN, touchedA, touchedL, touchedAr])
    return (<>
        <style>{`
        .placeholdercolor::placeholder {
          font-size: ${matches ? '80%' : '70%'}
          color: #aaa
        }
      `}</style>

        <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'flex-end', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%', height: '100%', background: ' #ffffff', marginTop: 20 }}>
                <div style={{ display: 'flex', width: '95%', height: '100%', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', width: '100%', height: 50, alignItems: 'center', fontWeight: 700, fontSize: '100%' }}>Address Details</div>
                    <div style={{ width: '100%', height: sm ? 200 : 105, display: 'flex', justifyContent: 'space-between', flexDirection: sm ? 'column' : '', marginTop: sm ? '' : 15 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: sm ? '100%' : '50%', height: errorN ? 112 : 90 }}>
                            <div style={{ width: sm ? '100%' : '97%', fontSize: '100%', height: 38, marginBottom: 'auto', color: ' #000000', display: 'flex', alignItems: 'center' }}>Address Nick Name*</div>
                            <div style={{ width: sm ? '100%' : '97%', height: 55, background: ' #f6f6f6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, border: errorN ? '1px solid red' : '1px solid #f6f6f6', position: 'relative' }}>
                                <input onBlur={() => setTouchedN(true)} onChange={(e) => setNickName(e.target.value)} value={nickName} className="placeholdercolor" type="text" placeholder="Enter Address Nick Name" style={{ width: '90%', height: '90%', border: '0px solid transparent', outline: 'none', fontSize: '105%', background: ' #f6f6f6' }} />
                            </div>
                            {errorN && (
                                <Typography sx={{ width: sm ? '100%' : '97%', fontSize: '90%', color: '#f44336', fontWeight: 600 }} >
                                    {errorN}
                                </Typography>
                            )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: sm ? '100%' : '50%', height: errorP ? 112 : 90 }}>
                            <div style={{ width: sm ? '100%' : '97%', fontSize: '100%', height: 38, marginBottom: 'auto', color: ' #000000', display: 'flex', alignItems: 'center' }}>Pin Code*
                            </div>
                            <div style={{ width: sm ? '100%' : '97%', height: 55, background: ' #f6f6f6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, border: errorP ? '1px solid red' : '1px solid #f6f6f6', position: 'relative' }}>
                                <input onBlur={() => setTouchedP(true)} onChange={(e) => setPin(e.target.value)} value={pin} className="placeholdercolor" type="text" placeholder="Enter Pin Code" style={{ width: '90%', height: '90%', border: '0px solid transparent', outline: 'none', fontSize: '105%', background: ' #f6f6f6' }} />
                            </div>
                            {errorP && (
                                <Typography sx={{ width: sm ? '100%' : '97%', fontSize: '90%', color: '#f44336', fontWeight: 600 }} >
                                    {errorP}
                                </Typography>
                            )}
                        </div>
                    </div>

                    <div style={{ width: '100%', height: sm ? 200 : 105, display: 'flex', justifyContent: 'space-between', flexDirection: sm ? 'column' : '', marginTop: sm ? '' : 15 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: sm ? '100%' : '50%', height: errorA ? 112 : 90 }}>
                            <div style={{ width: sm ? '100%' : '97%', fontSize: '100%', height: 38, marginBottom: 'auto', color: ' #000000', display: 'flex', alignItems: 'center' }}>Address (Flat no., Building, Company, Street)*</div>
                            <div style={{ width: sm ? '100%' : '97%', height: 55, background: ' #f6f6f6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, border: errorA ? '1px solid red' : '1px solid #f6f6f6', position: 'relative' }}>
                                <input onBlur={() => setTouchedA(true)} onChange={(e) => setAddress(e.target.value)} value={address} className="placeholdercolor" type="text" placeholder="Flat No./Building/Society" style={{ width: '90%', height: '90%', border: '0px solid transparent', outline: 'none', fontSize: '105%', background: ' #f6f6f6' }} />
                            </div>
                            {errorA && (
                                <Typography sx={{ width: sm ? '100%' : '97%', fontSize: '90%', color: '#f44336', fontWeight: 600 }} >
                                    {errorA}
                                </Typography>
                            )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: sm ? '100%' : '50%', height: errorL ? 112 : 90 }}>
                            <div style={{ width: sm ? '100%' : '97%', fontSize: '100%', height: 38, marginBottom: 'auto', color: ' #000000', display: 'flex', alignItems: 'center' }}>Landmark*
                            </div>
                            <div style={{ width: sm ? '100%' : '97%', height: 55, background: ' #f6f6f6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, border: errorL ? '1px solid red' : '1px solid #f6f6f6', position: 'relative' }}>
                                <input onBlur={() => setTouchedL(true)} onChange={(e) => setLandmark(e.target.value)} value={landmark} className="placeholdercolor" type="text" placeholder="Enter Landmark" style={{ width: '90%', height: '90%', border: '0px solid transparent', outline: 'none', fontSize: '105%', background: ' #f6f6f6' }} />
                            </div>
                            {errorL && (
                                <Typography sx={{ width: sm ? '100%' : '97%', fontSize: '90%', color: '#f44336', fontWeight: 600 }} >
                                    {errorL}
                                </Typography>
                            )}
                        </div>
                    </div>
                    <div style={{ width: '100%', height: sm ? 200 : 105, display: 'flex', justifyContent: 'space-between', flexDirection: sm ? 'column' : '', marginTop: sm ? '' : 15 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: errorAr ? 112 : 90 }}>
                            <div style={{ width: '100%', fontSize: '100%', height: 38, marginBottom: 'auto', color: ' #000000', display: 'flex', alignItems: 'center' }}>Locality / Sector / Area*
                            </div>
                            <div style={{ width: '100%', height: 55, background: ' #f6f6f6', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 8, border: errorAr ? '1px solid red' : '1px solid #f6f6f6', position: 'relative' }}>
                                <input onBlur={() => setTouchedAr(true)} onChange={(e) => setArea(e.target.value)} value={area} className="placeholdercolor" type="text" placeholder="Enter Locality/Sector/Area" style={{ width: '95%', height: '90%', border: '0px solid transparent', outline: 'none', fontSize: '105%', background: ' #f6f6f6' }} />
                            </div>
                            {errorAr && (
                                <Typography sx={{ width: sm ? '100%' : '97%', fontSize: '90%', color: '#f44336', fontWeight: 600 }} >
                                    {errorAr}
                                </Typography>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}