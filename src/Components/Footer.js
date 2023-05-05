import React from 'react'

function Footer() {
  return (
    <>

    <div className='footer py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 '>
                    <img className='logo new' src='http://www.ansonika.com/atena/img/logo_2x.png'/>
                </div>
                <div className='col-lg-3 footerlisting'>
                    <h5>About</h5>
                    <hr/>
                    <ul>
                        <li><a href=''>About us</a></li>
                        <li><a href=''>Blog</a></li>
                        <li><a href=''>Login</a></li>
                        <li><a href=''>Register</a></li>
                        <li><a href=''>Terms and condition</a></li>
                    </ul>

                </div>
                <div className='col-lg-2 footerlisting'>
                    <h5>Academic</h5>
                    <hr/>
                    <ul>
                        <li><a href=''>Plans of study</a></li>
                        <li><a href=''>Courses</a></li>
                        <li><a href=''>Admissions</a></li>
                        <li><a href=''>Staff</a></li>
                        <li><a href=''>Students</a></li>
                    </ul>

                </div>
                <div className='col-lg-4 footerlisting'>
                    <h5>About</h5>
                    <hr/>
                    <ul>
                        <li><a href=''>Contact us</a></li>
                        <li><a href=''>Plan a visit</a></li>
                        <li><a href=''></a></li>
                        <li><a href=''>Info line - +0332 84322456</a></li>
                        <li><a href=''>Email - info@atena.com / office@atena.com</a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    <div className='bottom py-2'>
     <div className='container text-center'>
     © Atena 2015 - All rights reserved. 
        </div> 
        </div>
    </>
  )
}

export default Footer
