                
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
           bg-orange text-white font-semibold text-lg  h-10 w-28 border '
           onClick={() => submitform()}>Add Data</button>
   </div>