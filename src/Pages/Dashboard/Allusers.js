import React, { useEffect, useState } from 'react';

const Allusers = () => {
    const [users,setusers]= useState([])
    useEffect( ()=>{
        fetch('http://localhost:4000/user')
        .then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    return (
        <div>
            <h1>{users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">


                    <thead>
                        <tr>
                           

                           
                            <th>Email</th>
                            <th>Make admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr>
                                
                                <td>{user.email}</td>
                                
                                <td><button className='btn btn-primary'>Make Admin</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;