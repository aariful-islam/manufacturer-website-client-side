import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchage = () => {
    const [user] = useAuthState(auth);
    const [data, setData] = useState({});
    const [outStock, setOutStock] = useState(false);
    const [reqQuantity, setReqQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();


    const { purchageId } = useParams();
    const { data: tools, isLoading, refetch } = useQuery('tool', () => fetch(`http://localhost:4000/tools/${purchageId}`, {
        method: 'GET',
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    useEffect(() => {
        <p>Loading...</p>
        if (tools?.available <= 0) {
            console.log(tools.available);
            setOutStock(true);
        }
    }, [tools, tools?.name])

    if (isLoading) {
        return <p>Loading...</p>
    }



    refetch();



    const onSubmit = data => {
        const reqQuantity = data.quantity;
        setReqQuantity(reqQuantity);
        const totalPrice = reqQuantity * tools.price;
        setTotalPrice(totalPrice);
        let price = tools.price;
        let Ndata = { ...data, totalPrice, price }
        setData(Ndata);



    }
    const finalSubmit = event => {

        fetch(`http://localhost:4000/tools/${purchageId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    // toast.success("Order placed.");
                    navigate('/dashboard')
                }
            })



        const status = 'Pending';
        const toolsName = tools.name;
        const img = tools.img;
        let newData = { ...data, status, toolsName, img }



        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: Barer ${localStorage.getItem('accessToken')},
            },

            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(insert => {
                if (insert.result?.insertedId) {
                    toast.success(" Please pay to confirm");
                }
                else {
                    toast.error("Try again.");
                }
            })





    }
    const handleClick = () => {

    }


    return (
        <div>
            <h2 className="text-primary  font-bold text-5xl my-2 text-center uppercase">Purchase the toolss</h2>
            <div className="border-2 shadow-green-50 rounded-2xl p-5">
                <div className=" gap-10  mb-28">
                    <div className="w-1/2 mx-auto p-10  order-1 mb-5">
                        <img className="mx-auto hover:rotate-2 w-1/2" src={tools?.img} alt="" />
                        <h3 className="text-2xl font-bold text-left ">{tools?.name}</h3>
                        <p className="text-black text-justify">{tools?.description}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Available: {tools.available}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Minimum Order Quantity: {tools.minorder}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Unit Price: {tools.price}</p>
                        {
                            outStock ?
                                <p disabled className="text-center bg-red-800 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" >
                                    Out of Stock
                                </p>
                                :

                                <p className="text-center  bg-primary text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" >
                                    Available
                                </p>
                        }

                    </div>
                    <div className="w-1/2 mx-auto border-2 md:p-10 shadow-green-50 rounded-2xl order-2">
                        <h2 className="text-secondary  font-bold text-3xl my-8 text-center uppercase">Provide us your shipping information</h2>
                        <form className="gap-2 bg-white shadow-md rounded md:px-4 pt-2 pb-4 flex flex-col mx-2 md:mx-32 border-2 shadow-green-50" onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={user.displayName} placeholder="Name" {...register("name")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={user.email} placeholder="Email" {...register("email")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={user.phoneNUmber} placeholder="Mobile Number" type="number"  {...register("phoneNumber")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' placeholder="Address" type="text" {...register("address")} />

                            <p className='  p-2 font-bold text-center'> Minimum Order Quantity: {tools.minorder}  </p>
                            <p className='mb-2  p-2 font-bold text-center'> Unit Price: {tools.price}  </p>



                            <input onClick={handleClick} className='mb-4 border-2  shadow-green-50 p-2' placeholder={`Minimum Order quantity ${tools.minorder}`} type="number"
                                {...register("quantity",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Quantity is required.'
                                        },
                                        min: {
                                            value: `${tools.minorder}`,
                                            message: 'You can not purchase less then minimum Order Quantity.'

                                        },
                                        max: {
                                            value: `${tools.available}`,
                                            message: 'You can not purchase more then available quantity.'

                                        }
                                    })} />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.quantity?.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-600">{errors.quantity?.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-600">{errors.quantity?.message}</span>}
                            </label>
                            <div className="flex flex-col gap-5 items-end">
                                {
                                    errors.quantity ? <input
                                        type="submit"
                                        className="btn btn-primary text-white font-bold uppercase"
                                        disabled
                                        value="Add Tools"
                                    />
                                        :
                                        <input
                                            type="submit"
                                            className="btn btn-primary text-white font-bold uppercase w-1/2"
                                            value="Add Tools"
                                        />
                                }
                                <div>
                                    <p className="font-bold text-right">Quantity: {reqQuantity} </p>
                                    <p className="font-bold text-right">Total Price: {totalPrice} </p>
                                </div>
                                {
                                    errors.quantity ? <input
                                        className="btn btn-primary text-white w-full font-bold py-4 px-4 p-2 rounded focus:outline-none focus:shadow-outline uppercase"
                                        onClick={finalSubmit}
                                        disabled
                                        value="purchase"
                                        
                                    />
                                        :
                                        <input
                                            className="btn btn-primary text-white w-full font-bold py-4 px-4 p-2 rounded focus:outline-none focus:shadow-outline uppercase"
                                            onClick={finalSubmit}
                                            value="purchase"
                                        />
                                }

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Purchage;

