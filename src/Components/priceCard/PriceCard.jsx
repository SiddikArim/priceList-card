import React from 'react';
import Feature from '../../Features/Feature';


const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 m-2 rounded-xl p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}$</span>
                <span className='text-2xl text-white font-bold'>
                    /mon
                </span>
            </h2>
            <h5 className='text-center my-5 text-2xl font-bold'>{price.name}</h5>
            <p className='underline text-white font-bold text-xl'>Features: </p>
            {
                price.features.map((features,idx)=> <Feature
                    key={idx}
                    features={features}
                ></Feature>)
            }
            <button className='hover:bg-green-700 w-full bg-green-500 py-2 rounded-md text-white font-bold mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;