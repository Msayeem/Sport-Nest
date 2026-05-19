"use client"
import React from 'react';
import {Button, Card, CloseButton} from "@heroui/react";

const BookingCard = ({data}) => {

const handleCancle=async()=>{

  const id = typeof data._id === 'object' ? data._id.$oid : data._id;
  
  console.log('Sending ID:', id);
const res=await fetch(`http://localhost:5000/bookings/${data._id}`, {
  method:'DELETE',
  headers:{
    'content-type':'application/json'
  }
});

const result=await res.json();

}

    return (
        <div>
            
   <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <img
          alt={data.facilityName}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={data.imageUrl}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{data.facilityName}</Card.Title>
          <p>Booking Date: {data.bookingDate}</p>
          <p>Time Slot: {data.timeSlot}</p>
          <h1>Price: ${data.totalPrice}</h1>
         
        </Card.Header>
        <button onClick={handleCancle}>Cancle</button>
      </div>
    </Card>

        </div>
    );
};

export default BookingCard;