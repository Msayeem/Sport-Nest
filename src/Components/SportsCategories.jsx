import React from 'react';
import Link from 'next/link';
import { Shield, Zap, Target, Flame } from 'lucide-react';

const SportsCategories = () => {
    const categories = [
        {
            name: 'Football Turfs',
            count: '12 Venues',
            icon: Shield,
            color: 'from-emerald-500 to-green-600',
            href: '/all-facilities?sport=football'
        },
        {
            name: 'Badminton Courts',
            count: '8 Venues',
            icon: Zap,
            color: 'from-green-500 to-teal-600',
            href: '/all-facilities?sport=badminton'
        },
        {
            name: 'Tennis Courts',
            count: '5 Venues',
            icon: Target,
            color: 'from-lime-500 to-green-600',
            href: '/all-facilities?sport=tennis'
        },
        {
            name: 'Swimming Lanes',
            count: '6 Venues',
            icon: Flame,
            color: 'from-teal-500 to-emerald-600',
            href: '/all-facilities?sport=swimming'
        },
    ];

    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto w-[90%] max-w-7xl">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Browse by <span className="text-green-600">Sport</span>
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Find the perfect ground tailored for your favorite game.
                        </p>
                    </div>
                    <Link 
                        href="/all-facilities" 
                        className="group flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700"
                    >
                        View all categories 
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <Link
                                key={index}
                                href={cat.href}
                                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-green-500/30"
                            >
                                {/* Soft colored background burst on hover */}
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                                <div className="relative z-10 flex flex-col gap-4">
                                    {/* Icon Wrapper */}
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    
                                    {/* Text Info */}
                                    <div>
                                        <h3 className="font-bold text-slate-900 transition-colors group-hover:text-green-600">
                                            {cat.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-0.5">
                                            {cat.count}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SportsCategories;