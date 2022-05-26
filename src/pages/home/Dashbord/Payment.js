import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Lod from '../../sheard/Lod';

const Payment = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const url = `http://localhost:5000/product/${id}`;

    const { data: booked, isLoading } = useQuery(['booking', id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Lod></Lod>
    }
    console.log(user);
    return (
        <div>


           
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                        <div class="card-body">
                            <h2>Hello,<span className='text-indigo-500'>{user?.displayName}</span></h2>
                            <h2 className='text-xl font-semibold text-green-600'>{booked.name}</h2>
                            <p><small className='text-success'>{booked.discription}</small></p>
                            <p className='text-red-500'>${booked.price}</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">



                        </div>
                    </div>
                </div>
          
    );
};

export default Payment;