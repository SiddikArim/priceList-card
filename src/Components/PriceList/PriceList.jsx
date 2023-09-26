import React, { useEffect, useState } from 'react';
import PriceCard from '../priceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div>
            <h2 className='text-5xl bg-purple-300 font-bold p-4 text-center text-purple-900'>Korra Price</h2>
            <div className='grid md:grid-cols-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;