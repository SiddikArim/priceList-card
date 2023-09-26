import React, { useState } from 'react';
import Link from '../link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Nav = () => {
    const [open, setOpen] = useState(false);

    const navbarItems = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About Us',
            link: '/about'
        },
        {
            id: 3,
            name: 'Services',
            link: '/services'
        },
        {
            id: 4,
            name: 'Portfolio',
            link: '/portfolio'
        },
        {
            id: 5,
            name: 'Contact Us',
            link: '/contact'
        }
    ];

    return (
        <nav className='bg-purple-400 rounded-xl pl-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span className=''>{open === true ?
                    <XMarkIcon className='w-6 h-6 text-purple-500' />
                    :
                    <Bars3Icon className='w-6 h-6 text-purple-500' />}
                </span>
            </div>

            <ul className={`md:flex absolute md:static  bg-purple-400 pl-8 hover:bg-purple-300 duration-1000  ${open ? 'top-6 ' : '-top-96 '}`}>
                {
                    navbarItems.map((item) => <Link
                        key={item.id}
                        item={item}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;