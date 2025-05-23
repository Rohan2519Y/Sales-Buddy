import Header from "../components/Header"
import MainSlider from "../components/MainSlider"
import Footer from "../components/Footer"
export default function Home() {
    return (<div style={{ width: '100%', display: 'flex', flexDirection: 'column', margin: 0,minHeight:'100vh' }} >
        <Header />
        <div style={{ width: '100%', overflowX: "hidden", flex:1 }}>
            <MainSlider />
        </div>
        <Footer />
    </div>
    )
}