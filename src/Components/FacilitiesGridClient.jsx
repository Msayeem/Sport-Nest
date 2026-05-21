"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, DollarSign, Dumbbell } from 'lucide-react';

const FacilitiesGridClient = ({ facilities }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Empty State Fallback (If a user searches for something that doesn't exist)
    if (!facilities || facilities.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm max-w-md mx-auto">
                <Dumbbell className="mx-auto h-12 w-12 text-slate-300 animate-bounce duration-1000" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">No facilities found</h3>
                <p className="mt-2 text-sm text-slate-500 px-6">
                    We couldn't find matches for your search. Try checking your spelling or adjusting your filters!
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((data, index) => {
                // Calculates safe cascading step delays (capped at 450ms so long pages don't take forever)
                const delay = Math.min(index * 75, 450);

                return (
                    <div
                        key={data._id}
                        style={{ transitionDelay: `${delay}ms` }}
                        className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 ease-out transform
                            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-900/5 hover:ring-green-200
                        `}
                    >
                        {/* Image Container with Floating Sport Tag */}
                        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                            <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                                {data.sport}
                            </span>
                            <Image
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src={data.imageUrl}
                                width={500} // Increased size boundaries to stop browser blur/pixelation
                                height={300}
                                alt={data.facilityName}
                                priority={index < 3} // Boosts LCP performance for first few visible cards
                            />
                        </div>

                        {/* Card Meta Content Block */}
                        <div className="flex flex-1 flex-col p-6">
                            <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-green-600">
                                {data.facilityName}
                            </h2>

                            {/* Clean Pricing Layout Block */}
                            <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4 text-sm">
                                <span className="text-slate-500">Price</span>
                                <div className="flex items-center text-green-600 font-bold text-base">
                                    <DollarSign className="h-4 w-4 shrink-0 stroke-[2.5]" />
                                    <span>{data.totalPrice}</span>

                                </div>
                            </div>

                            {/* Button Anchor - mt-auto guarantees precise uniform heights */}
                            <div className="mt-auto pt-6">
                                <Link
                                    href={`/all-facilities/${data._id}`}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20"
                                >
                                    <Calendar className="h-4 w-4" />
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FacilitiesGridClient;