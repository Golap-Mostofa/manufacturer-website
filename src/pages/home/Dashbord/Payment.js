import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    return (
        <div>
            <h2 className='text-2xl font-semibold text-green-600'>please pay for:{id}</h2>
        </div>
    );
};

export default Payment;