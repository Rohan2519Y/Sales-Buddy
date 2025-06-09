import Dropdown from "./Dropdown";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import Checkbox from '@mui/material/Checkbox';

export default function MultipleDropdown() {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');

    const [openDropdown, setOpenDropdown] = useState(null);
    const [open, setOpen] = useState(false);

    const toggleDropdown = (dropdownId) => {
        setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const categories = ['Android', 'iOS', 'Windows', 'Mac'];
    const storage = ['64GB', '128GB', '256GB', '512GB', '1TB'];
    const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Motorola", "Nokia", "Google", "Huawei", "Sony", "Asus", "Infinix", "Tecno", "Lenovo", "Honor", "iQOO", "Lava", "Micromax"];
    const tower = ['5G', '4G', '3G', '2G'];
    const discount = ['BELOW 20%', '20% TO 40%', '40% TO 60%', '60% TO 80%', '80% AND ABOVE'];
    const delivery = ['EXPRESS DELIVERY', 'HOME DELIVERY'];

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '85%', display: 'flex', overflowX: md ? 'auto' : '', scrollbarWidth: md ? 'none' : '' }}>
                <div style={{ margin: '0.3%', cursor: 'pointer' }}>
                    <Dropdown
                        data={categories}
                        title='Categories'
                        isOpen={openDropdown === 'categories'}
                        onToggle={() => toggleDropdown('categories')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div style={{ margin: '0.3%', cursor: 'pointer' }}>
                    <Dropdown
                        data={brands}
                        title='Brands'
                        isOpen={openDropdown === 'brands'}
                        onToggle={() => toggleDropdown('brands')}
                    />
                </div>
                <div style={{ margin: '0.3%', cursor: 'pointer' }}>
                    <Dropdown
                        data={storage}
                        title='Internal Storage'
                        isOpen={openDropdown === 'storage'}
                        onToggle={() => toggleDropdown('storage')}
                    />
                </div>
                <div style={{ margin: '0.3%', cursor: 'pointer' }}>
                    <Dropdown
                        data={tower}
                        title='Cellular Tower'
                        isOpen={openDropdown === 'tower'}
                        onToggle={() => toggleDropdown('tower')}
                    />
                </div>
                <div style={{ margin: '0.3%', cursor: 'pointer' }}>
                    <Dropdown
                        data={discount}
                        title='Discount'
                        isOpen={openDropdown === 'discount'}
                        onToggle={() => toggleDropdown('discount')}
                    />
                </div>
                <div style={{ margin: '0.3%', cursor: 'pointer' }}>
                    <Dropdown
                        data={delivery}
                        title='Delivery'
                        isOpen={openDropdown === 'delivery'}
                        onToggle={() => toggleDropdown('delivery')}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: 35, background: '#373737', borderRadius: 10, margin: '0.2%' }}>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 130, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer' }}>
                        All Filters <FilterListIcon style={{ fontSize: '140%' }} />
                    </button>
                </div>
                <div style={{ position: 'relative', display: 'inline-block',marginLeft:'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: 35, background: '#373737', borderRadius: 10, margin: '0.2%' }}>
                        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 140, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer' }}>
                            Sort By <b>Feature</b> <KeyboardArrowDownIcon style={{ fontSize: '100%' }} />
                        </button>
                    </div>
                    {open && !md && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 5, marginTop: '1%', scrollbarWidth: 'thin', backgroundColor: '#373737' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 170 }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                    <div style={{ width: '30%' }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                    <div style={{ width: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}