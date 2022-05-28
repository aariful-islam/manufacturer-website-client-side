import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
            <h1>hello</h1>
            <p>{orders.length}</p>
            
        </div>
    );
};

export default ManageOrders;