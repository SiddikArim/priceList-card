import React from 'react';

const Link = ({item}) => {
    return (
        <li className='mr-12 p-5 hover:bg-purple-600 hover:rounded-xl hover:rotate-3'>
            <a href={item.link}>{item.name}</a>
        </li>
    );
};

export default Link;