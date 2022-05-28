import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))

        }

    }, [user])

    
    return (
        <div>
            
            <p>
                {orders.length}
            </p>
            
           
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    
                    <thead>
                        <tr>
                            <th></th>
                            
                            <th>Tools</th>
                            <th>Total Price</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th>Remove order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order=> <tr>
                                <td></td>
                                <td>{order.email}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.status}</td>
                                <td><button className='btn btn-primary'>delete</button></td>
                            </tr>)
                        }
                        
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;