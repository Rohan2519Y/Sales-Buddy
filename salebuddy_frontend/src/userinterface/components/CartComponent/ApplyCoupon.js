import PercentIcon from '@mui/icons-material/Percent';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function ApplyCoupon(){
    return(<>
        <div style={{display:'flex',width:'100%',justifyContent:'flex-end',marginBottom:20}}>
            <div style={{display:'flex',width:'80%',height:70,justifyContent:'space-between',alignItems:'center',paddingRight:10,paddingLeft:10,background:' #ffffff'}}>
                <div style={{display:'flex'}}><PercentIcon style={{border:'2px solid black',borderRadius:'50%',marginRight:5}}/><div style={{fontWeight:700,fontSize:'130%'}}>Apply Coupon</div></div>
                <KeyboardArrowRightIcon style={{fontSize:'250%'}}/>
            </div>
        </div>
    </>)
}