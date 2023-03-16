import React, { useState, useEffect } from 'react'
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { useGlobalContext } from '@/context/Context'
import { FoodData } from '@/data/FoodData'
import Category from './CategorySection'
import { motion } from "framer-motion"

type Props = {}

export default function FoodSection({ }: Props) {
    const [foods, setFoods] = useState(FoodData);

    const { addToCart } = useGlobalContext();




    // Filter food by type
    const filterType = (category: any) => {

        setFoods(
            FoodData.filter((item: any) => item.category === category)
        )
    }

    // Filter food by price
    const filterPrice = (price: any) => {
        setFoods(
            FoodData.filter((item: any) => item.price <= price)
        )
    }

    return (
        <div className='max-w-[1640px] mx-auto px-10 py-10'>
            <h1 className='text-orange-600 font-bold text-4xl text-center capitalize pb-4'>
                Top rated menu items
            </h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                <div className=''>
                    <p className='font-bold'>Filter type</p>
                    <div className='flex justify-center items-center flex-wrap gap-x-1 md:gap-x-2 gap-y-2 md:gap-y-0' >
                        <button onClick={() => setFoods(FoodData)} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All
                        </button>
                        <button onClick={() => filterType('burger')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Burgers
                        </button>
                        <button onClick={() => filterType('pizza')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Pizza
                        </button>
                        <button onClick={() => filterType('salad')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Salads
                        </button>
                        <button onClick={() => filterType('chicken')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Chicken
                        </button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold'>Filter price</p>
                    <div className='flex justify-center   items-center flex-wrap gap-x-1 md:gap-x-2 gap-y-2 md:gap-y-0'>
                        <button onClick={() => setFoods(FoodData)} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All
                        </button>
                        <button onClick={() => filterPrice('5000')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            KES 5000
                        </button>
                        <button onClick={() => filterPrice('10000')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            KES 10000
                        </button>
                        <button onClick={() => filterPrice('15000')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            KES 15000
                        </button>
                        <button onClick={() => filterPrice('20000')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            KES 20000
                        </button>
                        <button onClick={() => filterPrice('25000')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            KES 25000
                        </button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
                {/* Display Products/Food */}
                {foods.map((food: any, i: any) => {
                    const { id, name, image, price } = food
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative group border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer "
                            key={i}
                        >
                            <img className='w-full h-[200px] object-cover rounded-t-lg ' src={image} alt={name} />
                            <div className='flex justify-between items-center  px-2 py-4'>
                                <p className='font-bold'>
                                    {name}
                                </p>
                                <p className='bg-orange-500  rounded-full p-2'>
                                    KES {price}
                                </p>
                            </div>

                            {/* buttons */}
                            <div
                                className='absolute top-6 p-2 flex flex-col justify-center items-center  opacity-0 group-hover:opacity-100
                                transition-all duration-300 -right-11 group-hover:right-5 
                                '
                            >
                                <button className=' border-none flex flex-col gap-y-2'>
                                    <div onClick={() => addToCart(food, id)} className='flex justify-center items-center rounded-full  w-12 h-12 bg-orange-600'>
                                        <BsPlus size={25} />
                                    </div>
                                    <div className='w-12 h-12 bg-orange-600 flex justify-center items-center text-primary drop-shadow-xl rounded-full'>
                                        <BsEyeFill />
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}