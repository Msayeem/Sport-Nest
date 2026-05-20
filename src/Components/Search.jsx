"use client"
import {Label, SearchField} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';

const Search = () => {

const router=useRouter();
const [search, setSearch]=useState('');
const [sport, setSport]=useState('');

useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (sport) params.set('sport', sport);
    router.push(`/all-facilities?${params.toString()}`);
  }, [search, sport]);

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (search) params.set('search', search);
//     if (sport) params.set('sport', sport);
//     router.push(`/all-facilities?${params.toString()}`);
  

    return (
        <div>
              <SearchField name="search" value={search} onChange={setSearch}>
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search by facility name..." />
        <SearchField.ClearButton onPress={()=>setSearch('')} />
      </SearchField.Group>
    </SearchField>

     <select
        value={sport}
        onChange={(e) => setSport(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Sports</option>
        <option value="Football">Football</option>
        <option value="Cricket">Cricket</option>
        <option value="Basketball">Basketball</option>
        <option value="Tennis">Tennis</option>
        <option value="Badminton">Badminton</option>
      </select>

      
        </div>
    );
};

export default Search;