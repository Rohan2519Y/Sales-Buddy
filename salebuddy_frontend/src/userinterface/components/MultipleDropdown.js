import Dropdown from "./Dropdown";

export default function MultipleDropdown() {

    const catagories = ['Android', 'Ios', 'Windows', 'Mac']
    const storage = ['64GB', '128GB', '256GB', '512GB', '1TB']
    const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Motorola", "Nokia", "Google", "Huawei", "Sony", "Asus", "Infinix", "Tecno", "Lenovo", "Honor", "iQOO", "Lava", "Micromax"];
    const tower = ['5G', '4G', '3G', '2G']
    const discount = ['BELOW 20%', '20% TO 40%', '40% TO 60%', '60% TO 80%', '80% AND ABOVE']
    const delivery = ['EXPRESS DELIVERY', 'HOME DELIVERY']
    
    return (<>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 60, overflowY: 'visible' }}>
            <div style={{ width: '90%', display: 'flex', overflowX: 'auto',overflowY: 'visible',whiteSpace: 'nowrap',scrollbarWidth: 'none', msOverflowStyle: 'none',WebkitOverflowScrolling: 'touch' }}>
                <div style={{ margin: '1%', minWidth: 'fit-content' }}>
                    <Dropdown data={catagories} title='Categories' />
                </div>
                <div style={{ margin: '1%', minWidth: 'fit-content' }}>
                    <Dropdown data={storage} title='Internal Storage' />
                </div>
                <div style={{ margin: '1%', minWidth: 'fit-content' }}>
                    <Dropdown data={brands} title='Brands' />
                </div>
                <div style={{ margin: '1%', minWidth: 'fit-content' }}>
                    <Dropdown data={tower} title='Cellular Tower' />
                </div>
                <div style={{ margin: '1%', minWidth: 'fit-content' }}>
                    <Dropdown data={discount} title='Discount' />
                </div>
                <div style={{ margin: '1%', minWidth: 'fit-content' }}>
                    <Dropdown data={delivery} title='Delivery' />
                </div>
            </div>
        </div>
    </>)
}