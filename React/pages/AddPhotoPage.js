import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRef, useState , useContext} from 'react';
import MainContext from '../context/MainContext';

const AddPhotoPage = () => {
  const [myphotos, setMyphotos] = useState([])
  const nav = useNavigate()
  const { user } = useContext(MainContext)

  const photoRef = useRef()

  function addphoto () {

      const photo = {
      name: user.name,
      photo: photoRef.current.value
    }
    if(!photo.photo) return
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(photo)
    }

    fetch('http://localhost:4000/addphoto', options)
      .then(res => res.json())
      .then(data => {
        setMyphotos(data.data)
        console.log(data.data)
       
      
        photoRef.current.value =""

        nav("/profile")
        

       
      })



  }



  return (
    <div className='addphoto'>
      <input ref={photoRef} type="text" placeholder='photo url' />
      <button onClick={addphoto}>Save</button>
      

    </div>
  )
}

export default AddPhotoPage