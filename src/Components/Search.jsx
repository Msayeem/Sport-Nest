import {Label, SearchField} from "@heroui/react";
import React from 'react';

const Search = () => {
    return (
        <div>
              <SearchField name="search">
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search by facility name..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
        </div>
    );
};

export default Search;