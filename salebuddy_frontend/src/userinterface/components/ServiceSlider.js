import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../backendservices/FetchNodeServices";
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function ServiceSlider() {

    const theme = useTheme();
    const large = useMediaQuery(theme.breakpoints.down('lg'));
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    

    const data = [

        {
            id: 1,
            image:' https://i.ibb.co/fRqLfqQ/mobile-removebg-preview.png',
            title:'Buy Mobile'

        },

        {
            id: 1,
            image:'https://i.ibb.co/p6x5m9Yk/laptop-removebg-preview.png',
            title:'Buy Laptop'

        },


        {
            id: 1,
            image:' https://i.ibb.co/fRqLfqQ/mobile-removebg-preview.png',
            title:'Sell Mobile'

        },

        {
            id: 1,
            image:'https://i.ibb.co/p6x5m9Yk/laptop-removebg-preview.png',
            title:'Sell Laptop'
        }
        
    ];


    const showImages = () => {
        return data.map((item, i) => (
            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center', borderRadius: '10px' }}>
                
                <div style={{}}>
                    <img
                    style={{
                        borderRadius: '10px', width: large ? "70%" : "12rem", height: large ? "60%" : "10rem", objectFit: "contain", outline: 'none',
                        border: 'none'
                    }} src={item.image} />
                </div>

                <div style={{color:'#fff', fontWeight:'bold', marginTop:large?'5px':'10px', fontSize:medium?12:16 , marginLeft:large?'-30%':'0px' }}>{item.title}</div>

            </div>
        ));
    };



    return (
        <div style={{ display:'flex', justifyContent:"space-between" ,alignItems:'center', width: large ? "98%" : "1000px", paddingLeft: large ? "5%" : "0px" ,margin: 'auto', paddingTop: '20px', paddingBottom: "20px" }}>
            {showImages()}
        </div>
    );
}
