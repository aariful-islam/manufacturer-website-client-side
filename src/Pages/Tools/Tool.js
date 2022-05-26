import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {img,name,description,minorder,available,price,_id}=tool;
    const navigate = useNavigate();

    const navigateToPurchage = (id) =>{
        navigate(`/purchage/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div className='text-xl'>
          <p>Min order: <span className='font-bold'> {minorder}</span></p>
          <p>Available tools: <span className='font-bold'>{available}</span> </p>
          <p> Price :$ <span className='font-bold'>{price}</span></p>

          </div>
          
          <div class="card-actions justify-end">
            <button onClick={()=> navigateToPurchage(_id)} class="btn btn-primary">Purchage</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;