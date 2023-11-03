import React, { useEffect, useState } from 'react'
import Navebar from './Component/Navbar/Navebar'
import {
  collection, getDocs, doc, where, getDoc,
  deleteDoc, onSnapshot, updateDoc, query
} from "firebase/firestore";
// import { db } from "./Config/fireBaseConfig.js"
import { db } from "./Config/fireBaseConfig"

import { FiSearch } from "react-icons/fi"
import { MdAdd, MdOutlineVerticalShadesClosed } from "react-icons/md"

import ContentCard from './Component/ContentCard/ContentCard';
import Modle from './Component/Modle/Modle';

// import Search from './Component/Search/Search'

const App = () => {
  const [contacts, setcontacts] = useState([])
  const [open, setopen] = useState(false)
  const [updated, setUpdated] = useState(true)
  const [searchVal, setsearchVal] = useState('')

  let idess = []

  // console.log(idess)
  const onClose = () => {
    setopen(false)
  }

  const deleteBtn = async (id) => {

    const contactRef = collection(db, "contact");

    onSnapshot(contactRef, async (snap) => {
      await deleteDoc(doc(db, "contact", id));
    })

  }
  const add_contact = () => {
    setopen(true)
    setUpdated(true)
  }

  const editBtn = async (edit_id) => {
    localStorage.setItem("ID", edit_id)
    console.log('edit ===>>', edit_id)
    const docRef = doc(db, "contact", edit_id);
    const docSnap = await getDoc(docRef);
    console.log("Document data:", docSnap.data());
    const { name, email } = docSnap.data()
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    setopen(true)
    setUpdated(false)
  }

  useEffect(() => {
    const firebaseData = async () => {
      const querySnapshot = await getDocs(collection(db, "contact"));
      const datalist = querySnapshot.docs.map((doc) => {
        idess.push(doc.id)
        return {
          ...doc.data(),
          id: doc.id
        }
      });
      setcontacts(datalist)
    }
    firebaseData()
  }, [open])

  const searchContact = (e) => {
    const val = e.target.value
    const contactRef = collection(db, "contact");
    onSnapshot(contactRef, (snap) => {
      const contactList = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }

      })

      // setcontacts(contactList)
      // return contactList;
      const filterdata = contactList.filter((filterr) => {
        // return filterr
        // console.log(filterr.name.includes(searchVal))
        return filterr.name.toLowerCase().includes(val.toLowerCase())


      })
      console.log(filterdata)

      setcontacts(filterdata)

      return filterdata
    })
  }

  return (
    <>
      <div className=' container max-w-[390px] mx-auto ' >
        <Navebar />
        <div className='flex  justify-between items-center my-2'>
          <div className=' h-12 relative w-[320px] flex items-center rounded '>
            <FiSearch className='text-white text-4xl absolute  pl-2' />
            <input
              type="text"
              onChange={searchContact}
              className=' h-[100%] w-[100%] bg-transparent 
            border outline-none  text-xl text-white  pl-10
             border-white rounded-lg '
            />
          </div>
          <button className='text-3xl font-bold h-[45px] bg-white  w-[45px] flex items-center justify-center  rounded-full '>
            <MdAdd className='cursor-pointer ' onClick={() => add_contact()} />
          </button>

        </div>
        <div>
          {
            contacts.map((v, i) => {

              return (

                <ContentCard keyVal={i}
                  contact={v}
                  deleteBtn={deleteBtn}
                  updated={updated}
                  setUpdated={setUpdated}
                  editBtn={editBtn}
                />
              )
            })
          }
        </div>
      </div>
      <Modle
        className=""
        open={open}
        updated={updated}
        onClose={onclose}
        setopen={setopen} />


    </>
  )
}

export default App 