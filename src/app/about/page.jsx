import React from 'react'
import Navbar from '../components/navbar';
import Card from '../components/card';
const About = async() => {
   const res=await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
    const users=await res.json();
  return (
    <>
    <Navbar/>
    <h1>USERS</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {users.map(users=><li key={users.id}>{users.name}</li>)}
    </ul>
    <Card/>
    </>
  )
}

export default About