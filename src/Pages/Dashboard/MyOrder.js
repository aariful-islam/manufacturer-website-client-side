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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order=> <tr>
                                <td></td>
                                <td>{orders.email}</td>
                                <td>ghsg</td>
                                <td>Blue</td>
                                <td><button>delete</button></td>
                            </tr>)
                        }
                        
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;