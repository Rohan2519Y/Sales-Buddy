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
    const price = ['0 TO 9,999', '10,000 TO 19,999', '20,000 TO 29,999', '30,000 TO 39,999', '40,000 TO 49,999', '50,000 TO 59,999', '60,000 TO 69,999', '70,000 TO 79,999', '80,000 TO 89,999', '90,000 TO 1,00,000']
    const storage = ['64GB', '128GB', '256GB', '512GB', '1TB'];
    const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Motorola", "Nokia", "Google", "Huawei", "Sony", "Asus", "Infinix", "Tecno", "Lenovo", "Honor", "iQOO", "Lava", "Micromax"];
    const tower = ['5G', '4G', '3G', '2G'];

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '85%', display: 'flex', overflowX: md ? 'auto' : '', scrollbarWidth: md ? 'none' : '' }}>
                <div style={{ margin: 5, cursor: 'pointer' }}>
                    <Dropdown
                        data={categories}
                        title='Categories'
                        isOpen={openDropdown === 'categories'}
                        onToggle={() => toggleDropdown('categories')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div style={{ margin: 5, cursor: 'pointer' }}>
                    <Dropdown
                        data={price}
                        title='Price'
                        isOpen={openDropdown === 'price'}
                        onToggle={() => toggleDropdown('price')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div style={{ margin: 5, cursor: 'pointer' }}>
                    <Dropdown
                        data={brands}
                        title='Brands'
                        isOpen={openDropdown === 'brands'}
                        onToggle={() => toggleDropdown('brands')}
                    />
                </div>
                <div style={{ margin: 5, cursor: 'pointer' }}>
                    <Dropdown
                        data={storage}
                        title='Internal Storage'
                        isOpen={openDropdown === 'storage'}
                        onToggle={() => toggleDropdown('storage')}
                    />
                </div>
                <div style={{ margin: 5, cursor: 'pointer' }}>
                    <Dropdown
                        data={tower}
                        title='Cellular Technology'
                        isOpen={openDropdown === 'tower'}
                        onToggle={() => toggleDropdown('tower')}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: 35, background: '#373737', borderRadius: 10, margin: 5 }}>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 130, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer' }}>
                        All Filters <FilterListIcon style={{ fontSize: '140%' }} />
                    </button>
                </div>
                <div style={{ position: 'relative', display: 'inline-block', marginLeft: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: 35, background: '#373737', borderRadius: 10, margin: '0.2%' }}>
                        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 140, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer' }}>
                            Sort By <b>Feature</b> <KeyboardArrowDownIcon style={{ fontSize: '100%' }} />
                        </button>
                    </div>
                    {open && !md && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 5, marginTop: '1%', scrollbarWidth: 'thin', backgroundColor: '#373737' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 170,flexDirection:'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                    <div style={{ width: '80%', display: 'flex', alignItems: 'center', }}>Latest Arrival</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                    <div style={{ width: '80%', display: 'flex', alignItems: 'center', }}>Discount</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                    <div style={{ width: '80%', display: 'flex', alignItems: 'center', }}>Featured</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                    <div style={{ width: '80%', display: 'flex', alignItems: 'center', }}>Price</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Checkbox {...label} style={{ color: '#12daa8' }} /></div>
                                    <div style={{ width: '80%', display: 'flex', alignItems: 'center', }}>Top Rated</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}