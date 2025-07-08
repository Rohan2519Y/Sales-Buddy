import { Button } from "@mui/material";

export default function AddToCartButton() {
    return (<>
        <div style={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Button style={{ background: ' #00e9bf', width: '35%', color: ' #000000', borderRadius: 5, fontSize: '80%', fontWeight: 600, height: '70%' }}>Buy Now</Button>
            <Button style={{ background: ' #353535', width: '35%', color: ' #ffffff', borderRadius: 5, fontSize: '80%', fontWeight: 600, height: '70%' }}>Add To Cart</Button>
        </div>
    </>)
}