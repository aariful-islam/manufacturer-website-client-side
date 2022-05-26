import React from 'react';
import { useForm } from 'react-hook-form';
import { toast , ToastContainer} from 'react-toastify';


const Review = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgStorageKey = '0010be4b92c5c795e1de0ec49c4b3016';
    
    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    
                    const review = {
                        name: data.name,
                        description: data.description,
                       
                   
                    }
               fetch('http://localhost:4000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: Barer ${localStorage.getItem('accessToken')},
                        },

                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(insert => {
                            toast.success({insert});
                            console.log(insert)
                            
                            if (insert.result?.insertedId) {
                                toast('Added Item')
                              
                            }
                            else {
                                toast("Already exist.");
                            }
                            // refetch();
                            

                        })
                }

            })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add a reviews</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'tools Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Enter review"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'review is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>


                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};


export default Review;