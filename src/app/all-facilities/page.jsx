
import Search from '@/Components/Search';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllFacilitiesPage = async({searchParams}) => {

    const {search, sport}=await searchParams;

      const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (sport) params.set('sport', sport);

const res = await fetch(`http://localhost:5000/facilities?${params.toString()}`);
    const datas = await res.json();

    return (
   <div>
    <h1 className='text-2xl'>All Facilities</h1>
    <div>
        <Search></Search>
    </div>
         <div>
            {
                datas.map(data=>
                    <div key={data._id} className='border'>
                            <Image className='mx-auto' src={data.imageUrl} width={200} height={100} alt={data.facilityName}></Image>
                            <h1>{data.facilityName}</h1>
                            <p>Sport: {data.sport}</p>
                            <Link href={`/all-facilities/${data._id}`}>Book Now</Link>
                        </div>
                )
            }
        </div>
   </div>
    );
};

export default AllFacilitiesPage;