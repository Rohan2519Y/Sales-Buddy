import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ProductCard({ data }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');
    const [heart, setHeart] = useState(null);

    return (
        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '4% 0' }}>
            <div
                style={{
                    width: '70%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '2%',
                }}
            >
                {data.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            height: smatches ? 270 : matches ? 330 : 370,
                            width: smatches ? '100%' : matches ? '48%' : '31%',

                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontFamily: '"Inter", sans-serif',
                            marginBottom: '20px'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', height: '60%', width: '100%', position: 'relative', alignItems: 'center', background: ' #393939', borderRadius: 10 }}>
                            <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center' }}>
                                <img src={item.image} style={{ width: 'auto', height: '100%', borderRadius: 8 }} />
                            </div>
                            <div style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        position: 'absolute',
                                        right: '1%',
                                        top: '1%',
                                        cursor: landscape || smatches ? 'default' : 'pointer',
                                        background: 'rgba(0, 0, 0, 0.19)',
                                        borderRadius: '50%',
                                        width: '13%',
                                       height:'18%'
                                    }}>
                                <FavoriteBorderIcon
                                    onMouseEnter={!smatches ? () => setHeart(i) : undefined}
                                    onMouseLeave={!smatches ? () => setHeart(null) : undefined}
                                    style={{
                                        fontSize: matches ? '150%' : '170%',
                                        color: heart === i ? '#00e9bf' : 'white',
                                        
                                        cursor: landscape || smatches ? 'default' : 'pointer',
                                        background: 'rgba(0, 0, 0, 0.19)',
                                        borderRadius: '50%',
                                       
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ width: '100%', height: '30%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: '5%', }}>
                            <div style={{
                                width: '100%',
                                height: smatches ? '55%' : matches ? '50%' : 65,
                                color: 'white',
                                justifyContent: 'center',
                                alignItems:'center',
                                marginBottom: '2%',
                                fontSize: smatches ? '80%' : matches ? '90%' : '100%',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                lineHeight: '1.2',
                                marginTop:5
                            }}>
                                {item.productname}
                            </div>
                            <div style={{ width: '90%', height: '50%', color: 'white', display: 'flex', alignItems: 'center' }}>
                                <div style={{ fontSize: landscape ? '100%' : smatches ? '90%' : matches ? '115%' : "120%", fontWeight: 500 }}>
                                    ₹{item.price.toFixed(2)}
                                </div>
                                <div style={{ width: '100%', display: 'flex', height: '70%', justifyContent: 'center' }}>
                                    <div style={{
                                        width: '90%',
                                        fontSize: landscape ? '75%' : smatches ? '75%' : matches ? '80%' : "88%",
                                        fontWeight: 400,
                                        color: 'grey',
                                        height: '100%',
                                        display: 'flex'
                                    }}>
                                        <s>₹{item.offer.toFixed(2)}</s>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: '90%' }}>
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={item.ratings}
                                    precision={0.1}
                                    readOnly
                                    icon={<StarIcon sx={{ color: '#00e9bf' }} style={{ fontSize: smatches ? '95%' : undefined }} />}
                                    emptyIcon={<StarIcon sx={{ color: 'grey' }} style={{ fontSize: smatches ? '95%' : undefined }} />}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
