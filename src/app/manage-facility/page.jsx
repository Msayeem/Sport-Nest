import DelUp from '@/Components/DelUp';
import Image from 'next/image';
import Link from 'next/link';
import {Button, Card, CloseButton} from "@heroui/react";
import React from 'react';

const ManageFacility = async() => {
    const res = await fetch('http://localhost:5000/facilities');
    const datas = await res.json();
    return (
        <div>
              {
                datas.map(data=>
                    <div key={data._id} className='border'>
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
                     <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          
         <Link href={`/manage-facility/${data._id}`}>Edit</Link>
        </Card.Footer>
                  </div>
                </Card>
                        </div>
                )
            }
        </div>
    );
};

export default ManageFacility;