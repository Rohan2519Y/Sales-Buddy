import Header from "../components/Header";
import MultipleDropdown from "../components/ProductListComponents/MultipleDropdown";

export default function ProductList() {

    return (
        <div style={{ width: '100%', display: 'flex',flexDirection:'column',background:' #191919' }}>
            <div  >
                <Header />
            </div>
            <div style={{}}>
                <MultipleDropdown/>
            </div>
        </div>
    )
}