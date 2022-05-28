import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Allusers = () => {
    const [users,setusers]= useState([])
    useEffect( ()=>{
        fetch('http://localhost:4000/user',{
            method:'GET',
            headers:{
                authorization : `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    // const makeAdmin=()=>{
    //     fetch(`http://localhost:4000/user/admin/${users.email}`,{
    //         method:'PUT',
    //         headers:{
    //             authorization : `Bearer ${localStorage.getItem('accesstoken')}`
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(users.email);
    //     })
        
    // }
    return (
        <div>
          
            <div class="overflow-x-auto">
                <table class="table w-full">


                   
                    <tbody>
                        {
                            users.map(user => <tr>
                                
                                {/* <td>{user.email}</td>
                                
                                <td><button onClick={makeAdmin} className='btn btn-primary'>Make Admin</button></td> */}
                            <UserRow user={user}></UserRow>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;