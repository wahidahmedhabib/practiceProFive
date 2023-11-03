import React from 'react'
import './navbar.css'

const Navebar = () => {
    return (
        // <div className='h-[100px] w-[400px]'>
        <div className='h-[60px]  bg-white  gap-2  flex justify-center items-center rounded-lg border-2'>
            <div className=' w-[50px] h-[50px] '>
                <img src="images/firebase-removebg-preview.png" alt="" />
            </div>
            <p className=' font-medium  text-xl '>
                FireBase Contact App
            </p>
        </div>
    )
}

export default Navebar