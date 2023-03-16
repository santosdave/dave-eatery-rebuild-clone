import React from 'react'
import { useGlobalContext } from '@/context/Context'
import { RxCross2 } from 'react-icons/rx'
import { BsFillCartFill } from 'react-icons/bs'
import { motion } from "framer-motion"
type Props = {}

export default function CartToggle({ }: Props) {
    const { isOpen, handleCartSidebar, itemQuantity } = useGlobalContext()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:hidden"
        >
            <button onClick={handleCartSidebar}>
                <div className={`${isOpen ? 'top-[90%] left-[46%]': 'top-[70%] left-[80%]' } z-50  shadow-2xl  my-2 fixed flex flex-col justify-center items-center text-black  dark:text-gray-300 w-12 h-12 bg-orange-600 rounded-full`}>
                    <div className='transition-all duration-700 delay-100'>
                        {isOpen ? <div><RxCross2 className='text-xl ' /></div> :
                            <div className='m-0 relative'>
                                <BsFillCartFill className=' text-xl  ' />
                                <div className='absolute bg-orange-600 -right-3  -top-3 text-[12px] w-[18px] h-[18px]  rounded-full flex justify-center items-center'>
                                    {itemQuantity}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </button>
        </motion.div>
    )
}