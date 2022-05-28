import React from 'react';

const UserRow = ({ user }) => {
    const {email}=user;
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

                <td className='w-1/2'>{email}</td>

                <td><button onClick={makeAdmin} className='btn btn-primary'>Make Admin</button></td>
            </tr>

        </div>
    );
};

export default UserRow;