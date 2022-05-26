import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchage = () => {
    
    const {purchageId}=useParams();
    const [tool,setTool]=useState([]);
    const [user] = useAuthState(auth);
    console.log(user)
    
    useEffect(()=>{
        fetch(`http://localhost:4000/tools/${purchageId}`)
        .then(res=>res.json())
        .then(data=>setTool(data))


    },[])
   

    

    return (
        <div>
          
           
            <h1>{tool.name}</h1>
            <h1>{user.displayName}</h1>
            

        </div>
    )
        
};

export default Purchage;