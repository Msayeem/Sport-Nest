"use client";

import { Label, SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { ChevronDown, Trophy } from 'lucide-react';

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [sport, setSport] = useState('');

    useEffect(() => {
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (sport) params.set('sport', sport);
        // Using replace prevents back-button spam
        router.replace(`/all-facilities?${params.toString()}`);
    }, [search, sport, router]);

    return (
        <div className="flex flex-col gap-3 w-full">
            {/* Search Input Box */}
            <div className="w-full">
                <SearchField 
                    name="search" 
                    value={search} 
                    onChange={setSearch}
                    className="w-full"
                >
                    <Label className="sr-only">Search</Label>
                    <SearchField.Group className="flex items-center w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm transition-all focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20 hover:border-slate-300">
                        <SearchField.SearchIcon className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                        <SearchField.Input 
                            className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none" 
                            placeholder="Search facilities..." 
                        />
                        {search && (
                            <SearchField.ClearButton 
                                onPress={() => setSearch('')}
                                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-2 shrink-0"
                            />
                        )}
                    </SearchField.Group>
                </SearchField>
            </div>

            {/* Sport Filter Dropdown */}
            <div className="relative w-full group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Trophy className="h-4 w-4 text-slate-400 group-hover:text-green-600 transition-colors" />
                </div>
                
                <select
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-10 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 cursor-pointer"
                >
                    <option value="">All Sports</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Badminton">Badminton</option>
                </select>

                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
            </div>
        </div>
    );
};

export default Search;