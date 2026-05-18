import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
      <nav className='flex items-center justify-between w-[90%] mx-auto '>

<Link className='text-2xl font-medium' href={'/'}>Sport<span className='font-bold text-green-600'>Nest</span></Link>

<div className='flex items-center gap-3'>
    <Link href={'/'}>Home</Link>
    <Link href={'/all-facilities'}>All Facilities</Link>
    <Link href={'/'}>My Bookings</Link>
    <Link href={'/'}>Add Facility</Link>
    <Link href={'/'}>Manage My Facilities</Link>
</div>

<Link href={'/login'}>Login</Link>
      </nav>
    );
};

export default Nav;