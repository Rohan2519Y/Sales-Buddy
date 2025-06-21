import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductSpecializationComponent() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Accordion
                sx={{
                    backgroundColor: ' #191919',
                    color: 'white',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    width: '90%',
                    boxShadow: 'none',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{ fontWeight: 'bold' }}>Specifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
