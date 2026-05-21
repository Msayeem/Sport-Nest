import FacilitiesGridClient from '@/Components/FacilitiesGridClient';
import Search from '@/Components/Search';
import React from 'react';


const AllFacilitiesPage = async ({ searchParams }) => {
    const { search, sport } = await searchParams;

    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (sport) params.set('sport', sport);

    let datas = [];
    try {
        const res = await fetch(`${process.env.SERVER_URL}/facilities?${params.toString()}`, {
            cache: 'no-store' // Ensures fresh data shifts when searching or filtering
        });
        if (res.ok) {
            datas = await res.json();
        }
    } catch (error) {
        console.error("Error fetching facilities:", error);
    }

    return (
        <div className="min-h-screen bg-slate-50/50 py-12">
            <div className="mx-auto w-[90%] max-w-7xl space-y-10">
                
                {/* Modernized Header Block */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-100 pb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            All <span className="text-green-600">Facilities</span>
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Discover and instant-book premier arenas, courts, and fields near you.
                        </p>
                    </div>
                    {/* Wrapped search cleanly for better positioning */}
                    <div className="w-full md:w-80 shrink-0">
                        <Search />
                    </div>
                </div>

                {/* Animated Client Grid Container */}
                <FacilitiesGridClient facilities={datas} />
                
            </div>
        </div>
    );
};

export default AllFacilitiesPage;