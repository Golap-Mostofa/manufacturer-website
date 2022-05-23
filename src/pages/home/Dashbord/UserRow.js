import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role} = user
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            toast.success('admin successfully')
            
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-success btn-sm">Make admin</button>}</td>
            <td>Blue</td>
        </tr>

    );
};

export default UserRow;