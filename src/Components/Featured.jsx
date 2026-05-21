import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react'; // Make sure lucide-react is still installed

const Featured = async () => {
    // In production, consider adding error handling or try/catch around this fetch
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const datas = await res.json();

    return (
        <section className="mx-auto w-[90%] max-w-7xl py-20">
            {/* Section Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Featured <span className="text-green-600">Facilities</span>
                </h2>
                <p className="mt-4 text-slate-600">
                    Discover our most popular venues and secure your spot today.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {datas.slice(0, 6).map((data) => (
                    <div 
                        key={data._id} 
                        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/5 hover:ring-green-100"
                    >
                        {/* Image Container with Floating Badge */}
                        <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                            <div className="absolute right-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-green-700 shadow-sm backdrop-blur-sm">
                                {data.sport}
                            </div>
                            <Image 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                src={data.imageUrl} 
                                width={600} 
                                height={400} 
                                alt={data.facilityName}
                            />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
                                {data.facilityName}
                            </h3>
                            
                            {/* mt-auto pushes the button to the bottom so all cards stay equal height */}
                            <div className="mt-auto pt-6">
                                <Link 
                                    href={`/all-facilities/${data._id}`}
                                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition-all duration-300 hover:bg-green-600 hover:text-white"
                                >
                                    Book Now
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;