import React from 'react';
import img from '../../Images/repair-man-making-car-service.jpg'

const Service = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">Get services from expert</h1>
                        <p class="py-6 m-2">
                            We not only a car tools manufacturer but also we provide any kind of car servicing. We have more than 20 car service experts, who can repair any kinds of car related issue. Our experts are get trained from japan. So if you face any kind of car issue then just contact with us ,we will provide our best service for you within a cheap cost.
                           
                        </p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service;