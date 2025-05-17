import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from "./Menu"
import Search from "./Search"
export default function Header() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '9vh', background: '#000', boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)' }}>
            <Menu />
            <div style={{ color: 'white', width: "15%",display:'flex', justifyContent:'center',alignItems:'center',fontSize: 22}}><div style={{marginRight:'20%'}}>SalesBuddy</div></div>
            <Search />
            <div style={{ display: 'flex', alignItems: 'center', width: '20%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:2 }}>
                    <RoomIcon style={{ color: 'white', fontSize: 20, margin: 2 }} />
                    <div style={{ color: 'white', fontSize: 13 }}>Gwalior,474011</div>
                    <EditIcon style={{ color: 'white', fontSize: 13 }} />
                </div>
                <PersonIcon style={{ color: 'white', fontSize: 20, margin:5 }} />
                <ShoppingCartIcon style={{ color: 'white', fontSize: 20 , margin:5}} />
            </div>
        </div>
    )
}