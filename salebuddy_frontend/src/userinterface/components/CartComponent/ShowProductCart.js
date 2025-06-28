import ProductCart from "./ProductCart"

export default function ShowProductCart() {

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 256GB, Titanium Silverblue)', storage: '128GB', color: 'Titanium Blue', ram: '12GB',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 3.3, price: 78000.00, offerprice: 70000.00,
        delivery: 'Standard Delivery by 1 July 2025 | Free'
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 256GB, Titanium Silverblue)', storage: '128GB', color: 'Titanium Blue', ram: '12GB',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778565/s25_ultra_e1hcpg.png', ratings: 3.3, price: 78000.00, offerprice: 70000.00,
        delivery: 'Standard Delivery by 1 July 2025 | Free'
    }]

    return (<>
        <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end',  flexDirection: 'column' }}>
            {data.map((item) => (
                <div style={{ width: '80%', height: 280, background: ' #ffffff', marginBottom: 30, display: 'flex', alignItems: 'center' }}>
                    <ProductCart item={item} />
                </div>
            ))}
        </div>
    </>)
}