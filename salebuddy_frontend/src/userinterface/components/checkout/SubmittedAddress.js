import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
export default function SubmittedAddress() {

    const theme = useTheme()
    const md = useMediaQuery('(max-width:1300px)')
    const sm = useMediaQuery('(max-width:790px)')
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const smatches = useMediaQuery(theme.breakpoints.down('sm'))
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)')

    return (<>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: md ? 'center' : 'flex-end', width: '100%', height: 200, marginBottom: md ? '' : 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: md ? '95%' : '80%', height: '90%' }}>
                <div style={{ width: '49%', height: '100%', background: '#ffffff', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '90%', height: '90%' }}>
                        <div style={{ width: '100%', height: '15%', display: 'flex' }}>Shipping Address</div>
                        <div style={{ width: '100%', height: '15%', display: 'flex', fontWeight: 650 }}>House<div style={{ marginLeft: 5, border: '1px solid #888888', height: 20, fontWeight: 450, fontSize: '90%', color: '#888888', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5, boxSizing: 'border-box', paddingLeft: 5, paddingRight: 5 }}>Home</div></div>
                        <div style={{ width: '100%', height: '40%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: '33.3%' }}>Govind Puri, Gwalior,</div>
                            <div style={{ width: '100%', height: '33.3%' }}>Madhya Pradesh - 474011</div>
                            <div style={{ width: '100%', height: '33.3%' }}>Mobile: 9340467517</div>
                        </div>
                        <div style={{ width: '60%', height: '30%', justifyContent: 'space-between', display: 'flex' }}>
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', color: '#088466', cursor: 'pointer' }}><u>Change</u></div>
                            <div style={{ width: 1, height: "50%", background: '#000000', alignSelf: 'center' }}></div>
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', color: '#088466', cursor: 'pointer' }}><u>Add Address</u></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '49%', height: '100%', background: '#ffffff', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '90%', height: '90%' }}>
                        <div style={{ width: '100%', height: '15%', display: 'flex' }}>Billing Address</div>
                        <div style={{ width: '100%', height: '15%', display: 'flex', fontWeight: 650 }}>House</div>
                        <div style={{ width: '100%', height: '40%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: '33.3%' }}>Govind Puri, Gwalior,</div>
                            <div style={{ width: '100%', height: '33.3%' }}>Madhya Pradesh - 474011</div>
                            <div style={{ width: '100%', height: '33.3%' }}>Mobile: 9340467517</div>
                        </div>
                        <div style={{ width: '60%', height: '30%', justifyContent: 'space-between', display: 'flex' }}>
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', color: '#088466', cursor: 'pointer' }}><u>Change</u></div>
                            <div style={{ width: 1, height: "50%", background: '#000000', alignSelf: 'center' }}></div>
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', color: '#088466', cursor: 'pointer' }}><u>Add Address</u></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}