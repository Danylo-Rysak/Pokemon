// Libs
import { Dispatch, FC, SetStateAction } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import { getPokemonsTypesSelector } from 'store/pokemon-service/selectors';

interface FilterByNameProps {
  setSelectedType: Dispatch<SetStateAction<string>>;
}

const FilterByName: FC<FilterByNameProps> = ({ setSelectedType }) => {
  const types = useSelector(getPokemonsTypesSelector);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-name">Filter by type</InputLabel>
      <Select labelId="select-name" id="select">
        {types.map(({ name }, index) => (
          <MenuItem value={name} key={index} onClick={() => setSelectedType(name)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterByName;
