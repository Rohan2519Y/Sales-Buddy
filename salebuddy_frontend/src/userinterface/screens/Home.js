import Header from "../components/Header"
import MainSlider from "../components/MainSlider"
import Footer from "../components/Footer"
import BrandSlider from "../components/BrandSlider"
import ProductScroller from "../components/ProductScroller"
export default function Home() {

    var data = [{
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748777796/15_pro_max_p1iwhz.jpg', ratings: 3.3, price: 78000.00, offer: 70000.00
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778280/sam_z6_v6ubdl.png', ratings: 3.3, price: 78000.00, offer: 70000.00
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748777796/15_pro_max_p1iwhz.jpg', ratings: 3.3, price: 78000.00, offer: 70000.00
    },
    {
        productdetailid: 1, productname: 'SAMSUNG Galaxy S25 Ultra 5G (12GB RAM, 512GB, Titanium Gray)', variant: '128 GB', color: 'Teal',
        image: 'https://res.cloudinary.com/dio6iadsq/image/upload/v1748778280/sam_z6_v6ubdl.png', ratings: 3.3, price: 78000.00, offer: 70000.00
    }]

    return (<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
        <div  >
            <Header />
        </div>
        <div style={{ width: '100%', height: '100%', overflowX: "hidden", background: ' #191919' }}>
            <MainSlider />
        </div>
        <div style={{ width: '100%', height: '100%', overflowX: "hidden", background: ' #191919' }}>
            <ProductScroller data={data} title='Summer Special Deals' />
        </div>
        <div >
            <BrandSlider />
        </div>
        <div style={{ width: '100%', height: '100%' }}>
            <Footer />
        </div>
    </div>
    )
}