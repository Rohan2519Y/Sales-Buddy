import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductSpecializationComponent() {
    return (<>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Accordion sx={{ backgroundColor: ' #191919', color: 'white', border: '1px solid  #9A9A9A', borderRadius: 7, width: '80%', boxShadow: 'none', minHeight: 70, paddingLeft: 2,paddingRight:2 }}>
                <AccordionSummary sx={{ display: 'flex', minHeight: 70, alignItems: 'center', width: '95%' }} expandIcon={<ExpandMoreIcon sx={{ color: 'white', fontSize: 40, fontWeight: 400 }} />} aria-controls="panel1-content" id="panel1-header">
                    <Typography sx={{ fontWeight: 'bold', alignSelf: 'center' }}>Specifications</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: 100, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', height: '30%', fontWeight: 600, display: 'flex', fontSize: '1.25rem' }}>MOBILE CATEGORY</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '70%' }}>
                                    <div style={{ width: '33.3%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ fontSize: '0.95em' }}>Mobile Type</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>Android Smartphone</div>
                                    </div>
                                    <div style={{ width: '33.4%', height: '100%' }}>
                                        <div style={{ fontSize: '0.95em' }}>Mobile Design</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>Touch</div>
                                    </div>
                                    <div style={{ width: '33.3%', height: '100%' }}></div>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: 0.5, background: ' #9A9A9A', marginTop: 10, marginBottom: 20 }}></div>
                            <div style={{ width: '100%', height: 100, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', height: '30%', fontWeight: 600, display: 'flex', fontSize: '1.25rem' }}>MANUFACTURER DETAILS</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '70%' }}>
                                    <div style={{ width: '33.3%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ fontSize: '0.95em' }}>Brand</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>Vivo</div>
                                    </div>
                                    <div style={{ width: '33.4%', height: '100%' }}>
                                        <div style={{ fontSize: '0.95em' }}>Model Series</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>Y29</div>
                                    </div>
                                    <div style={{ width: '33.3%', height: '100%' }}>
                                        <div style={{ fontSize: '0.95em' }}>Model Number</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>PD2421BF</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: 0.5, background: ' #9A9A9A', marginTop: 10, marginBottom: 20 }}></div>
                            <div style={{ width: '100%', height: 100, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', height: '30%', fontWeight: 600, display: 'flex', fontSize: '1.25rem' }}>Product Dimensions (Open)</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '70%' }}>
                                    <div style={{ width: '33.3%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ fontSize: '0.95em' }}>Dimensions In CM (WxDxH)</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>7.61 x 0.81 x 16.57</div>
                                    </div>
                                    <div style={{ width: '33.4%', height: '100%' }}>
                                        <div style={{ fontSize: '0.95em' }}>Product Weight</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>0.198 Kg</div>
                                    </div>
                                    <div style={{ width: '33.3%', height: '100%' }}>
                                        <div style={{ fontSize: '0.95em' }}>Dimensions In Inches (WxDxH)</div>
                                        <div style={{ fontWeight: 600, fontSize: '1em' }}>3.00 x 0.32 x 6.52</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </>);
}