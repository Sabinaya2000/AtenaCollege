import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'

import Faculty from '../Pages/Faculty'
import Single from '../Pages/Single'
import Menu from '../Pages/Menu'

function Header() {
  
  return (
    <>
<nav className="navbar fixed-top navbar-expand-lg  ">
  <div className="container">
   <img className='logo' src={require('../assets/images/logo_2x.png')}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Faculty/">FACULTY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Courses/SCIENCE">SCIENCE  </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Courses/sports">SPORTS  </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Courses/TECHNOLOGY">TECHNOLOGY  </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Courses/BUSINESS">BUSINESS  </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Menu/">MENU<i class="fa-solid fa-bars"></i></Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>


<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Faculty/" element={<Faculty />} />
        <Route path="/Courses/:id" element={<Courses />} />
       
        <Route path="/Menu/" element={<Menu />} />
        <Route path="/Single/:aid" element={<Single />} />
       
      </Routes>

    </>
  )
}

export default Header
