import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
    console.log('admin',{admin})
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
               
                <Outlet></Outlet>
               


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    { !admin &&<li><Link to='/dashboard'>My order</Link></li>}
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {!admin && <li><Link to='/dashboard/review'>Review</Link></li>}
                    <li><Link to='/dashboard/addtools'>Add Tools</Link></li>
                    {admin && <li><Link to='/dashboard/alluser'>All users</Link></li>}
                   {admin && <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;