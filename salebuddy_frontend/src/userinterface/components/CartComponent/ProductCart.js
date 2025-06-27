export default function ProductCart({ item }) {
    return (<>
        <div style={{width:'100%',height:'85%',display:'flex'}}>
            <div style={{width:'23%',hieght:'100%',}}>
                <div style={{width:'100%',height:'60%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={item.image} style={{maxWidth:'90%',maxHeight:'90%'}}/>
                </div>
            </div>
            <div style={{width:'77%',hieght:'100%',background:'green'}}></div>
        </div>
    </>)
}