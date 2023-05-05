import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'


function Single() {
  let [post ,setPost]=useState([])
  let{aid}=useParams()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${aid}`)
     .then((res) => res.json())
     .then((data) => setPost(data));
    }, []);


  return (
    <>
    <div className='container'>
        
      <h1>{post.title}</h1>
      <p>{post.url}</p>
      <p>{post.thumbnailUrl}</p>
    </div>
    
    </>
  )
}

export default Single