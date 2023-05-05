import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Courses() {
  let {id}=useParams()
  
let [post ,setPost]=useState([])
useEffect(() => {
fetch(`https://newsapi.org/v2/top-headlines?category=${id}&apiKey=e10ef13077b74a44b9b65aedfa77740e`)
 .then((res) => res.json())
 .then((data) => setPost(data.articles));
}, []);

  return (
    <>
     <div className='container'>
      <h2 className='text-uppercase'>{id}</h2>
      <div className='row'>
      
      {post.map((a)=>{return(
        <div className='col-lg-3'>
          <div className='card'>
            <img src={a.urlToImage}/>
            
            </div>
            <div className='paragraph'>
              <p >{a.title}</p>
              </div>
          </div>
     
   ) })}
   
      </div>
      </div>
    </>
  )
}

export default Courses
