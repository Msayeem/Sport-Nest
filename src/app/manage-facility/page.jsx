import Image from 'next/image';
import Link from 'next/link';
import {Button, Card, CloseButton} from "@heroui/react";
import React from 'react';
import DeleteBtn from '@/Components/DeleteBtn';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


const ManageFacility = async() => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,{
      cache:"no-store"
    });

    const datas = await res.json();

    return (

        <div className='w-[80%] mx-auto'>

           <h1 className="mt-8 mb-5 ml-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Manage <span className="text-green-600">Facilities</span>
                        </h1>

              {

                datas.map(data=>

                    <div key={data._id} className='border-green-400 border mb-5 rounded-2xl'>

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

                      <Card.Title className="pr-8 font-semibold text-[18px]">{data?.facilityName}</Card.Title>

                      <p>Booking Date : <span className='font-medium'>{data.bookingDate}</span></p>

                      <p>Time Slot : <span className='font-medium'>{data.timeSlot}</span></p>

                      <h1>Price : <span className='font-medium'>${data.totalPrice}</span></h1>
                   

                    </Card.Header>

                     <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
       

         <Link className='bg-black text-white px-5 py-1.5 rounded-3xl' href={`/manage-facility/${data._id}`}>Edit</Link>

        <DeleteBtn data={data}></DeleteBtn>

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