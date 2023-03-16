import React from 'react'
import { useGlobalContext } from '@/context/Context'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { motion } from "framer-motion"

type Props = {
    item: {
        id:number;
        name:string;
        image:string;
        price:number;
        quantity:number;
    }
}

export default function CartItems({ item }: Props) {
    const { id, name, image, price, quantity } = item
    const { increaseQuantity, removeFromCart, decreaseQuantity } = useGlobalContext()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-x-4 py-2 lg:px-3 border-b border-gray-500 w-full font-light"
        >
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                {/* Item Image */}
                <div className='shadow-black shadow-xl rounded-full'>
                    <img className=' max-w-[80px] rounded-full w-20 h-20 border-none  ' src={image} alt={name} />
                </div>
                <div className='w-full flex flex-col'>
                    {/* title and delete icon */}
                    <div className='flex justify-between mb-2'>
                        <div className='text-sm uppercase font-bold max-w-[240px] hover:underline '>
                            {name}
                        </div>
                        {/* remove icon */}
                        <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)}>
                            <IoMdClose className='text-gray-500 hover:text-orange-500 transition ' />
                        </div>
                    </div>

                    <div className='flex gap-x-2 h-[36px] text-sm'>
                        {/* quantity */}
                        <div className='flex flex-1 max-w-[100px]  items-center justify-between h-full border font-medium text-primary rounded-full border-orange-600'>
                            {/* minus icon */}
                            <div className='flex-1 flex justify-center items-center cursor-pointer hover:bg-orange-600 rounded-full h-4 ml-1 duration-300' onClick={() => decreaseQuantity(id)}>
                                <IoMdRemove />
                            </div>

                            {/* qtty */}
                            <div className='h-full flex justify-center items-center  px-2 '>
                                {quantity}
                            </div>

                            {/* plus icon */}
                            <div className='flex-1 flex justify-center items-center cursor-pointer hover:bg-orange-600 rounded-full mr-1  h-4 duration-300' onClick={() => increaseQuantity(id)} >
                                <IoMdAdd />
                            </div>
                        </div>

                        {/* price */}
                        <div className='flex-1 flex justify-around items-center'>
                            KES {price}
                        </div>

                        {/* final price */}
                        {/* make price to have 2 dp */}

                    </div>
                    <div>
                        <div className='flex-1 flex  justify-end items-center text-primary font-medium'>{`KES ${(price * quantity).toFixed(2)}`}</div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}