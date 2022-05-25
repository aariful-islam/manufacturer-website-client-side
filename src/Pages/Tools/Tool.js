import React from 'react';

const Tool = ({tool}) => {
    const {img,name,description,minorder,available,price}=tool
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div className='text-xl'>
          <p>MIn order: <span className='font-bold'> {minorder}</span></p>
          <p>Available tools: <span className='font-bold'>{available}</span> </p>
          <p> Price :$ <span className='font-bold'>{price}</span></p>

          </div>
          
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Purchage</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;