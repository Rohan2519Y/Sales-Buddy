import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Dropdown() {
    
    const [age,setAge]=useState('')
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<>
        <div>
            <FormControl sx={{ m: 1, minWidth: 120,height:10 }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value="">Category</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    </>)
}