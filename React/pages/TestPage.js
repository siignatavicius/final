import React, { useEffect,  useState } from 'react';
import { useContext } from 'react';
import MainContext from '../context/MainContext';

function TestPage() {
   
    
  const { user }  = useContext(MainContext)
  const  [photos, setPhotos] = useState([])
    
  useEffect(() => {
    fetch('http://localhost:4000/allphotos')
      .then(res => res.json())
      .then(data => {
        setPhotos(data.data)
        console.log(data.data)
       
        
      })
  }, [])




  

  return (

      
  
      <div >

        <h1>{user.name}</h1>
     


      

      </div>
  )
}

export default TestPage






