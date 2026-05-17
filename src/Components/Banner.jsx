import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1>SportNest</h1>
            <p>SportNest allows users to explore available sports facilities such as football turfs, badminton courts, swimming lanes, or tennis courts, and make bookings for specific dates and time slots.</p>
        <Link href={'/'}>Explore Facilities</Link>
        </div>
    );
};

export default Banner;