import { postData, serverURL } from "../../backendservices/FetchNodeServices"
import { useEffect, useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function ShowTwoAds() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1250px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    // const [ads, setAds] = useState(['s.webp','v.webp'])
    // const fetchAds = async () => {
    //     var response = await postData('userinterface/userinterface_fetch_ads', { imgno: 1 })
    //     if (response.status) {
    //         setAds(response.data)
    //     }
    //     else {
    //         alert(response.message)
    //     }
    // }
    // useEffect(function () {
    //     fetchAds()
    // }, [])

    const ads=[{images:'s.webp'},{images:'v.webp'}]

    const showAds = () => {
        return ads.map((item) => {
            return <div style={{ borderRadius: 10, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={`${serverURL}/images/${item.images}`} style={{ width: '98%', borderRadius: 10 }} />
            </div>
        })
    }

    return (<div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: ' #191919', fontFamily: '"Inter", sans-serif' }} >
        <div style={{ width: md ? '90%' : '75%', display: 'flex', color: ' #ffffff', fontSize: md ? '1.6em' : '1.75em', marginBottom: '2%', marginTop: '2%' }}>Hot Deals Mobile</div>
        <div style={{ display: 'flex', width: md ? '90%' : '75%', justifyContent: 'center' }}>
            {showAds()}
        </div>
    </div>)
}