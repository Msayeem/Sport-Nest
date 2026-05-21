"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Banner = () => {
  // State to track if the banner content should be animated in
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay for smoother initial load
    const timer = setTimeout(() => setIsAnimate(true), 150);
    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Shared classes for transition effect
  const transitionClasses = "transition-all ease-out transform";
  const durationClasses = "duration-700"; // Entry duration for content

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-green-800 to-green-950 flex items-center justify-center p-6 sm:p-10 text-white overflow-hidden rounded-xl shadow-2xl">
      {/* Subtle decorative background elements */}
      <div className={`absolute top-20 right-10 w-24 h-24 rounded-full bg-green-500/10 blur-xl ${transitionClasses} ${durationClasses} ${isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
      <div className={`absolute bottom-10 -left-10 w-32 h-32 rounded-full bg-green-400/10 blur-2xl ${transitionClasses} ${durationClasses} ${isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} delay-150`}></div>
      <div className={`absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-green-300/15 blur-lg ${transitionClasses} ${durationClasses} ${isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} delay-300`}></div>
      <div className={`absolute bottom-20 right-1/4 w-16 h-16 rounded-full bg-green-600/15 blur-lg ${transitionClasses} ${durationClasses} ${isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} delay-450`}></div>

      <div className="relative max-w-4xl text-center space-y-8 px-4">
        {/* Animated Heading */}
        <h1 className={`text-5xl sm:text-7xl font-extrabold tracking-tighter ${transitionClasses} ${durationClasses} ${isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
          Sport<span className="text-green-500 transition-colors duration-300 group-hover:text-green-400">Nest</span>
        </h1>

        {/* Animated Paragraph with a delay */}
        <p className={`text-lg sm:text-2xl text-green-100 max-w-2xl mx-auto ${transitionClasses} ${durationClasses} delay-200 ${isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          Explore available sports facilities such as football turfs, badminton courts, swimming lanes, or tennis courts, and make bookings for specific dates and time slots.
        </p>

        {/* Animated Button/Link with a longer delay and hover effect */}
        <div className={`${transitionClasses} ${durationClasses} delay-400 ${isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href={'/all-facilities'}
            className="inline-block rounded-full bg-green-600 px-10 py-5 text-xl font-semibold text-white shadow-xl transition-all duration-300 hover:bg-green-500 hover:shadow-green-500/30 hover:-translate-y-1 focus:ring-4 focus:ring-green-400/50"
          >
            Explore Facilities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;