import React from 'react'
import { categories } from '@/data/FoodData'
import {motion} from "framer-motion"

type Props = {}

export default function CategorySection({ }: Props) {
  return (
    <div className='max-w-[1640px] mx-auto px-10 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center capitalize'>
        top rated menu items
      </h1>
      {/* categories */}
      <div className='grid sm:grid-cols-3 items-center   md:grid-cols-4 lg:grid-cols-6  gap-6 py-6'>
        {categories.map((category: any, i: any) => {
          const { id, name, image } = category
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer"
              key={i}
            >
              <h2 className='font-bold sm:text-xl'>{name}</h2>
              <img className='w-20 ' src={image} alt={name} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}