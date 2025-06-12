import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';


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
    const sections = filterData;

    return (
        <>
            {!matches && (
                <div onClick={handleBackdropClick} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)', fontFamily: '"Raleway", sans-serif' }}>
                    <div style={{ width: 460, height: '100%', display: 'flex', flexDirection: 'column', background: 'white', boxShadow: '-2px 0 8px rgba(0,0,0,0.2)', padding: '20px', boxSizing: 'border-box', overflowY: 'auto' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
                            <div style={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 50, alignItems: 'center', position: 'sticky', top: '-2.9%', background: 'white', zIndex: 1000, paddingBottom: 10, borderBottom: '2px solid #95a5a6' }}>
                                    <div style={{ fontSize: 30, fontWeight: 600 }}>All Filters</div>
                                    <div onClick={onClose} style={{ cursor: 'pointer', fontSize: 40, fontWeight: 600 }}><CloseIcon /></div>
                                </div>

                                {sections.map((section) => (
                                    <div key={section.key} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                                        <div onClick={() => toggleSection(section.key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 20, fontWeight: '500', height: 50 }} >
                                            {section.title}
                                            {openSection === section.key ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </div>
                                        {openSection === section.key && (
                                            <div style={{ width: '100%' }}>
                                                {section.data.map((item, index) => (
                                                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Checkbox style={{ color: ' #12daa8' }} />
                                                        <span style={{ fontSize: 18 }}>
                                                            {section.key === 'price' ? `₹${item}` : item}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <Divider style={{ width: '100%', marginTop: 7, marginBottom: 7, border: '1px solid #95a5a6' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', bottom: '-2.8%', background: 'white', zIndex: 1100, position: 'sticky', marginTop: 'auto', }}>
                            <div style={{ display: 'flex', width: '94%', justifyContent: 'space-evenly', height: 60 }}>
                                <div style={{ width: '47%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 600, background: '#393939', color: 'white', borderRadius: 5, cursor: 'pointer' }}>CLEAR ALL</div>
                                <div style={{ width: '47%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 600, background: '#12daa8', color: 'black', borderRadius: 5, cursor: 'pointer' }}>APPLY</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {matches && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: '"Raleway", sans-serif', zIndex: 1100, }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', background: 'white', borderBottom: '1px solid #95a5a6' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', height: 60, alignItems: 'center', position: 'sticky', top: 0, background: 'white', zIndex: 1000, }}>
                            <div style={{ fontSize: 25, fontWeight: 600 }}>All Filters</div>
                            <div onClick={onClose} style={{ cursor: 'pointer', fontSize: 40, fontWeight: 600 }}><CloseIcon /></div>
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', height: '100%' }}>
                        <div style={{ width: '40%', height: '100%', background: ' #393939', display: 'flex',justifyContent:'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',overflowY:'auto',height:'100%' }}>
                                {sections.map((section,index) => (
                                    <div key={section.key} onClick={() => toggleSection(section.key)} style={{cursor: 'pointer', minHeight:60,color: openSection === section.key ? ' #393939':' #ffffff',backgroundColor: openSection === section.key ? ' #ffffff' : 'transparent',display:'flex',alignItems:'center',justifyContent:'center' }}>
                                        <div style={{ fontSize: 18, fontWeight: 500,width:'85%' }}>{section.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ width: '60%', height: '100%', background: ' #fff' }}>
                            {sections.find(s => s.key === openSection)?.data.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
                                    <Checkbox style={{ color: '#12daa8' }} />
                                    <span style={{ fontSize: 18 }}>
                                        {openSection === 'price' ? `₹${item}` : item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', bottom: 0, background: 'white', position: 'sticky', marginTop: 'auto', }}>
                        <div style={{ display: 'flex', width: '94%', justifyContent: 'space-evenly', height: 70, alignItems: 'center' }}>
                            <div style={{ width: '38%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 600, background: '#393939', color: 'white', borderRadius: 5, cursor: 'pointer' }}>CLEAR </div>
                            <div style={{ width: '38%', height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 600, background: '#12daa8', color: 'black', borderRadius: 5, cursor: 'pointer' }}>APPLY</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}