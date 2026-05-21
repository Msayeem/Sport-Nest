import BookButton from '@/Components/BookButton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { Clock, DollarSign, Dumbbell, MapPin, ShieldCheck, Activity, CalendarDays } from 'lucide-react';

const FacilitiesDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
        headers:{
            authorization: `${process.env.NEXT_PUBLIC_API_SECRET}`
        }
        
    });
    const data = await res.json();

    return (
        <main className="min-h-screen bg-slate-50/60 py-12">
            <div className="mx-auto w-[90%] max-w-6xl space-y-8">
                
                {/* Modern Header Section */}
                <div className="border-b border-slate-200 pb-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 mb-3">
                        <Dumbbell className="h-3.5 w-3.5" />
                        <span>{data.sport} Arena</span>
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        {data.facilityName}
                    </h1>
                    <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>Verified Community Sport Center</span>
                    </p>
                </div>

                {/* Main 2-Column Split Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
                    
                    {/* Left Side: Media Display & Core Information Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* High Quality Banner Image Container */}
                        <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-2xl bg-slate-200 border border-slate-100 shadow-sm">
                            <Image 
                                className="h-full w-full object-cover object-center"
                                src={data?.imageUrl} 
                                fill
                                sizes="(max-w-1024px) 100vw, 66vw"
                                alt={data?.facilityName}
                                priority
                            />
                        </div>

                        {/* Facility Details Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-xs">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                    <CalendarDays className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-medium text-slate-400 block uppercase tracking-wider">Available Slots</span>
                                    <p className="font-bold text-slate-800 text-sm mt-0.5">{data?.timeSlot}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-xs">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-medium text-slate-400 block uppercase tracking-wider">Session Length</span>
                                    <p className="font-bold text-slate-800 text-sm mt-0.5">{data?.hours} Hours / booking</p>
                                </div>
                            </div>
                        </div>

                        {/* Informational Banner */}
                        <div className="rounded-xl border border-slate-100 bg-white p-5 flex gap-4 items-start shadow-xs">
                            <div className="p-2 bg-slate-50 text-slate-600 rounded-lg shrink-0 mt-0.5">
                                <Activity className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">Matchday Amenity Standards</h3>
                                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                                    This facility includes fully maintained premium flooring lines, locker room access variants, and on-site lighting rigs setup specifically for high performance competitive games.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Sleek Pricing & Action Checkout Widget */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100/60 lg:sticky lg:top-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Standard Entry Rate</span>
                        
                        {/* Hero Pricing Display */}
                        <div className="flex items-baseline gap-1 text-slate-900 border-b border-slate-100 pb-5 mb-5">
                            <span className="text-4xl font-black tracking-tight text-green-600">${data?.totalPrice}</span>
                            <span className="text-sm font-medium text-slate-400">/ per Hour</span>
                        </div>

                        <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3.5 mb-6 text-xs text-slate-600 border border-slate-100">
                            <ShieldCheck className="h-4 w-4 text-green-600 shrink-0" />
                            <span>Instant scheduling confirmation handled securely by SportNest portal layers.</span>
                        </div>

                        {/* Interactive Trigger Button Core */}
                        <div className="w-full">
                            <BookButton bookingData={data} />
                        </div>

                        <span className="block text-center text-[11px] text-slate-400 mt-3 font-medium">
                            No hidden service fees applied at checkout
                        </span>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default FacilitiesDetailPage;