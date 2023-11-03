import React, { useState } from 'react'

import { MdAdd, MdDeleteForever } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { BiSolidEdit } from "react-icons/bi"

const ContentCard = ({ contact, keyVal, deleteBtn, editBtn    }) => {
  
  
  
  

    
    return (
        <div key={keyVal} className='max-w-[390px] h-14 my-4 bg-yellow flex items-center justify-between  rounded-lg'>
            <div className='flex items-center'>
                <div>
                    <CgProfile className='h-8 text-4xl mx-3  text-orange' />
                </div>
                <div className='font-semibold ' >

                    <p  >Name : <span className='font-bold'> {contact.name} </span> </p>
                    <p  >Email : {contact.email} </p>
                </div>
            </div>
            <div className='flex   text-3xl gap-2'>
                <BiSolidEdit
                 className='cursor-pointer' 
                 onClick={() => editBtn(contact.id)}
                  />
                <MdDeleteForever  className='cursor-pointer ' onClick={() => deleteBtn(contact.id)} />

            </div>
        </div>
    )
}

export default ContentCard