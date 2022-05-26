import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Lod from '../../sheard/Lod';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/product/${id}`;

    const { data: booked, isLoading } = useQuery(['booking', id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Lod></Lod>
    }
    console.log(booked);
    return (
        <div>


            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 className='text-2xl font-semibold text-green-600'>{booked.name}</h2>
                            <p>{booked.discription}</p>
                            <p className='text-red-500'>{booked.price}</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">



                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;