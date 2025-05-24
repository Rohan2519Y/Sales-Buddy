import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Margin } from '@mui/icons-material';
export default function Footer() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (<div style={{ width: '100%', height: matches ? '40vh' : '62vh', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '80%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div style={{ width: '30%', height: '85%' }}>
                <div style={{ color: 'white', fontSize: '130%', fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 500, height: 27 }}>Connect With Us</div>
                <div style={{ width: '80%', height: 40, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 1 }}>
                    <input type='text' placeholder='Enter Your Email' style={{ width: '80%', margin: 1, height: '80%', outline: 'none', border: '0px solid transparent' }} />
                    <EastIcon />
                </div>
                <div style={{ width: '85%', height: '15%', marginTop: 3, alignItems: 'center', justifyContent: 'space-evenly', display: 'flex' }}>
                    <YouTubeIcon style={{ color: 'white', fontSize: 35 }} />
                    <FacebookIcon style={{ color: 'white', fontSize: 35 }} />
                    <InstagramIcon style={{ color: 'white', fontSize: 35 }} />
                    <LinkedInIcon style={{ color: 'white', fontSize: 35 }} />
                    <TwitterIcon style={{ color: 'white', fontSize: 35 }} />
                </div>
                <div style={{ width: '90%', marginTop: 30, color: 'white', fontFamily: '"Roboto Condensed", sans-serif' }}>© Copyright 2025 SalesBuddy. All rights reserved</div>
            </div>
            <div style={{ width: 0.1, height: '85%', background: 'white' }}></div>
            <div style={{ width: '30%', height: '85%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'white', fontFamily: '"Archivo", sans-serif', fontWeight: 600, fontSize: '120%', height: '10%', width: '100%' }}>
                    Useful Links
                </div>
                <div style={{ display: 'flex', height: '90%', width: '100%', justifyContent: 'flex-start', marginTop: 1,fontFamily: '"Archivo", sans-serif' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', color: 'white', width: '50%', alignItems: 'flex-start', marginRight: 3, gap: '5%', fontWeight: 550, fontSize: 16 }}>
                        <div>About SalesBuddy</div>
                        <div>Help And Support</div>
                        <div>FAQs</div>
                        <div>Buying Guide</div>
                        <div>Return Policy</div>
                        <div>B2B Orders</div>
                        <div>Store Locator</div>
                        <div>E-Waste</div>
                        <div>Franchise Opportunity</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', color: 'white', width: '50%', alignItems: 'flex-start', gap: '5%', fontWeight: 550, fontSize: 16 }}>
                        <div>Site Map</div>
                        <div>Careers At Croma</div>
                        <div>Term Of Use</div>
                        <div>Disclaimer</div>
                        <div>Privacy Policy</div>
                        <div>Unboxed</div>
                        <div>Gift Card</div>
                        <div>Croma E-Star</div>
                    </div>
                </div>
            </div>

            <div style={{ width: 0.1, height: '85%', background: 'white' }}></div>
            <div style={{ width: '30%', height: '100%' }}></div>
        </div>
    </div>)
}