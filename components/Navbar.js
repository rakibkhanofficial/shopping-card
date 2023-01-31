import Link from 'next/link'
import React from 'react'
import {FiHome, FiShoppingCart, FiUser} from "react-icons/fi"
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState'


const Navbar = () => {
 const  handleChange = (event) => {
     console.log("Clicked");
     console.log(event.target.value)
 }
    const [cartItem] = useRecoilState(cartState)

    return (
        <section className='rounded-bl-2xl rounded-br-2xl shadow-xl bg-white sticky top-0'>
            <div className='container mx-auto py-2 text-[24px] flex justify-between items-center'>
                <div className='cursor-pointer'>
                    <Link href="/">AFBL</Link>
                </div>
                <div className='relative cursor-pointer'>
                    <Link href="/">
                        <div>
                            <FiHome/>
                            <span> </span>
                        </div>
                    </Link>
                </div>
                <div className='relative cursor-pointer'>
                    <Link href="/">
                        <div>
                            <FiUser/>

                        </div>
                    </Link>
                </div>

                <div className='relative cursor-pointer'>
                    <Link href="/cart">
                        <div>
                            <FiShoppingCart />
                            <span className='absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white'>{cartItem.length}</span>
                        </div>
                    </Link>
                </div>
            <div className="group inline-block">
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                        className=" text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-green-500 dark:hover:bg-green-800 dark:focus:ring-green-800"
                        type="button" >
                    <img className="w-6 h-6 mr-2 rounded-full" src="/icon/globe.svg" alt="Language"/>
                    Languages
                </button>
                <div id="dropdownHover"
                     className="hidden w-32 h-20 absolute group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900">
                    <ul className="py-1.5 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton" onChange={handleChange}>
                        <li>
                            <a href="#"
                               className="flex items-center block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img className="w-6 h-6 mr-2 rounded-full"
                                     src="/icon/Usa.png" alt="English"/>
                                English
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img className="w-6 h-6 mr-2 rounded-full"
                                     src="/icon/Bangladesh.png" alt="Bangladesh"/>
                                Bangla
                            </a>
                        </li>
                    </ul>
                </div>

</div>
            </div>
        </section>

    )
}

export default Navbar