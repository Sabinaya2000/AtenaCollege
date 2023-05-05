import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    let [post ,setPost]=useState([])
     useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => setPost(data));
 }, []);

  return (
    <>
    <div className='container'>
        <h1>Post List</h1>
        <div className='row'>
          

               <ol>
                {post.slice(0,200).map((a)=>{return(
             <li key={a.id}><Link to={`/Single/${a.id}`}>{a.title}</Link></li>
                )})}
               
               </ol>
     
                  
 
          
           
        </div>
    </div>
    </>
  )
}

export default Menu