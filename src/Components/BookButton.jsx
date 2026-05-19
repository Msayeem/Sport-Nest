'use client'
import React from 'react';

const BookButton = ({bookingData}) => {

const handleBook = async () => {
    const { _id, ...dataWithoutId } = bookingData; // ✅ remove facility's _id

    const res = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(dataWithoutId) // ✅ send without _id
    });

    const result = await res.json();
   

    if(result.insertedId){
        alert('Booking successful!'); // ✅ confirm to user
    }
}

    return (
        <button onClick={handleBook}>Book Now</button>
    );
};

export default BookButton;