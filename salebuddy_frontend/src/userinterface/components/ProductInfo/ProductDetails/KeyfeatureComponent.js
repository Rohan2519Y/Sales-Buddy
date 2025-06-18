import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function KeyfeatureComponent({ data }) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');
    return (<>
        <div style={{ display: 'flex', width: '100%', marginTop: 20 }}>
            <div style={{ display: 'flex', width:md?'95%': '75%', height: 'auto', border: '1px solid #9A9A9A', borderRadius: 5, alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ height: '85%', width: '90%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: ' #ffffff', display: 'flex', fontWeight: 700, fontSize: '100%', marginLeft: 20,marginTop:20 }}>Key Feautures</div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom:20,marginLeft: 20, fontSize: '90%', gap: 5 ,height:'auto'}}>
                        <div style={{ color: ' #ffffff', display: 'flex' }}><div style={{ marginRight: 10 }}>{'\u2022'}</div> <div style={{ marginRight: 5 }}>Display: {data.display}</div></div>
                        <div style={{ color: ' #ffffff', display: 'flex' }}><div style={{ marginRight: 10 }}>{'\u2022'}</div> <div style={{ marginRight: 5 }}>Memory: {data.memory}</div></div>
                        <div style={{ color: ' #ffffff', display: 'flex' }}><div style={{ marginRight: 10 }}>{'\u2022'}</div> <div style={{ marginRight: 5 }}>Processor: {data.processor}</div></div>
                        <div style={{ color: ' #ffffff', display: 'flex' }}><div style={{ marginRight: 10 }}>{'\u2022'}</div> <div style={{ marginRight: 5 }}>Camera: {data.camera}</div></div>
                        <div style={{ color: ' #ffffff', display: 'flex' }}><div style={{ marginRight: 10 }}>{'\u2022'}</div> <div style={{ marginRight: 5 }}>Battery: {data.battery}</div></div>
                        <div style={{ color: ' #ffffff', display: 'flex' }}><div style={{ marginRight: 10 }}>{'\u2022'}</div> <div style={{ marginRight: 5 }}>USP: {data.usp} </div></div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}