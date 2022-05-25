import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyDashbord = () => {
    const [user] = useAuthState(auth);
    const [booked, setBooked] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`https://gentle-oasis-52101.herokuapp.com/product?parbooked${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setBooked(data)
                    // console.log(data);
                })
        }
    }, [user])
    // console.log(booked);
    return (
        <div>
            <h2 className='text-center text-2xl text-success fond-semibold m-8'>My Order review</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>product</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            booked.map((a ,index)=> <tr>
                                <th>1</th>
                                <td>{user?.displayName}</td>
                                <td>{a?.name}</td>
                                <td>{a?._id}</td>
                                <td>
                                    {(a?.price && !a.paid) && <Link 
                                    to={`/dashbord/payment/${a._id}`}><button className='btn btn-success btn-sm'>pay</button></Link>}
                                    {(a?.price && a.paid) && <button className='btn btn-success btn-sm'>pay</button>}
                                </td>
                            </tr>)
                        }

                        {/* <!-- row 2 --> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDashbord;