import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Featured = async () => {

    const res = await fetch('http://localhost:5000/facilities');
    const datas = await res.json();

    return (
        <div>
            <h1>Featured Facilities</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    datas.slice(0, 6).map(data =>
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

export default Featured;