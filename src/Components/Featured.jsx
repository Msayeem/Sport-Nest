import Image from 'next/image';
import React from 'react';

const Featured = async() => {

const res=await fetch('http://localhost:5000/facilities');
const datas=await res.json();

    return (
        <div>
            <h1>Featured Facilities</h1>

            {
                datas.map(data=>
                    <div key={data._id}>
                        <Image src={data.imageUrl} width={200} height={100} alt={data.facilityName}></Image>
                        </div>
                )
            }
        </div>
    );
};

export default Featured;