import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div>
            <Link href={'/'}>Go Home</Link>
        </div>
    );
};

export default notFoundPage;