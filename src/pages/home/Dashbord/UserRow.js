import React from 'react';

const UserRow = ({user}) => {
    return (
        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td><button class="btn btn-success btn-sm">Make admin</button></td>
            <td>Blue</td>
        </tr>

    );
};

export default UserRow;