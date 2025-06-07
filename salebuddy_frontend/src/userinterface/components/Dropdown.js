import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

export default function CategoryDropdown() {

    const [open,setOpen]=useState(false)
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 140, height: 35, background: '#373737', borderRadius: 10,}}>
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '90%', height: '70%', outline: 'none', background: '#393939', border: 'none', borderRadius: 8,color:' #fff'}}>
          Category <ArrowDropDownIcon />
        </button>

      </div>
    </div>
  );
}
