import PercentIcon from '@mui/icons-material/Percent';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function ApplyCoupon() {
    return (<>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginBottom: 30 }}>
            <div style={{ display: 'flex', width: '80%', height: 70, justifyContent: 'space-between', alignItems: 'center', paddingRight: 30, paddingLeft: 30, background: ' #ffffff', borderRadius: 5, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex' }}><PercentIcon style={{ border: '2px solid black', borderRadius: '50%', marginRight: 10 }} /><div style={{ fontWeight: 700, fontSize: '130%' }}>Apply Coupon</div></div>
                <KeyboardArrowRightIcon style={{ fontSize: '250%' }} />
            </div>
        </div>
    </>)
}