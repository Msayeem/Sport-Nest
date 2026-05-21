import React from 'react';
import { CalendarCheck, ShieldCheck, Clock, CircleDollarSign } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Instant Booking',
            description: 'No more waiting or making endless phone calls. Secure your time slot instantly in under a minute.',
            icon: CalendarCheck,
        },
        {
            title: 'Verified Facilities',
            description: 'We manually vet every single turf, court, and lane to guarantee accurate high-quality pictures and premium amenities.',
            icon: ShieldCheck,
        },
        {
            title: 'Real-time Availability',
            description: 'Live schedule tracking ensures you never experience double-bookings or unexpected maintenance delays.',
            icon: Clock,
        },
        {
            title: 'Transparent Pricing',
            description: 'What you see is what you pay. Enjoy flat rates, zero hidden service fees, and seamless cancellation options.',
            icon: CircleDollarSign,
        }
    ];

    return (
        <section className="mx-auto w-[90%] max-w-7xl py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-center">
                
                {/* Left Column Text Banner */}
                <div className="lg:pr-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                        The SportNest Advantage
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Built for athletes, run by professionals.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        We strip away the friction of booking community sports spaces so you can focus strictly on what matters: the game.
                    </p>
                </div>

                {/* Right Columns: Feature Item Cards Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={index} 
                                className="group flex gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-slate-50"
                            >
                                {/* Left Side Icon Container */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                
                                {/* Right Side Content Area */}
                                <div className="space-y-1">
                                    <h3 className="font-bold text-slate-900 transition-colors group-hover:text-green-700">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;