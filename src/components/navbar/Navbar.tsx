import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useTheme } from 'next-themes'
import { useGlobalContext } from '@/context/Context'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'



type Props = {}

export default function Navbar({ }: Props) {
    const { isActive, handleCartSidebar, itemQuantity, isClicked, deliveryPickup } = useGlobalContext()
    const [nav, setNav] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const handleMenu = () => {
        
        setNav(!nav)
    }
    return (
        <div className={` ${isActive ? 'bg-white py-4 shadow-md' : 'bg-black/10 p-6 '} text-black  dark:text-gray-300 fixed flex items-center justify-between w-full max-w-[1640px] mx-auto z-20 py-6 md:px-12`}>
            <div className='flex items-center gap-3'>
                <div onClick={handleMenu} className=' cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='capitalize text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Daves {' '}
                    <span className='font-bold'>
                        eatery
                    </span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-400 dark:bg-slate-700 rounded-full p-1 text-[16px]' onClick={deliveryPickup}>
                    <p className={`${isClicked ? 'bg-black text-white' : 'text-black'}  rounded-full p-2 scroll-smooth transition duration-500`} >
                        Delivery
                    </p>
                    <p className={`${isClicked ? 'text-black' : 'bg-black text-white'} rounded-full p-2 `}>
                        Pickup
                    </p>
                </div>
            </div>

            {/* Search Input */}
            <div className='flex  items-center bg-gray-700 w-[200px] text-black  dark:text-gray-300 rounded-full px-2 sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input className='bg-transparent w-full p-2 focus:outline-none placeholder:text-black dark:placeholder:text-gray-300' type='text' placeholder='Search Food' />
            </div>

            <div className='flex items-center justify-center gap-4'>
                {/* Cart */}
                <a onClick={handleCartSidebar} className={` ${isActive ? ' bg-white' : ' bg-gray-700'} hidden md:flex relative cursor-pointer  items-center justify-center rounded-full w-[42px] h-[34px]`}>
                    <BsFillCartFill size={20} className='text-black  dark:text-gray-300' />
                    <div className='absolute bg-orange-600 -right-3 -top-4 text-[12px] w-[18px] h-[18px] text-black  dark:text-gray-300 rounded-full flex justify-center items-center'>
                        {itemQuantity}
                    </div>
                </a>

                {/* Theme Toogle */}
                <div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="group flex cursor-pointer items-center space-x-4 rounded-full px-2 py-1
                            transition-all duration-200 hover:bg-blue-200  dark:bg-gray-900 bg-gray-500 "
                    >
                        {resolvedTheme === "dark" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                        )}
                    </motion.div>
                </div>
            </div>


            {/* Mobile Menu */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'></div> : ''}

            {/* Sidedrawer Menu */}
            <div className={`${nav ? 'left-0' : '-left-full'}  fixed  top-0 w-[300px] h-screen bg-white dark:bg-slate-800 z-10  duration-700 `}>
                <AiOutlineClose onClick={handleMenu} size={25} className='text-black  dark:text-gray-300 absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-black  dark:text-gray-400  font-bold text-2xl p-4'>Daves<span className=' font-bold'> Eatery</span></h2>
                <nav>
                    <ul className='text-black  dark:text-gray-300  p-4'>
                        <li className=' text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className=' text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className=' text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className=' text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className=' text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className=' text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className=' text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}