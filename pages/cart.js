import React from 'react'
import axios from "axios"
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState'
import CartList from '../components/CartList'
import Navbar from "../components/Navbar"

const Cart = () => {

    const [cartItem, setCartItem] = useRecoilState(cartState)

    const totalPrice = () => {
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantity))
        return total
    }

    const createCheckoutSession = async () => {

        axios.post('api/checkout_sessions', { cartItem })
            .then(res => {
                console.log(res)
                window.location = res.data.sessionURL
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar />

            <div className='container mx-auto'>
                {cartItem.length <= 0
                    ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
                    : cartItem.map(item => <CartList key={item.id} data={item} />)}

                {cartItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                    <h2 className='text-right text-3xl font-bold'>Total: ৳{totalPrice()}</h2>
                    <button
                        className='rounded-lg text-right bg-gradient-to-r from-red-400 to-red-400 text-white py-4 px-12 mt-4 block mx-auto hover:bg-from-red-800 to-red-800 gradient-to-r from-red-500 to-red-500 to-500from-red-500 hover:to-orange-400' onClick={createCheckoutSession}>Delete Item</button>
                    <button
                        className='rounded-lg text-right bg-gradient-to-r from-green-600 to-green-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-from-green-800 to-green-800 gradient-to-r from-green-800 to-green-800 to-500 from-red-500 hover:to-yellow-400' onClick={createCheckoutSession}>Checkout</button>
                </div>)}



            </div>


        </div>
    )
}

export default Cart