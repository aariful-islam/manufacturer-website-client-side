import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Review = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const email = user.email;
    
    const { data: orders, isLoading } = useQuery('toolss', async () => await fetch(`http://localhost:4000/tools/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <p>loading</p>;
    }

    
    const onSubmit = async data => {
        const review = {
            name: data.name,
            toolsName: data.name,
            email: user.email,
            rating: data.rating,
            review: data.review
           
        }
        // send to your database 
        fetch('http://localhost:4000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
        .then(res =>res.json())
        .then(inserted =>{
           
            if(inserted.result.insertedId){
                toast.success('Review added successfully')
                reset();
            }
            else{
                toast.error('Failed to add the review');
            }
        })

    }
    return (
        <div className="grid justify-center">
        <h2 className="text-3xl font-bold text-accent my-10">Add a Review Here</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        value={user.displayName}
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">toolss Name</span>
                    </label>
                    <select {...register('toolsName')} className="input input-bordered w-full max-w-xs">
                        {
                            orders.map(order => <option
                                key={order._id}
                                value={order.toolsName}
                            >{order.toolsName}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Reviews out of 5"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        {errors.rating?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    </label>
                </div>
               


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Reviews"
                        className="input input-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        {errors.review?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>
                

              
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default Review;