import Header from "../components/Header"
import MainSlider from "../components/MainSlider"
export default function Home() {
    return (<div style={{width:'100%', display:'flex',flexDirection:'column'}} >
        <Header />
        <div style={{width:'100%',overflowX:"hidden"}}>
            <MainSlider />
        </div>
    </div>
    )
}