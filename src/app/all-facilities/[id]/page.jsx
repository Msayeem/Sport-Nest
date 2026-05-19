import BookButton from '@/Components/BookButton';
import Image from 'next/image';
import React from 'react';

const FacilitiesDetailPage = async({params}) => {

const {id}=await params;
const res=await fetch(`http://localhost:5000/facilities/${id}`)
const data=await res.json();




    return (
        <div>
            <Image src={data.imageUrl} width={200} height={200} alt={data.facilityName}></Image>
        <h1>{data.facilityName}</h1>
        <p>Sport:{data.sport}</p>
        <p>Time slot: {data.timeSlot}</p>
        <p>Hours: {data.hours}</p>
        <h1>Price: ${data.totalPrice}</h1>

        <BookButton bookingData={data}></BookButton>
        </div>
    );
};

export default FacilitiesDetailPage;