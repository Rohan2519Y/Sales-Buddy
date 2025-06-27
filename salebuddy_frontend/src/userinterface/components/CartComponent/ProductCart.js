import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function ProductCart({ item }) {
    return (<>
        <div style={{ width: '100%', height: '80%', display: 'flex' }}>
            <div style={{ width: '23%', hieght: '100%', }}>
                <div style={{ width: '100%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={item.image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            </div>
            <div style={{ width: '77%', hieght: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '75%', width: '100%', display: 'flex' }}>
                    <div style={{ width: '60%', height: '100%', }}>
                        <div style={{ width: '100%', height: 50, fontSize: '110%' }}>{item.productname}</div>
                        <div style={{ width: '100%', height: 25 }}>
                            <Rating name="half-rating-read" defaultValue={item.ratings} precision={0.1} readOnly icon={<StarIcon sx={{ color: ' #00e9bf' }} style={{ fontSize: '70%' }} />} emptyIcon={<StarIcon sx={{ color: 'grey' }} style={{ fontSize: '70%' }} />} />
                        </div>
                    </div>
                    <div style={{ width: '40%', height: '100%', }}>
                    </div>
                </div>
                <div style={{ height: '25%', width: '100%', }}>

                </div>
            </div>
        </div>
    </>)
}