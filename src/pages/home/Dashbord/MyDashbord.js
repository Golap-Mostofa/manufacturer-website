import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyDashbord = () => {
    const [user, loading, error] = useAuthState(auth);
    const [booked, setBooked] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/product?parbooked${user.email}`)
                .then(res => res.json())
                .then(data => setBooked(data))
        }
    }, [user])

    return (
        <div>
            <h2>My Order:{booked.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                        booked.map(a=> <tr>
                            <th>1</th>
                            <td>{user?.displayName}</td>
                            <td>{a.avaleble}</td>
                            <td>Blue</td>
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