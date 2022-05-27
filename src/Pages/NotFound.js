import React from 'react';
import error from '../Images/eror-404.jpg'

const NotFound = () => {
    return (
        <div className='grid lg:grid-cols-2 bg-black text-white'>
            <div>
                <h1 className='text-9xl text-center'>ERROR 404</h1>
                <h1 className='text-8xl text-center'>No result found</h1>
            </div>
                <div >
                    <img src={error} alt="" />

                </div>

            

        </div>

    );
};

export default NotFound;