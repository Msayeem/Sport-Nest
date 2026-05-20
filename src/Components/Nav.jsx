"use client"
import { authClient } from '@/lib/auth-client';
import {Avatar} from "@heroui/react";
import Link from 'next/link';
import React from 'react';
import UserSetting from './UserSetting';

const Nav = () => {

const { 
        data: session
    } = authClient.useSession();

    const user=session?.user;

    return (
      <nav className='flex items-center justify-between w-[90%] mx-auto '>

<Link className='text-2xl font-medium' href={'/'}>Sport<span className='font-bold text-green-600'>Nest</span></Link>

<div className='flex items-center gap-3'>
    <Link href={'/'}>Home</Link>
    <Link href={'/all-facilities'}>All Facilities</Link>
    <Link href={'/my-bookings'}>My Bookings</Link>
    <Link href={'/add-facility'}>Add Facility</Link>
    <Link href={'/manage-facility'}>Manage Facilities</Link>
</div>


{user ?  <UserSetting></UserSetting>: <Link href={'/login'}>Login</Link>}
      </nav>
    );
};

export default Nav;