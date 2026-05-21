import BookingCard from '@/Components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { CalendarDays, Trophy } from 'lucide-react'; // Clean modern sport icons

const MyBookingsPage = async() => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        headers:{
            'authorization': `${process.env.NEXT_PUBLIC_API_SECRET}`  
        }
    });
    
    console.log(res.status)
    const datas = await res.json();
    console.log(datas)

    return (
        <main className="min-h-screen bg-slate-50/60 py-12">
            <div className="mx-auto w-[90%] max-w-7xl space-y-10">
                
                {/* Modern Dashboard Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            My <span className="text-green-600">Bookings</span>
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Manage your upcoming matches, track reserved timeslots, and view arena passes.
                        </p>
                    </div>

                    {/* Quick Stat Counter Badge */}
                    <div className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl bg-green-50 border border-green-100 px-4 py-2.5 text-sm font-bold text-green-700 shadow-2xs">
                        <CalendarDays className="h-4 w-4" />
                        <span>{datas.length} {datas.length === 1 ? 'Session' : 'Sessions'}</span>
                    </div>
                </div>

                {/* Dashboard Responsive Grid Layout */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
                    {
                        datas.map(data =>
                            <div 
                                key={data._id} 
                                className="transition-transform duration-300 hover:-translate-y-1.5"
                            >
                                <BookingCard data={data} />
                            </div>
                        )
                    }
                </div>
                
            </div>
        </main>
    );
};

export default MyBookingsPage;