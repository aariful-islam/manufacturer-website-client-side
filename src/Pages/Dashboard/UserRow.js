import React from 'react';

const UserRow = ({ user }) => {
    const {email,role}=user;
    const makeAdmin = () => {
        

        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
            })

    }
    return (
        <div>
           
           <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>

        </div>
    );
};

export default UserRow;