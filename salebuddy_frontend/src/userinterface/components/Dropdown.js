import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput
} from '@mui/material';

const storageOptions = [
  { label: '256GB', count: 15 },
  { label: '128GB', count: 4 },
  { label: '512GB', count: 14 },
  { label: '1TB', count: 1 }
];

export default function StorageFilter() {
  const [selectedStorage, setSelectedStorage] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedStorage(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="storage-label" sx={{ color: '#00e9bf' }}>Internal Storage (GB)</InputLabel>
      <Select
        labelId="storage-label"
        multiple
        value={selectedStorage}
        onChange={handleChange}
        input={<OutlinedInput label="Internal Storage (GB)" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: '#1e1e1e', // dark background
              color: 'white',
              maxHeight: 300
            }
          }
        }}
        sx={{
          color: '#00e9bf',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00e9bf',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00e9bf',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00e9bf',
          },
        }}
      >
        {storageOptions.map((option) => (
          <MenuItem key={option.label} value={option.label}>
            <Checkbox checked={selectedStorage.indexOf(option.label) > -1} />
            <ListItemText primary={`${option.label} (${option.count})`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
