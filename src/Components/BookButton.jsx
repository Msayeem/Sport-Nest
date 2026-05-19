'use client'
import React from 'react';

const BookButton = ({bookingData}) => {

const handleBook=async()=>{
    const res= await fetch('http://localhost:5000/bookings', {
        method:'POST',
        headers:{
             'content-type':'application/json',
        },
        body:JSON.stringify(bookingData)
    });

    const result=await res.json();
console.log(result)
}

    return (
        <button onClick={handleBook}>Book Now</button>
    );
};

export default BookButton;