import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Parchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { service } = useParams()

    const hendaleBooking = (e) => {
        e.preventDefault()
        const Name = e.target.mini.value
        const phone = e.target.phone.value

        const booking = {
            Name,
            phone,
            service: service,
            name: user.displayName,
            email: user.email

        }
        console.log(booking);
        fetch(`https://gentle-oasis-52101.herokuapp.com/booking`, {
            method: 'POST',
            headers: {
                'content-type': `application/json`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    toast.success('booked your appoin ment ')
                }
                else {
                    toast.error('allrady booked product')
                }
            })

    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className='text-3xl font-bold text-indigo-600 my-16'>booked Your favarite product </h2>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body">

                        <form onSubmit={hendaleBooking} className='grid grid-cols-1 gap-8'>
                            <input disabled type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                            <input disabled type="email" value={user?.email} className="input input-bordered w-full max-w-xs" />
                            <input name='mini' type="text" placeholder="mini product" className="input input-bordered w-full max-w-xs" />
                            <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value={'addTo'} className="btn btn-success w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parchase;