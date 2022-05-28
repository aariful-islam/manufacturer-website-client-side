import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Allusers = () => {
    const [users,setusers]= useState([])
    useEffect( ()=>{
        fetch('https://floating-basin-04314.herokuapp.com/user',{
            method:'GET',
            headers:{
                authorization : `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                   
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

export default Allusers;