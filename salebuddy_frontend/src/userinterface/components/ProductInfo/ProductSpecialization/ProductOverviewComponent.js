import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles'

export default function ProductSpecializationComponent({ data }) {

    const theme = useTheme();
    const md = useMediaQuery('(max-width:1300px)');
    const sm = useMediaQuery('(max-width:700px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smatches = useMediaQuery(theme.breakpoints.down('sm'));
    const landscape = useMediaQuery('(max-height: 500px) and (min-width: 600px)');

    return (
        <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Accordion sx={{ backgroundColor: '#191919', color: 'white', border: '1px solid #9A9A9A', borderRadius: 7, width: matches ? '85%' : '80%', boxShadow: 'none', minHeight: matches ? 80 : 70, paddingLeft: 2, paddingRight: 2 }}>
                    <AccordionSummary
                        sx={{ display: 'flex', minHeight: matches ? 80 : 70, alignItems: 'center', width: '95%' }}
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white', fontSize: 40, fontWeight: 400 }} />} aria-controls="panel1-content" id="panel1-header">
                        <Typography sx={{ fontWeight: 'bold', alignSelf: 'center' }}>Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                {data.map((section, index) => (
                                    <div key={index} style={{ width: '100%' }}>
                                        <div style={{ width: '100%', height: '30%', fontWeight: matches ? 700 : 600, display: 'flex', fontSize: matches ? '0.8rem' : '1.25rem' }}> {section.section}</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '70%' }}>
                                            {section.items.map((item) => (
                                                <div style={{ width: matches ? '50%' : '33.3%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: matches ? 10 : '' }}>
                                                    <div style={{ fontSize: matches ? '0.83rem' : '0.95em' }}>{item.label}</div>
                                                    <div style={{ fontWeight: 600, fontSize: matches ? '0.87rem' : '1em' }}>{item.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {index < data.length - 1 && (<div style={{ width: '100%', height: 0.5, background: '#9A9A9A', marginTop: 10, marginBottom: 20 }}></div>)}
                                    </div>
                                ))}
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}
