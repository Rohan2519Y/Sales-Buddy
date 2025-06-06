import Header from "../components/Header";
import Dropdown from '../components/Dropdown'

export default function ProductList() {
    return (
        <div style={{ width: '100%', display: 'flex',flexDirection:'column' }}>
            <div  >
                <Header />
            </div>
            <div>
                <Dropdown/>
            </div>
        </div>
    )
}