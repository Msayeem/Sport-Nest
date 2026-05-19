"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select} from '@heroui/react';
import React from 'react';

const AddFacility = () => {

const onSubmit=async(e)=>{
e.preventDefault();
const formData=new FormData(e.currentTarget);
const facility=Object.fromEntries(formData.entries());

const res=await fetch('http://localhost:5000/facilities', {
  method:'POST',
  headers:{
    'content-type':'application/json',
   
  },
  body:JSON.stringify(facility)
});

const data=await res.json();

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
                <TextField name="FacilityName" isRequired>
                  <Label>Facility Name</Label>
                  <Input placeholder="Riverside Tennis Court" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label>Location</Label>
                <Input placeholder="Texas" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="sport"
                  isRequired
                  className="w-full"
                  placeholder="Select Type"
                >
                  <Label>Facility Type</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Tennis
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Basketball
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        Badminton
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Volleyball
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cricket
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Swimming
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="totalPrice" type="number" isRequired>
                <Label>Price/ hour (USD)</Label>
                <Input
                  type="number"
                  placeholder="45"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              <TextField name="capacity" type="number" isRequired>
                <Label>Capacity</Label>
                <Input
                  type="number"
                  placeholder="2"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              
               <TextField name="bookingDate" type="date" isRequired>
                <Label>Date</Label>
                <Input
                  type="date"
                 
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

                    {/* Duration */}
             

        

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/cricket-field.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>

              
              </div>

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

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe your experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              className="w-full bg-green-600 text-white text-[17px] rounded-[10px] font-semibold"
            >
            Add Facility
            </Button>
          </form>
        </div>
    );
};

export default AddFacility;