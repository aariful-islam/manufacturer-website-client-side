import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-3xl text-center mb-10'> Know about myself</h1>
            <div className='text-center mb-10'>
            <p>Name : Md. Ariful Islam</p>
            <p>Email: mdarifulislam99050@gmail.com</p>
            </div>
            <div className='text-center mb-10'>
                <h1 className='text-2xl'>My techniqal skils are: </h1>
                <ul className='font-bold'>
                    <li>HTML5</li>
                    <li>CSS3, Bootstrap, Tailwind</li>
                    <li>Javascript core concept</li>
                    <li>react.js</li>
                    <li>Firebase authentication</li>
                    <li>node.js</li>
                </ul>
            </div>
            <div className='text-center'>
                <h1 className='text-center text-3xl'>My Projects</h1>
                <a className='text-xl font-bold' href="https://laptop-warehouse-4dc3b.web.app/">Warehouse Management</a> <br />
                
                <a className='text-xl font-bold' href="https://workout-with-arif.web.app/">independent-service-provider</a> <br />
                <a className='text-xl font-bold' href="https://tiny-pixie-0d0bbf.netlify.app/">product-analysis </a>

                
            </div>
           

            
        </div>
    );
};

export default Portfolio;