import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from "./Menu"
import Search from "./SearchBar"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Header() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (<>
        <div style={{boxSizing:'border-box',padding:5, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height:matches?'12vh': '9vh', background: '#000', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row',width:'100%'}}>
                <Menu />
                <div style={{ color: 'white', width: "15%", display: 'flex', alignItems: 'center', fontSize: 22, flexGrow: 1 }}><div style={{ marginRight: '40%', fontSize: matches?25:30 }}>SalesBuddy</div></div>
                {matches ? <></> : <Search />}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22%' }}>
                    {matches ? <></> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <RoomIcon style={{ color: 'white', fontSize: 20, margin: 2 }} />
                        <div style={{ color: 'white', fontSize: 13 }}>Gwalior,474011</div>
                        <EditIcon style={{ color: 'white', fontSize: 13 }} />
                    </div>}
                    <div style={{ marginLeft: matches ? 'auto' : 0, marginRight: 10 }}>
                        <PersonIcon style={{ color: 'white', fontSize: 20, margin: '0 5 0 5' }} />
                        <ShoppingCartIcon style={{ color: 'white', fontSize: 20, margin: '0 5 0 5' }} />
                    </div>
                </div>
            </div>
            {matches ? <Search /> : <></>}
        </div>
    </>
    )
}