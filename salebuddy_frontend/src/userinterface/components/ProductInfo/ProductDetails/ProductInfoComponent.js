import StarIcon from '@mui/icons-material/Star';
export default function ProductInfoComponent({data}){
    return(<>
    <div style={{width:'100%',height:120,background:'blue',display:'flex',flexDirection:'column'}}>
        <div style={{width:'100%',display:'flex',height:'35%',fontSize:'120%',color:' #ffffff',fontWeight:600}}>{data[0].productname}</div>
        <div style={{width:'100%',display:'flex',height:'20%',color:' #00e9bf',fontSize:'100%'}}>{data[0].ratings}<StarIcon style={{fontSize:'100%'}}/></div>
    <div style={{width:'100%',display:'flex',alignItems:'center',height:'45%',fontSize:'140%',color:' #ffffff',fontWeight:600}}>{'\u20B9'}{data[0].price}</div>
    </div>
    </>)
}