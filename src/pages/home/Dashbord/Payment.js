import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Lod from '../../sheard/Lod';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`;
    const { data: booked, isLoading } = useQuery(['booking', id], () => fetch(url).then(res => res.json()))
    console.log(booked);
    if (isLoading) {
        return <Lod></Lod>
    }
    return (
        <div>
            <h2 className='text-2xl font-semibold text-green-600'>please pay for:{id}</h2>
            
        </div>
    );
};

export default Payment;