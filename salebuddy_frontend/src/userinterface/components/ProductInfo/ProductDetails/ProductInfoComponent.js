import StarIcon from '@mui/icons-material/Star';
export default function ProductInfoComponent({ data }) {

    var discount = data[0].price - data[0].offerprice
    var percent = (discount / data[0].price) * 100;
    return (<>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '80%', height: 170, display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', display: 'flex', height: '35%', fontSize: '120%', color: ' #ffffff', fontWeight: 600 }}>{data[0].productname}</div>
                <div style={{ width: '100%', display: 'flex', height: '20%', color: ' #00e9bf', fontSize: '95%' }}>{data[0].ratings}<StarIcon style={{ fontSize: '100%' }} /></div>
                <div style={{ width: '100%', display: 'flex', height: '30%', fontSize: '140%', color: ' #ffffff', fontWeight: 600, flexDirection: 'column', borderBottom: '0.2px solid #9A9A9A' }}>
                    <div>{'\u20B9'}{data[0].price.toFixed(2)}</div>
                    <div style={{ fontSize: '55%' }}>(Incl. all Taxes)</div>
                </div>
                <div style={{ color: ' #9A9A9A', height: '15%', fontWeight: 700, fontSize: '90%', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{marginRight:10}}><s>MRP: {'\u20B9'}{data[0].offerprice.toFixed(2)}</s></div>
                    <div style={{color:' #ffffff',fontSize:'100%',}}>(Save {'\u20B9'}{discount.toFixed(2)}, {percent.toFixed(2)}% off)</div>
                </div>
            </div>
        </div>
    </>)
}