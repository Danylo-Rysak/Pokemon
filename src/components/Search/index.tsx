// Libs
import { FC, Dispatch, SetStateAction } from 'react';
import { TextField } from '@mui/material';

type SearchInputProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchInput: FC<SearchInputProps> = ({ query, setQuery }) => (
  <TextField
    label="Search by name"
    variant="standard"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export default SearchInput;
