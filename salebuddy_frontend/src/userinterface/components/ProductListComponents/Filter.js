import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Filter({onClose}) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return (
        <>
            {!matches && (
                <div onClick={handleBackdropClick} style={{position: 'fixed',top: 0,left: 0,width: '100%',height: '100%',display: 'flex',alignItems: 'center',justifyContent: 'flex-end',backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div style={{width: '30%',height: '100%',display:'flex',justifyContent:'center',alignItems:'center',background: 'white',boxShadow: '-2px 0 8px rgba(0,0,0,0.2)', depthpadding: '20px', paddingoverflowY: 'auto'}}>
                        <div style={{width:'85%',background:'red',display:'flex',justifyContent:'center',height:'90%',}}>
                            <div style={{width:'100%',background:'green',height:50}}></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}