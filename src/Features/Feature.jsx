import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({features}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon class="h-4 w-4 text-purple-600" />
            <span className='pl-2'>{features}</span>
        </div>
    );
};

export default Feature;