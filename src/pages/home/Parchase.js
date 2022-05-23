import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Parchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { service } = useParams()

    const hendaleBooking=(e)=>{
        e.preventDefault()
        const Name = e.target.mini.value
        const phone = e.target.phone.value

        const booking={
            Name,
            phone,
            service:service,
            name:user.displayName,
            email:user.email
            
        }
        console.log(booking);
        fetch(`http://localhost:5000/booking`,{
            method:'POST',
            headers:{
                'content-type':`application/json`
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.success){
                toast.error('allrady booked product')
            }
            else{
                toast.success('booked your appoin ment ')
            }
        })

    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
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
    );
};

export default Parchase;