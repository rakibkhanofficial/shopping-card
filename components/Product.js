import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from "../atoms/cartState"
import toast from 'react-hot-toast'

const Product = ({ product }) => {

    const [cartItem, setCartItem] = useRecoilState(cartState)

    const addItemsToCart = () => {

        if (cartItem.findIndex(pro => pro.id === product.id) === -1) {
            setCartItem(prevState => [...prevState, product])
        } else {
            setCartItem(prevState => {
                return prevState.map((item) => {
                    return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            })
        }

        toast(`${product.name} added to cart`)

    }

    return (
        <div className='rounded-lg bg-[#fff] pt-5 pb-3 shadow-2xl'>

            <img className='mx-auto w-[350px] h-[200px] object-contain' src={product.image} alt="" />

            <div className='mt-4 px-6'>
                <div className='flex items-center justify-between text-[26px]'>
                    <h1>{product.name}</h1>
                    <h3>৳{product.price}</h3>
                </div>

                <button
                    className='rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 px-12 mt-4 block mx-auto hover: from-pink-500 gradient-to-r from-green-400 to-blue-500 to-yellow-500from-pink-500 hover:to-yellow-500'
                    onClick={addItemsToCart}>Add To Cart</button>

            </div>

        </div>
    )
}

export default Product