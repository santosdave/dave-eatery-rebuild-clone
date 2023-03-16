import React from 'react'
import { useGlobalContext } from '@/context/Context'
import CartItems from './CartItems'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'


type Props = {}

export default function CartSidebar({ }: Props) {
  const { isOpen, handleCartSidebar, cart, clearCart, itemQuantity, total } = useGlobalContext()
  return (
    <>
      {isOpen ? <div className=' bg-black/80 w-full h-screen fixed top-0 left-0 z-10 duration-700'></div> : ''}
      <div
        className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full top-0  z-20 text-black  dark:text-gray-300
       fixed bg-white dark:bg-slate-800 shadow-2xl md:max-w-[35vw] xl:max-w-[30vw] duration-700 px-3 lg:px-[35px]`}>
        <div className='flex justify-between items-center border-b py-6'>
          <div className='uppercase font-semibold text-sm'>Shopping cart ({itemQuantity})</div>
          <div onClick={handleCartSidebar} className='flex justify-center items-center w-8 h-8 cursor-pointer'>
            <IoMdArrowForward size={25} />
          </div>
        </div>

        {/* cart items */}
        <div className='flex flex-col gap-y-2 max-h-[320px] lg:max-h-[380px] scrollbar-hide  overflow-y-auto overflow-x-hidden border-b'>
          {cart.map((item: any, i: any) => (
            <CartItems key={i} item={item} />
          ))}
        </div>

        {/* Checkout */}
        <div className='flex flex-col gap-y-3 py-4 mt-4'>
          <div className='w-full flex justify-between items-center'>
            {/* total */}
            <div className='uppercase font-bold text-sm'>
              <span className='mr-2'>Total:</span>KES {total}
            </div>
            {/* clear cart */}
            {total > 0 &&
              <div onClick={clearCart} className='cursor-pointer py-4 bg-orange-600 rounded-full text-white w-12 h-12 flex justify-center items-center'>
                <FiTrash2 />
              </div>
            }

          </div>

          {total > 0 &&
            <button className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              Proceed to checkout
            </button>
          }

        </div>
      </div>
    </>
  )
}