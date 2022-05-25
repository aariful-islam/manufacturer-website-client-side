import React from 'react';
import img from '../../Images/various-work-tools-worktop.jpg'

const Authentic = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Get Authentic Tools from us</h1>
                        <p class="py-6">You can get authentic tools from us. We import our products from japan. We servce our tools all over Bangladesh. We doing this business since 2010.We serve product with 2 year of service warrenty. If you searching for cheap and best car parts then just contact with us. </p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Authentic;