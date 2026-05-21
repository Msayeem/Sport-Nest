"use client"
import React, { useState } from 'react';
import { Card } from "@heroui/react";
import { useRouter } from 'next/navigation';
import { CalendarDays, Clock, DollarSign, XCircle, Trash2 } from 'lucide-react'; // Elegant status icons
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const BookingCard = ({ data, token }) => {
    const router = useRouter();
    const [isCancelling, setIsCancelling] = useState(false);

    const handleCancel = async () => {
    
        setIsCancelling(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${data._id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `${process.env.NEXT_PUBLIC_API_SECRET}`
                }
            });

            if (res.ok) {
                // Refresh the server data inside your MyBookingsPage automatically
                toast.info("Booking cancled")
                router.refresh();
            }
        } catch (error) {
            console.error("Cancellation error:", error);
        } finally {
            setIsCancelling(false);
        }
    };

    return (
        <Card className="w-full bg-white border border-slate-100 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                
                {/* Fixed Dimension Image Area */}
                <div className="relative h-28 w-full sm:w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-50">
                    <img
                        alt={data.facilityName}
                        className="pointer-events-none h-full w-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        src={data.imageUrl}
                    />
                </div>

                {/* Info & Metadata Flow Block */}
                <div className="flex-1 min-w-0 space-y-3 w-full">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 truncate">
                            {data.facilityName}
                        </h3>
                    </div>

                    {/* Data Points Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <CalendarDays className="h-4 w-4 text-slate-400 shrink-0" />
                            <span>Date: <span className="text-slate-800 font-semibold">{data.bookingDate}</span></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                            <span>Slot: <span className="text-slate-800 font-semibold">{data.timeSlot}</span></span>
                        </div>
                    </div>

                    {/* Bottom Action Footer Row */}
                    <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-1">
                        {/* Price Tag styling */}
                        <div className="flex items-center text-green-600 font-extrabold text-base">
                            <DollarSign className="h-4 w-4 shrink-0 stroke-[2.5]" />
                            <span>{data.totalPrice}</span>
                        </div>

                        {/* Redesigned Cancel Interactive Button */}
                        <button 
                            disabled={isCancelling}
                            onClick={handleCancel}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-red-50 px-3.5 py-2 text-xs font-bold text-red-600 transition-all duration-200 hover:bg-red-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Trash2 className="h-3.5 w-3.5" />
                            <span>{isCancelling ? 'Cancelling...' : 'Cancel'}</span>
                        </button>
                        
                    </div>
                    <span className=''><p className='text-amber-500 text-[13px]'>Pending...</p>
</span>
                </div>

            </div>
        </Card>
    );
};

export default BookingCard;