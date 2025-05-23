import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Footer() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (<div style={{ width: '100%', height: '62vh', background: 'black', display: 'flex', margin: 0 }}>

    </div>)
}