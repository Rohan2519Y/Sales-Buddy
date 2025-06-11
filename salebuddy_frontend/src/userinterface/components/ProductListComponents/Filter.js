import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function Filter({ onClose, filterData }) {
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
    const sections = filterData

    return (
        <>
            {!matches && (
                <div onClick={handleBackdropClick} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div style={{ width: 460, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', boxShadow: '-2px 0 8px rgba(0,0,0,0.2)', depthpadding: '20px', paddingoverflowY: 'auto' }}>
                        <div style={{ width: '100%', display: 'flex', height: '90%', flexDirection: 'column', overflowY: 'auto', alignItems: 'center' }}>
                            <div style={{ width: '85%', display: 'flex', height: '90%', flexDirection: 'column', }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 50, alignItems: 'center', position: 'sticky', top: 0, background: 'white', zIndex: 10, paddingBottom: 10, borderBottom: '0.5px solid black' }}>
                                    <div style={{ width: '70%', height: 50, display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 600 }}>All Filters</div>
                                    <div style={{ width: '30%', height: 50, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: 40, fontWeight: 600 }}><CloseIcon /></div>
                                </div>
                                {sections.map((section) => (
                                    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                                        <div onClick={() => toggleSection(section.key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 24, fontWeight: '500', height: 50 }} >
                                            {section.title}
                                            {openSection === section.key ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </div>
                                        {openSection === section.key && (
                                            <div style={{ width: '100%' }}>
                                                {section.data.map((item) => (
                                                    <div style={{ display: 'flex', alignItems: 'center', }}>
                                                        <Checkbox style={{ color: ' #12daa8' }} />
                                                        <span style={{ fontSize: 20 }}>
                                                            {section.key === 'price' ? `₹${item}` : item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div style={{ width: '100%', height: 0.5, background: 'black', marginTop: 10, marginBottom: 10 }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}