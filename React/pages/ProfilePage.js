import React from 'react';
import { useContext} from 'react';
import MainContext from '../context/MainContext';
import { useNavigate } from "react-router-dom";



const ProfilePage = () => {

  const nav = useNavigate()
  const {user} = useContext(MainContext)

function logout() {

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include"
    }

    fetch('http://localhost:4000/logout', options)
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem("autologin", "false")
          nav("/")
          console.log(data)
        }
      })
 }

  function addphoto () {
    nav("/addphoto")
  }
  
  function test() {
    nav("/test")

  }

  return (
    <div className='profile'>
      <button onClick={logout}>Logout</button>
      <h1>{user.name}</h1>
     
      <button onClick={addphoto}>Add photo</button>
      <button onClick={test}>TEST</button>
      
    </div>
  );
};

export default ProfilePage;