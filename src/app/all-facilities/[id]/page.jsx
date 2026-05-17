import Image from 'next/image';
import React from 'react';

const FacilitiesDetailPage = async({params}) => {

const {id}=await params;
const res=await fetch(`http://localhost:5000/facilities/${id}`)
const data=await res.json();
console.log(data)

    return (
        <div>
            <Image src={data.imageUrl} width={200} height={200} alt={data.facilityName}></Image>
        </div>
    );
};

export default FacilitiesDetailPage;