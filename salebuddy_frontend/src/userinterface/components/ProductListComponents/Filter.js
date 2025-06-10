import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
export default function Filter({ onClose }) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [openSection, setOpenSection] = useState(null);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const toggleSection = (sectionName) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };


    return (
        <>
            {!matches && (
                <div onClick={handleBackdropClick} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div style={{ width: 460, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', boxShadow: '-2px 0 8px rgba(0,0,0,0.2)', depthpadding: '20px', paddingoverflowY: 'auto' }}>
                        <div style={{ width: '85%', display: 'flex', height: '90%',flexDirection:'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <div style={{ width: '70%', height: 50, display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 600 }}>All Filters</div>
                                <div style={{ width: '30%', height: 50, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: 40, fontWeight: 600 }}><CloseIcon /></div>
                            </div>
                            <div style={{width:'100%',height:0.5,background:'black',marginTop:5,marginBottom:5}}></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}