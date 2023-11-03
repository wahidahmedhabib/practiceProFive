import React from 'react'
import { FiSearch } from "react-icons/fi"
import { MdAdd } from "react-icons/md"
const Search = () => {
    return (
        <div className='flex  justify-between items-center my-2'>
            <div className=' h-12 relative w-[320px] flex items-center rounded '>
                <FiSearch className='text-white text-4xl absolute  pl-2' />
                <input className=' h-[100%] w-[100%] bg-transparent border outline-none  text-xl text-white  pl-10 border-white rounded-lg ' type="text" />
            </div>
            <button className='text-3xl font-bold h-[45px] bg-white  w-[45px] flex items-center justify-center  rounded-full '>
                <MdAdd  className='cursor-pointer '/>
            </button>

        </div>
    )
}

export default Search