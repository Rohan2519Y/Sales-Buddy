import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function SearchBar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div style={{margin:3 , width: matches?'90%':'50%', display: 'flex', alignItems: 'center',justifyContent:matches?'center':'' }}>
            <div style={{ width: matches?'100%':"70%", height: '6vh', background: 'white', display: 'flex', alignItems: 'center', justifyContent: "space-evenly", border: '1px solid black', borderRadius: 5, marginLeft: matches?0:'8%',marginTop:5 }}>
                <input type='text' placeholder='What are you looking for?' style={{ outline: 'none',width: '85%', height: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0px solid transparent' }} />
                <SearchIcon />
            </div>
        </div>
    )
}