import ManageDetailsForm from '@/Components/ManageDetailsForm';
import React from 'react';

const EditDetailsPage = async({params}) => {

const {id}=await params;
const res=await fetch(`http://localhost:5000/facilities/${id}`)
const data=await res.json();

    return (
        <div>
            <ManageDetailsForm data={data}></ManageDetailsForm>
        </div>
    );
};

export default EditDetailsPage;