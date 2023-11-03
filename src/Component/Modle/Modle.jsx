import React, { useEffect, useState } from 'react'

import { addDoc, getDoc, doc, setDoc, collection, updateDoc } from "firebase/firestore";

import { db } from "../../Config/fireBaseConfig"

import { Field, Formik, Form } from 'formik';


const Modle = ({ open, setopen, updated, editBtn }) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')



    const [edit_name, setedit_name] = useState('')
    const [edit_email, setedit_email] = useState('')
    // const idess = []

    useEffect(() => {
    setedit_name(localStorage.getItem('name'))
    setedit_email(localStorage.getItem('email'))
    // setedit_name(localStorage.getItem('name'))
        // setedit_email(localStorage.getItem('email'))



        console.log(edit_email, edit_name)
        

    }, [])
    const submitform = async () => {
        if (name == '' || email == '') {
            alert("Empty not Allow")
        } else {
            const docRef = await addDoc(collection(db, "contact"), {
                name: name,
                email: email,
            });
            // console.log(docRef.id)
            // idess.push(docRef.id)
        }
        // console.log(idess)
        setopen(false)
    }


    const updatForm = async () => {
        
        // console.log("updated")
        // console.log(localStorage.getItem('ID'))
        
        const edit_id = localStorage.getItem('ID')


        if (edit_name == '' || edit_email == '') {
            alert("Empty not Allow")
        } else {
            const washingtonRef = doc(db, "contact", edit_id);

            // Set the "capital" field of the city 'DC'
            await updateDoc(washingtonRef, {
                name: edit_name,
                email: edit_email
            });
            // console.log(docRef.id)
            // idess.push(docRef.id)
        }
        setopen(false)
        localStorage.clear()

    }



    return (
        <div className='flex  justify-center'>

            {
                updated ?
                    open && <>

                        <div
                            className='h-80 w-80 absolute   flex flex-col justify-center items-center gap-5  

            top-[25%]  z-10 bg-white mx-au to'>

                            <div className=' w-64 '>

                                <label htmlFor="">Name : </label>
                                <div className='w-[99%] h-10  rounded'>
                                    <input type="text"
                                        onChange={e => setname(e.target.value)}
                                        placeholder='Enter Your Name'
                                        className=' h-[100%] w-[100%]  border rounded px-2' />
                                </div>
                            </div>       <div className='w-64'>

                                <label htmlFor="">Email : </label>
                                <div className='w-[99%] h-10  rounded'>
                                    <input type="text"
                                        onChange={e => setemail(e.target.value)}

                                        placeholder='Enter Your Email'

                                        className=' h-[100%] w-[100%]  border rounded px-2' />
                                </div>
                            </div>
                            <button
                                className='flex items-center justify-center rounded 
               bg-orange text-white font-semibold 
              text-lg  h-10 w-28 border '
                                onClick={() => submitform()} >
                                {/* {
                                    updated ? " Add Data" : "Update Data"
                                } */}
                                Add Data
                            </button>
                        </div>

                        <div onClick={() => setopen(false)}
                            className=' w-screen h-screen z-0  absolute top-0 backdrop-blur'>

                        </div>
                    </> :
                    open && <>

                        <div
                            className='h-80 w-80 absolute   flex flex-col justify-center items-center gap-5  
          
                                   top-[25%]  z-10 bg-white mx-au to'>

                            <div className=' w-64 '>

                                <label htmlFor="">Name : </label>
                                <div className='w-[99%] h-10  rounded'>
                                    <input type="text"
                                        value={ edit_name}
                                        onChange={e => setedit_name(e.target.value)}
                                        placeholder='Enter Your Name'
                                        className=' h-[100%] w-[100%]  border rounded px-2' />
                                </div>
                            </div>       <div className='w-64'>

                                <label htmlFor="">Email : </label>
                                <div className='w-[99%] h-10  rounded'>
                                    <input type="text"
                                        value={edit_email}
                                        onChange={e => setedit_email(e.target.value)}

                                        placeholder='Enter Your Email'

                                        className=' h-[100%] w-[100%]  border rounded px-2' />
                                </div>
                            </div>
                            <button
                                className='flex items-center justify-center rounded 
                                      bg-orange text-white font-semibold 
                                     text-lg  h-10 w-28 border '
                                onClick={() => updatForm()} >
                                {/* {
                                    updated ? " Add Data" : "Update Data"
                                } */}
                                Update Data

                            </button>
                        </div>

                        <div onClick={() => setopen(false)}
                            className=' w-screen h-screen z-0  absolute top-0 backdrop-blur'>

                        </div>
                    </>
            }

            {/* {open &&
                <>

                    <div
                        className='h-80 w-80 absolute   flex flex-col justify-center items-center gap-5  
   
                            top-[25%]  z-10 bg-white mx-au to'>

                        <div className=' w-64 '>

                            <label htmlFor="">Name : </label>
                            <div className='w-[99%] h-10  rounded'>
                                <input type="text"
                                    onChange={e => setname(e.target.value)}
                                    placeholder='Enter Your Name'
                                    className=' h-[100%] w-[100%]  border rounded px-2' />
                            </div>
                        </div>       <div className='w-64'>

                            <label htmlFor="">Email : </label>
                            <div className='w-[99%] h-10  rounded'>
                                <input type="text"
                                    onChange={e => setemail(e.target.value)}

                                    placeholder='Enter Your Email'

                                    className=' h-[100%] w-[100%]  border rounded px-2' />
                            </div>
                        </div>
                        <button
                            className='flex items-center justify-center rounded 
                               bg-orange text-white font-semibold 
                              text-lg  h-10 w-28 border '
                            onClick={ updated ? () => submitform() :  () => updatForm() } >
                            {
                                updated ? " Add Data" : "Update Data"
                            }

                        </button>
                    </div>

                    <div onClick={() => setopen(false)}
                        className=' w-screen h-screen z-0  absolute top-0 backdrop-blur'>

                    </div>
                </>
            } */}
        </div>
    )
}

export default Modle