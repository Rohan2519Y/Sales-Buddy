import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
    return (
        <div style={{ width: '50%', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '70%', height: '5vh', background: 'white', display: 'flex', alignItems: 'center', justifyContent: "space-evenly", border: '1px solid black', borderRadius: 5, marginLeft: '8%' }}>
                <input type='text' placeholder='What are you looking for?' style={{ width: '85%', height: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0px solid' }} />
                <SearchIcon />
            </div>
        </div>
    )
}