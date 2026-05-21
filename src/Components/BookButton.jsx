"use client"

import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';



const BookButton = ({ bookingData }) => {



  const router = useRouter();

  const onSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const book = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {

      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.NEXT_PUBLIC_API_SECRET}`
      },

      body: JSON.stringify(book)

    });



    const result = await res.json();


    console.log(result)


    if (result.insertedId) {

      toast.success('Booking confirmed!');
      router.push('/all-facilities')

    }

  }



  return (

    <div>

      <form

        onSubmit={onSubmit}

        className="p-10 space-y-8"

      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Destination Name */}

          <div className="md:col-span-2">

            <TextField defaultValue={bookingData?.facilityName} name="FacilityName" isRequired>

              <Label>Facility Name</Label>

              <Input placeholder="Riverside Tennis Court" className="rounded-2xl" />

              <FieldError />

            </TextField>





          </div>





          <TextField defaultValue={bookingData?.hours} name="hours" type="number" isRequired>

            <Label>Hours</Label>

            <Input

              type="number"

              placeholder="e.g. 2"

              className="rounded-2xl"

            />

            <FieldError />

          </TextField>





          <TextField defaultValue={bookingData?.bookingDate} name="bookingDate" type="date" isRequired>

            <Label>Date</Label>

            <Input

              type="date"



              className="rounded-2xl"

            />

            <FieldError />

          </TextField>



          {/* Duration */}





          <div>

            <Select



              name="timeSlot"

              isRequired

              className="w-full"

              placeholder="Select Time Slots"



            >

              <Label>Available Time Slots</Label>

              <Select.Trigger className="rounded-2xl">

                <Select.Value />

                <Select.Indicator />

              </Select.Trigger>

              <Select.Popover>



                <ListBox>

                  <ListBox.Item id="06:00-07:00" textValue="06:00 AM – 07:00 AM">

                    06:00 AM – 07:00 AM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="07:00-08:00" textValue="07:00 AM – 08:00 AM">

                    07:00 AM – 08:00 AM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="08:00-09:00" textValue="08:00 AM – 09:00 AM">

                    08:00 AM – 09:00 AM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="09:00-10:00" textValue="09:00 AM – 10:00 AM">

                    09:00 AM – 10:00 AM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="10:00-11:00" textValue="10:00 AM – 11:00 AM">

                    10:00 AM – 11:00 AM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="11:00-12:00" textValue="11:00 AM – 12:00 PM">

                    11:00 AM – 12:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="12:00-13:00" textValue="12:00 PM – 01:00 PM">

                    12:00 PM – 01:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="13:00-14:00" textValue="01:00 PM – 02:00 PM">

                    01:00 PM – 02:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="14:00-15:00" textValue="02:00 PM – 03:00 PM">

                    02:00 PM – 03:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="15:00-16:00" textValue="03:00 PM – 04:00 PM">

                    03:00 PM – 04:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="16:00-17:00" textValue="04:00 PM – 05:00 PM">

                    04:00 PM – 05:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="17:00-18:00" textValue="05:00 PM – 06:00 PM">

                    05:00 PM – 06:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="18:00-19:00" textValue="06:00 PM – 07:00 PM">

                    06:00 PM – 07:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="19:00-20:00" textValue="07:00 PM – 08:00 PM">

                    07:00 PM – 08:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                  <ListBox.Item id="20:00-21:00" textValue="08:00 PM – 09:00 PM">

                    08:00 PM – 09:00 PM

                    <ListBox.ItemIndicator />

                  </ListBox.Item>

                </ListBox>



              </Select.Popover>

            </Select>

          </div>



          <TextField defaultValue={bookingData?.imageUrl} name="imageUrl" isRequired>

            <Label>Image URL</Label>

            <Input

              type="url"

              placeholder="https://example.com/cricket-field.jpg"

              className="rounded-2xl"

            />

            <FieldError />

          </TextField>



          <TextField defaultValue={bookingData?.totalPrice} name="totalPrice" type="number" isRequired>

            <Label>Total price</Label>

            <Input

              type="number"

              placeholder="45"

              className="rounded-2xl"

            />

            <FieldError />

          </TextField>





        </div>



        {/* Buttons */}



        <Button

          type="submit"

          variant="outline"

          className="w-full bg-green-600 text-white text-[17px] rounded-[10px] font-semibold"

        >

          Confirm Booking

        </Button>

      </form>

    </div>

  );

};



export default BookButton;