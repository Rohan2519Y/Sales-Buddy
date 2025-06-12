import Dropdown from "./Dropdown";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List';
import Checkbox from '@mui/material/Checkbox';
import Filter from "./Filter";

export default function MultipleDropdown() {
    const theme = useTheme();
    const md = useMediaQuery('(max-width:1200px)');
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openDropdown, setOpenDropdown] = useState(null);
    const [open, setOpen] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const dropdownContainerRef = useRef(null);
    const toggleDropdown = (dropdownId) => {
        setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
    };

    const handleFilterClick = () => {
        setShowFilter(!showFilter);
    };

    const handleCloseFilter = () => {
        setShowFilter(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const categories = ['Android', 'iOS', 'Windows', 'Mac'];
    const price = ['0 TO 9,999', '10,000 TO 19,999', '20,000 TO 29,999', '30,000 TO 39,999', '40,000 TO 49,999', '50,000 TO 59,999', '60,000 TO 69,999', '70,000 TO 79,999', '80,000 TO 89,999', '90,000 TO 1,00,000']
    const storage = ['64GB', '128GB', '256GB', '512GB', '1TB'];
    const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Motorola", "Nokia", "Google", "Huawei", "Sony", "Asus", "Infinix", "Tecno", "Lenovo", "Honor", "iQOO", "Lava", "Micromax"];
    const tower = ['5G', '4G', '3G', '2G'];
    const discount = ['10% or more', '20% or more', '30% or more', '50% or more'];
    const deliverymode = ['Express Delivery', 'Home Delivery',];
    const processorbrand = ['Qualcomm', 'MediaTek', 'Apple', 'Samsung', 'UNISOC'];
    const screensize = ['5.0" - 5.5"', '5.6" - 6.0"', '6.1" - 6.5"', '6.6" and above'];
    const color = ['Black', 'Blue', 'Green', 'Red', 'White', 'Purple'];
    const refreshrate = ['60Hz', '90Hz', '120Hz', '144Hz'];
    const mobiletype = ['Smartphone', 'Feature Phone', 'Gaming Phone', 'Foldable'];
    const sim = ['Single SIM', 'Dual SIM', 'Triple SIM'];
    const rearcamera = ['Single', 'Dual', 'Triple', 'Quad'];
    const screentype = ['LCD', 'IPS', 'AMOLED', 'Super AMOLED', 'OLED'];
    const frontcamera = ['8MP', '12MP', '16MP', '32MP'];
    const cores = ['Dual Core', 'Quad Core', 'Octa Core', 'Deca Core'];
    const design = ['Bar', 'Foldable', 'Slider'];

    const filterData = [
        { key: 'categories', title: 'Categories', data: categories },
        { key: 'price', title: 'Price', data: price },
        { key: 'brands', title: 'Brands', data: brands },
        { key: 'storage', title: 'Internal Storage', data: storage },
        { key: 'tower', title: 'Cellular Technology', data: tower },
        { key: 'discount', title: 'Discount', data: discount },
        { key: 'deliverymode', title: 'Delivery Mode', data: deliverymode },
        { key: 'processorbrand', title: 'Processor Brand', data: processorbrand },
        { key: 'screensize', title: 'Screen Size', data: screensize },
        { key: 'color', title: 'Color', data: color },
        { key: 'refreshrate', title: 'Refresh Rate', data: refreshrate },
        { key: 'mobiletype', title: 'Mobile Type', data: mobiletype },
        { key: 'sim', title: 'Number of SIM Support', data: sim },
        { key: 'rearcamera', title: 'Rear Camera Configuration', data: rearcamera },
        { key: 'screentype', title: 'Screen Type', data: screentype },
        { key: 'frontcamera', title: 'Front Camera Configuration', data: frontcamera },
        { key: 'cores', title: 'Number of Cores', data: cores },
        { key: 'design', title: 'Mobile Design', data: design },
    ];

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
                ref={dropdownContainerRef}
                style={{ width: matches ? '90%' : '85%', display: 'flex', overflowX: md ? 'auto' : '', scrollbarWidth: md ? 'none' : '' }}
            >
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
                {matches ? <>
                    <div style={{ margin: 5, cursor: 'pointer' }}>
                        <Dropdown
                            data={discount}
                            title='Discount'
                            isOpen={openDropdown === 'discount'}
                            onToggle={() => toggleDropdown('discount')}
                        />
                    </div>
                    <div style={{ margin: 5, cursor: 'pointer' }}>
                        <Dropdown
                            data={deliverymode}
                            title='Delivery Mode'
                            isOpen={openDropdown === 'deliverymode'}
                            onToggle={() => toggleDropdown('deliverymode')}
                        />
                    </div></> : <></>}
                {!matches ? <><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: 35, background: '#373737', borderRadius: 10, margin: 5 }}>
                    <button onClick={handleFilterClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 130, height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer' }}>
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
                            <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 5, marginTop: '1%', scrollbarWidth: 'thin', backgroundColor: ' #373737', overflowY: 'visible' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 170, flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '99%', height: 40, background: '#373737', color: '#fff', fontSize: '100%' }}>
                                        <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Checkbox {...label} style={{ color: ' #12daa8' }} /></div>
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
                    </div></> : <></>}

            </div>
            {matches ? <div style={{ width: '100%', height: 55, background: ' #393939', display: 'flex', position: 'fixed', bottom: 0, overflowX: 'hidden', zIndex: 500 }}>
                <div style={{ width: '100%', height: 55, background: ' #393939', display: 'flex', justifyContent: 'space-between', alignItems: 'center' , fontFamily: '"Raleway", sans-serif'}}>
                    <div style={{ width: '50%', height: 55, color: 'white', background: ' #393939', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20, cursor: 'pointer' }} onClick={() => setOpen(!open)}><ListIcon />Sort</div>
                    <div style={{ width: 1, height: 55, background: 'white' }}></div>
                    <div style={{ width: '50%', height: 55, color: 'white', background: ' #393939', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20, cursor: 'pointer' }}><FilterListIcon />Filter</div>
                </div>
            </div> : <></>}

            {showFilter && <Filter onClose={handleCloseFilter} filterData={filterData} />}
        </div>
    );
}