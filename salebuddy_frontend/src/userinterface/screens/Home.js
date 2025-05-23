import Header from "../components/Header"
import MainSlider from "../components/MainSlider"
import Footer from "../components/Footer"
export default function Home() {
    return (<div style={{ width: '100%', display: 'flex', flexDirection: 'column', margin: 0 }} >
        <Header />
        <div style={{ width: '100%', overflowX: "hidden", margin: 0 }}>
            <MainSlider />
        </div>
        <Footer />
    </div>
    )
}