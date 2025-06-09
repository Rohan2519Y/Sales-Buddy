import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Dropdown({ data, title, isOpen, onToggle }) {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const maxVisibleItems = 5;
    const itemHeight = 40;

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: 35, background: '#373737', borderRadius: 10, margin: '0.2%' }}>
                <button onClick={onToggle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 130, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer' }}>
                    {title} <KeyboardArrowDownIcon style={{ fontSize: '100%' }} />
                </button>
            </div>
            {isOpen && !md && (
                <div style={{ position: 'absolute',top: '100%',left: 0,zIndex: 5,marginTop: '1%',maxHeight: maxVisibleItems * itemHeight,overflowY: data.length > maxVisibleItems ? 'auto' : 'visible',scrollbarColor: 'rgb(115, 115, 115) transparent',scrollbarWidth: 'thin', backgroundColor: '#373737'}}>
                    {data.map((item) => (
                        <div key={item} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 170 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                <div style={{ width: '30%' }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                <div style={{ width: '70%' }}>{item}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
