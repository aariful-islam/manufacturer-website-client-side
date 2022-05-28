import React from 'react';
import { useForm } from 'react-hook-form';
import { toast , ToastContainer} from 'react-toastify';


const Addtools = () => {
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
                    const img = result.data.url;
                    const tools = {
                        name: data.name,
                        description: data.description,
                        available: data.available,
                        
                        price: data.price,
                        minorder: data.minorder,
                        img: img
                   
                    }
                   

                    
                    fetch('https://floating-basin-04314.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: Barer ${localStorage.getItem('accessToken')},
                        },

                        body: JSON.stringify(tools)
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
                    <h2 className="text-center text-2xl font-bold">Add a New Tools</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Tools Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="tools Name"
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
                                placeholder="tools Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="tools Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'tools Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum tools Order Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minorder", {
                                    required: {
                                        value: true,
                                        message: 'tools Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minorder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minorder.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="price per tools"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="file"

                                className="input input-bordered w-full max-w-xs"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
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


export default Addtools;