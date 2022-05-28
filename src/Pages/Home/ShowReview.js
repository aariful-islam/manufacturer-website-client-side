import React, { useState } from 'react';

const ShowReview = () => {
    const [reviews,setReview]=useState([])
    fetch('https://floating-basin-04314.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>setReview(data))
    return (
        <div>
            <h1 className='text-3xl text-center m-4'>Reviews from cutomer</h1>
             <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3'>
            
            {
               
                reviews.map(review => 
                    <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title">Ratings: {review.rating}</h2>
                      <p>Review : {review.description}</p>
                      
                    </div>
                  </div>
                    )
            }
            
        </div>

        </div>
       
    );
};

export default ShowReview;