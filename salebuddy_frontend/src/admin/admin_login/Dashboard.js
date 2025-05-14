import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Grid2, Paper } from '@mui/material';
import { serverURL } from '../../backendservices/FetchNodeServices';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ServicesInterface from "../../admin/services/ServicesInterface";
import BrandInterface from "../../admin/brands/BrandInterface";
import ProductInterface from "../../admin/products/ProductInterface";
import ProductColorInterface from "../../admin/productColors/ProductColorInterface";
import ProductVarientInterface from "../../admin/productVarient/ProductVarientInterface";
import ProductDetailsInterface from "../../admin/productdetails/ProductDetailsInterface";
import MorePictureInterface from "../../admin/morepictures/MorePictureInterface";
import DisplayAllServices from "../../admin/services/DisplayAllServices";
import DisplayAllProducts from "../../admin/products/DisplayAllProducts";
import DisplayAllBrands from "../../admin/brands/DisplayAllBrands";
import DisplayAllProductColor from "../../admin/productColors/DisplayAllProductColor";
import DisplayAllProductVarient from "../../admin/productVarient/DisplayAllProductVarient";
import DisplayAllProductDetails from "../../admin/productdetails/DisplayAllProductDetails";
import DisplayAllMorePicture from "../../admin/morepictures/DisplayAllMorePicture";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useNavigate } from 'react-router';
export default function Dashboard() {

    const navigate=useNavigate()

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                            Sales Buddy
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid2 container spacing={2} style={{ marginTop: 10 }}>
                <Grid2 size={2}>
                    <Paper style={{ width: "80%", height: 'auto', margin: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <img src={`${serverURL}/images/varun.jpeg`} style={{ width: 90, height: 90, borderRadius: 45 }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, flexDirection: 'column' }}>
                                <div style={{ fontSize: 14, fontWeight: 'bold' }}>Varun Dhawan</div>
                                <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4 }}>varundhawan@gmail.com</div>
                                <div style={{ fontSize: 10, fontWeight: 700, marginTop: 4 }}>9300003085</div>
                            </div>
                            <Divider ></Divider>
                            <div style={{ padding: 5 }}>
                                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallservices')}>
                                            <ListItemIcon>
                                                <img src='/dashboard.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Dashboard' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallservices')}>
                                            <ListItemIcon>
                                                <img src='/ticket.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Services' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallbrands')}>
                                            <ListItemIcon>
                                                <img src='/brands.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Brands' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallproducts')}>
                                            <ListItemIcon>
                                                <img src='/user-interface.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Products' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallproductcolor')}>
                                            <ListItemIcon>
                                                <img src='/colors.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Colors' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallproductvarient')}>
                                            <ListItemIcon>
                                                <img src='/variants.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Variants' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/displayallproductdetails')}>
                                            <ListItemIcon>
                                                <img src='/products-details.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Details' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={()=>navigate('/dashboard/morepictureinterface')}>
                                            <ListItemIcon>
                                                <img src='/images.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='More Picture' />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider ></Divider>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <img src='/switch.png' style={{ height: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Logout' />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Paper>
                </Grid2>
                <Grid2 size={10}>
                    <Routes>
                        <Route element={<ServicesInterface />} path="/serviceinterface" />
                        <Route element={<BrandInterface />} path="/brandinterface" />
                        <Route element={<ProductInterface />} path="/productinterface" />
                        <Route element={<ProductColorInterface />} path="/productcolorinterface" />
                        <Route element={<ProductVarientInterface />} path="/productvarientinterface" />
                        <Route element={<ProductDetailsInterface />} path="/productdetailsinterface" />
                        <Route element={<MorePictureInterface />} path="/morepictureinterface" />
                        <Route element={<DisplayAllServices />} path="/displayallservices" />
                        <Route element={<DisplayAllProducts />} path="/displayallproducts" />
                        <Route element={<DisplayAllBrands />} path="/displayallbrands" />
                        <Route element={<DisplayAllProductColor />} path="/displayallproductcolor" />
                        <Route element={<DisplayAllProductVarient />} path="/displayallproductvarient" />
                        <Route element={<DisplayAllProductDetails />} path="/displayallproductdetails" />
                        <Route element={<DisplayAllMorePicture />} path="/displayallmorepicture" />
                    </Routes>
                </Grid2>
            </Grid2>
        </div>
    );
}