import { AnyARecord } from 'dns';
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'


export interface props {
    children?: React.ReactNode;
}

export type GlobalContextType = {
    isOpen: boolean;
    isActive: boolean;
    handleCartSidebar: () => void;
    cart: [];
    increaseQuantity: (id: any) => void;
    decreaseQuantity: (id: any) => void;
    removeFromCart: (id: any) => void;
    addToCart: (food: any, id: any) =>void;
    clearCart: () => void;
    itemQuantity: number;
    total: number;
    deliveryPickup: () => void; 
    isClicked: boolean; 
  };



const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }: props) => {

    //Cart Sidebar open or closed
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // scroll State
    const [isActive, setIsActive] = useState<boolean>(false);

    // cart State
    const [cart, setCart] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems') || '[]') : [])

    // update Item Quantity
    const [itemQuantity, setItemQuantity] = useState<number>(0)

    // update Items Total
    const [total, setTotal] = useState<number>(0)

    // deliverly and pickup state
    const [isClicked, setIsClicked] = useState<boolean>(false)

    // add to cart
    const addToCart = (food: any, id: any) => {
        // console.log(food)
        const newItem = { ...food, quantity: 1 }

        // whether item already exists
        const cartItem = cart.find((item: any) => item.id === id)

        if (cartItem) {
            // Item already exists
            const newCart = [...cart].map((item: any) => {
                if (item.id === id) {
                    toast.success(`${item.name} 'quantity increased.' `)
                    return { ...item, quantity: cartItem.quantity + 1 };
                } else {
                    return item;
                }
            })
            setCart(newCart)
        } else {
            const newCart = [...cart, newItem]
            setCart(newCart)
            toast.success(`${food.name} added to cart.`)
        }
    }

    // remove item from cart
    const removeFromCart = (id: any) => {
        const newCart = cart.filter((item: any) => item.id !== id)
        setCart(newCart)
    }

    // clear all items in cart
    const clearCart = () => {
        setCart([])
    }

    // increase quantity
    const increaseQuantity = (id: any) => {
        const cartItem = cart.find((item: any) => item.id === id)
        addToCart(cartItem, id)
    }


    // decrease quantity

    const decreaseQuantity = (id: any) => {
        const cartItem = cart.find((item: any) => item.id === id)
        if (cartItem) {
            const newCart = cart.map((item: any) => {
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }

        if (cartItem.quantity < 2) {
            removeFromCart(id)
        } else {
            toast.success(`${cartItem.name} 'quantity decreased.' `)
        }
    }

    // cart sidebar toggle
    const handleCartSidebar = () => {
        setIsOpen(!isOpen)
    }
    // handle delivery and pickup event
    const deliveryPickup = () => {
        setIsClicked(!isClicked)
    }

    // make the navbar change on scroll
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })


    // Update Items Quantity and Total
    useEffect(() => {
        if (cart) {
            const quantity = cart.reduce((accumulator: any, currentItem: any) => {
                return accumulator + currentItem.quantity
            }, 0)
            setItemQuantity(quantity)
            const total = cart.reduce((accumulator: any, currentItem: any) => {
                return accumulator + currentItem.price * currentItem.quantity
            }, 0)
            setTotal(total)

            typeof window !== 'undefined' ? localStorage.setItem('cartItems', JSON.stringify(cart)) : ''
        }
    }, [cart])


   

    return (
        <GlobalContext.Provider value={{
            isOpen,
            isActive,
            handleCartSidebar,
            cart, addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            clearCart,
            itemQuantity,
            total,
            deliveryPickup,
            isClicked
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext) as GlobalContextType
}
export default GlobalContextProvider