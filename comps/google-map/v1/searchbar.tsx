import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { Paper, IconButton, InputBase, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { buildDataSource } from '../../../utils';

const data = buildDataSource();

// TODO: Stylizing could be better.
const Listbox = styled('ul')(({ theme }) => ({
  width: 250,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

// TODO: Create a more robust Auto Complete with two different types of search criteria.
// https://codesandbox.io/s/material-ui-autocomplete-multiple-default-values-vlkxr?file=/demo.js
export default function SearchBar({searchClick}: {searchClick: any}) {
  // TODO: Change to the modal of the built data instead of type any
  const [optionSelected, setOptionSelected] = React.useState<any>(-1);
  
  const {
    getRootProps,    
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: data,
    getOptionLabel: (option) => option.fullname,
  });

  const onChange = (event: any) => {    
    const optionIndex: number = event.target.dataset.optionIndex;
    setOptionSelected(optionIndex);   
    // TODO: Remove for Testing 
    console.log("onChange", event.target.dataset.optionIndex);   
  };

  return (
    <Paper      
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
    <IconButton sx={{ p: '10px' }} aria-label="menu">
      <MenuIcon />
    </IconButton>    
    <div>
      <div {...getRootProps()}>    
          {/* @ts-ignore --- TODO: Type of inputProps() does not match Input Base Props */}
          <InputBase          
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search By Person Name"            
            inputProps={{ ...getInputProps(), 'aria-label': 'search google maps' }}
          />        
      </div>
      {/* TODO: Create a way to get the current selected option (data full info lat/long/title/full name etc) and pass through searchClick(event) */}
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} onClick={(event) => onChange(event)}>
          {/* TODO: Type option this with a modal from data later instead of any type */}
          {(groupedOptions as typeof data).map((option: any, index: number) => (
            <li {...getOptionProps({ option, index })}>{option.fullname}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={(event) => searchClick(event, optionSelected)}>
      <SearchIcon />
    </IconButton>    
  </Paper>   
  );
}
