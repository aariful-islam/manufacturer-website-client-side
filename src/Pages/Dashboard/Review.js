import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([])
    const handleForm = e => {
        navigate('/home')
        e.preventDefault();
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        console.log(rating, description)
        const review = { rating, description }
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                const newReview = [...reviews, data];
                setReviews(newReview)

            })

    }
    return (
        <div className='m-5'>
            <h1>Add review</h1>
            <form onSubmit={handleForm} action="">
                <h1>Enter rating</h1>
                <input className='w-25 border-4 m-4' type="text" name="rating" id="" placeholder='rating' /> <br />
                <h1>Add Review</h1>
                <textarea className='w-50 border-4 m-4' rows={10} cols={40} type="text" name="description" placeholder='description' id="" /> <br />
                <input className='btn btn-primary' type="submit" value="Add review" />
            </form>

        </div>
    );
};

export default Review;