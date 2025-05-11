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

export default function DenseAppBar() {
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
                <Grid2 size={3}>
                    <Paper style={{ width: "70%", height: 200, margin: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <img src={`${serverURL}/images/varun.jpeg`} style={{ width: 120, height: 120, borderRadius: 60 }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, flexDirection: 'column' }}>
                                <div style={{ fontSize: 14, fontWeight: 'bold' }}>Varun Dhawan</div>
                                <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4 }}>varundhawan@gmail.com</div>
                                <div style={{ fontSize: 10, fontWeight: 700, marginTop: 4 }}>9300003085</div>
                            </div>
                            <Divider style={{ marginTop: 5 }}></Divider>
                            <div>
                                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <img src='/ticket.png' style={{ width: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Services' />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <img src='/brands.png' style={{ width: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Brands' />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <img src='/user-interface.png' style={{ width: 30 }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Products' />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Paper>
                </Grid2>
                <Grid2 size={9}></Grid2>
            </Grid2>
        </div>
    );
}