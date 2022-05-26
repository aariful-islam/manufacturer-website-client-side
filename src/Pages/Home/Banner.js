import React from 'react';
import banner from '../../Images/banner-car.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">Car Engineer Bangladesh</h1>
                        <p class="py-6 m-2">
                            Welcome to car engineer Bangladesh. We are ready to serve you any kind of car tools. You can get the authentic product from us.
                            We provide cheap and best services. We import car tools from japan. So you can get the best tools from us.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;