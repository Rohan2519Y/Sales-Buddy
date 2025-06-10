import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Filter() {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <>
            {matches && (
                <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                    <div style={{width:'30%',height:'100%',background:'white'}}>
                        
                    </div>
                </div>
            )}
        </>
    );
}