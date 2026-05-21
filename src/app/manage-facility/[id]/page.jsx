import ManageDetailsForm from '@/Components/ManageDetailsForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const EditDetailsPage = async({params}) => {

const {id}=await params;

 const session = await auth.api.getSession({
    headers: await headers()
  });
  const token = session?.token;

const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
    headers: {
      'authorization': `${process.env.NEXT_PUBLIC_API_SECRET}` 
    }
});
const data=await res.json();

    return (
        <div>
            <ManageDetailsForm data={data}></ManageDetailsForm>
        </div>
    );
};

export default EditDetailsPage;