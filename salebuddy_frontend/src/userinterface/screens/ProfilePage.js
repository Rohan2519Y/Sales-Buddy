import Footer from '../components/Footer'
import Header from '../components/Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function ProfilePage() {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    return (<>
        <div style={{ width: '100%', height: '100%', background: ' #191919', fontFamily: '"Inter", sans-serif' }}>
            <Header />
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ width: '85%', height: 80, fontSize: matches ? '75%' : '100%', fontWeight: 400, color: '#ffffff', display: 'flex', alignItems: 'center' }}>My Account <ArrowForwardIosIcon style={{ fontSize: '80%' }} /> My Profile Page </div>
                <div style={{ width: '50%', height: 80, display: 'flex', alignItems: 'flex-end', fontWeight: 600, fontSize: '170%', color: ' #ffffff' }}>My Profile Page</div>
                <div style={{ width: '50%', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <FormControl
                        sx={{
                            m: 1, width: '40%', color: '#ffffff',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none'
                            },
                            '& .MuiOutlinedInput-root': {
                                color: '#fff'
                            }
                        }}>
                        <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} sx={{ border: '1px solid #ffffff', color: '#ffffff', backgroundColor: '#191919', '& .MuiOutlinedInput-notchedOutline': { border: 'none', }, '&.Mui-focused': { backgroundColor: '#191919', }, '.MuiSelect-icon': { color: '#ffffff' } }} >
                            <MenuItem sx={{ background: '#191919', color: '#ffffff', '&.Mui-selected': { background: '#191919', color: '#ffffff', }, '&:hover': { background: '#191919', }, }} value={10} >Ten</MenuItem>
                            <MenuItem sx={{ background: '#191919', color: '#ffffff', '&.Mui-selected': { background: '#191919', color: '#ffffff', }, '&:hover': { background: '#191919', }, }} value={10} >Ten</MenuItem>
                            <MenuItem sx={{ background: '#191919', color: '#ffffff', '&.Mui-selected': { background: '#191919', color: '#ffffff', }, '&:hover': { background: '#191919', }, }} value={10} >Ten</MenuItem>
                            <MenuItem sx={{ background: '#191919', color: '#ffffff', '&.Mui-selected': { background: '#191919', color: '#ffffff', }, '&:hover': { background: '#191919', }, }} value={10} >Ten</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}