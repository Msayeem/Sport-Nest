import BookingCard from '@/Components/BookingCard';
import React from 'react';

const MyBookingsPage = async() => {

const res= await fetch('http://localhost:5000/bookings');
const datas=await res.json();
console.log(datas)

    return (
        <div>
            <h1>My bookings</h1>

            <div>
                {
                    datas.map(data=>
                        <BookingCard key={data._id} data={data}></BookingCard>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;