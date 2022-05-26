import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold'>Welcome to Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><a href='/dashboard'>My order</a></li>
                    <li><a href='/dashboard/myprofile'>My Profile</a></li>
                    <li><a href='/dashboard/review'>Review</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;