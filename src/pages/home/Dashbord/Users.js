import React from 'react';
import { useQuery } from 'react-query';
import Lod from '../../sheard/Lod';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/user`).then(res => res.json()))
    if (isLoading) {
        // <Lod></Lod>
    }
    return (
        <div>
            <h2 className='text-2xl'>all user{users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Make admin</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {
                        users.map(user=><UserRow
                        key={user._id}
                        user={user}
                        ></UserRow>)
                       }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;