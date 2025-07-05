import { useState, useEffect } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useParams,useNavigate } from "react-router";
import { postData } from "../../../../backendservices/FetchNodeServices";

export default function ProductRamComponent({ productid,ram, defaultRam }) {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    const navigate = useNavigate()
    const [pcolor, setPcolor] = useState('')

    const handleClick = async (item, id) => {
        setPcolor(item);
        const response = await postData('userinterface/userinterface_fetch_productdetails_by_id_ram', { productid, productvarientid: id })
        if (response.status) {
           
            navigate(`/mainproductinfocomponent/${response.data.productdetailsid}/${productid}`)
        } else {
            alert("Id Not Found")
        }
    };

    useEffect(() => {
        setPcolor(defaultRam)
    }, [defaultRam]);

    return (<>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 10, alignItems: matches ? 'center' : '' }}>
            <div style={{ width: matches ? '90%' : md ? '95%' : '80%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: ' #ffffff', fontSize: '90%', marginBottom: 15 }}>RAM</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                    {ram.map((item) => (
                        <div
                            onClick={() => handleClick(item.productstorage, item.productvarientid)}
                            onMouseEnter={(e) => {
                                if (pcolor !== item.productram) {
                                    e.currentTarget.style.border = '1px solid #49a5a2';
                                    e.currentTarget.style.background = '#49a5a2';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pcolor !== item.productram) {
                                    e.currentTarget.style.border = '1px solid #ffffff';
                                    e.currentTarget.style.background = '';
                                }
                            }} style={{ display: 'flex', justifyContent: 'center', backgroundColor: pcolor === item.productram ? ' #000000' : 'transparent', alignItems: 'center', border: pcolor === item.productram ? '1px solid rgb(0, 255, 208)' : '1px solid #ffffff', marginRight: 20, marginBottom: 10, borderRadius: 5, }}>
                            <div style={{ color: ' #ffffff', margin: 10, fontSize: '80%' }}>{item.productram}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
}