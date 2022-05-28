import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate=useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://floating-basin-04314.herokuapp.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accesstoken');
                        navigate('/home')
                    }

                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })

        }

    }, [user])


    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table w-full">


                    <thead>
                        <tr>
                            

                            <th>Tools</th>
                            <th>Total Price</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th>Remove order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                
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