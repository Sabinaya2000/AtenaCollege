import React, { useEffect, useState } from 'react'
import ScrollToTop from './ScrollToTop';

function Body() {
  
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
 <div className="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
 </div>
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={require('../assets/images/slide_4.jpg')} className="d-block w-100" alt="..." />
     <div className=" excellence carousel-caption d-none d-md-block">
       <h1>Atena Excellence in teaching</h1>
       <h3>COLLEGE / UNIVERSITY / CAMPUS</h3>
       <div className='take py-5'>
       <button className="btn takeatour " type="submit">TAKE A TOUR</button>
       <button className="btn aboutus " type="submit">ABOUT US</button>
       </div>



     </div>
   </div>
   <div className="carousel-item">
     <img src={require('../assets/images/slide_1.jpg')} className="d-block w-100" alt="..." />
     <div className=" excellence carousel-caption d-none d-md-block">
     <h1>Atena Excellence in teaching</h1>
       <h3>COLLEGE / UNIVERSITY / CAMPUS</h3>
       <div className='take py-5'>
       <button className="btn takeatour " type="submit">TAKE A TOUR</button>
       <button className="btn aboutus " type="submit">ABOUT US</button>
       </div>
     </div>
    
   </div>
   <div className="carousel-item">
     <img src={require('../assets/images/slide_3.jpg')} className="d-block w-100" alt="..." />
     <div className=" excellence carousel-caption d-none d-md-block">
     <h1>Atena Excellence in teaching</h1>
       <h3>COLLEGE / UNIVERSITY / CAMPUS</h3>
       <div className='take py-5'>
       <button className="btn takeatour " type="submit">TAKE A TOUR</button>
       <button className="btn aboutus " type="submit">ABOUT US</button>
       </div>
     </div>
   </div>
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true" />
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true" />
   <span className="visually-hidden">Next</span>
 </button>
</div>


<div className='plan container'>
 <div className='row'>
 
    <div className='girlwalking col-lg-4 py-3'>
<img className=' girlwalk' src="http://www.ansonika.com/atena/img/news_2_thumb.jpg"/>
<div className='planavisit'>
<p><b>PLAN A VISIT</b></p>

</div>
   </div>
   <div className='girlwalking col-lg-4  py-3'>
<img className=' girlwalk' src="http://www.ansonika.com/atena/img/news_1_thumb.jpg"/>
<div className='planavisit'>
<p><b>PLAN A VISIT</b></p>

</div>
   </div>
   <div className='girlwalking col-lg-4  py-3'>
<img className=' girlwalk' src="http://www.ansonika.com/atena/img/news_3_thumb.jpg"/>
<div className='planavisit'>
<p><b>PLAN A VISIT</b></p>

</div>
   </div>
  

  
   
 </div>
</div>










<div className='container text-center'>
 <h4>Atena core feautures</h4>
 <h5>Cum doctus civibus efficiantur in imperdiet deterruisset.</h5>
 <div className='row py-5'>
 <div className='col-lg-6'>
<div className='row  align-items-center py-3'>
 <div className='col-lg-3 text-center'>
 <img className='maninsidecomputer' src={require('../assets/images/man.jpg')}/>
 </div>
 <div className='col-lg-9 text-start qualitycertification'>
   <h3 className='qualitycertification'>Quality Certifications</h3>
   <p className='small'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus<br></br> civibus efficiantur in.
      Nec id tempor imperdiet deterruisset,<br></br> doctus volumus explicari qui ex, appareat similique an usu.</p>

 </div>
</div>

</div>

<div className='col-lg-6'>
<div className='row  align-items-center py-3'>
 <div className='col-lg-3 text-center'>
 <img className='maninsidecomputer' src={require('../assets/images/man.jpg')}/>
 </div>
 <div className='col-lg-9 text-start qualitycertification'>
   <h3 className='qualitycertification'>Quality Certifications</h3>
   <p className='small'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus<br></br> civibus efficiantur in.
      Nec id tempor imperdiet deterruisset,<br></br> doctus volumus explicari qui ex, appareat similique an usu.</p>

 </div>
</div>

</div>

<div className='col-lg-6'>
<div className='row  align-items-center py-3'>
 <div className='col-lg-3 text-center'>
 <img className='maninsidecomputer' src={require('../assets/images/man.jpg')}/>
 </div>
 <div className='col-lg-9 text-start qualitycertification'>
   <h3 className='qualitycertification'>Quality Certifications</h3>
   <p className='small'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus<br></br> civibus efficiantur in.
      Nec id tempor imperdiet deterruisset,<br></br> doctus volumus explicari qui ex, appareat similique an usu.</p>

 </div>
</div>

</div>

<div className='col-lg-6'>
<div className='row  align-items-center py-3'>
 <div className='col-lg-3 text-center'>
 <img className='maninsidecomputer' src={require('../assets/images/man.jpg')}/>
 </div>
 <div className='col-lg-9 text-start qualitycertification'>
   <h3 className='qualitycertification'>Quality Certifications</h3>
   <p className='small'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus<br></br> civibus efficiantur in.
      Nec id tempor imperdiet deterruisset,<br></br> doctus volumus explicari qui ex, appareat similique an usu.</p>

 </div>
</div>

</div>

<div className='col-lg-6'>
<div className='row  align-items-center py-3'>
 <div className='col-lg-3 text-center'>
 <img className='maninsidecomputer' src={require('../assets/images/man.jpg')}/>
 </div>
 <div className='col-lg-9 text-start qualitycertification'>
   <h3 className='qualitycertification'>Quality Certifications</h3>
   <p className='small'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus<br></br> civibus efficiantur in.
      Nec id tempor imperdiet deterruisset,<br></br> doctus volumus explicari qui ex, appareat similique an usu.</p>

 </div>
</div>

</div>

<div className='col-lg-6'>
<div className='row  align-items-center py-3'>
 <div className='col-lg-3 text-center'>
 <img className='maninsidecomputer' src={require('../assets/images/man.jpg')}/>
 </div>
 <div className='col-lg-9 text-start qualitycertification'>
   <h3 className='qualitycertification'>Quality Certifications</h3>
   <p className='small'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus<br></br> civibus efficiantur in.
      Nec id tempor imperdiet deterruisset,<br></br> doctus volumus explicari qui ex, appareat similique an usu.</p>

 </div>
</div>

</div>


 </div>
 

 

 

</div>

<div className='container'>
 <hr/>
</div>

<div className='container text-center py-5'>
 <h2>Atena focus on these ....</h2>
 <h5>Cum doctus civibus efficiantur in imperdiet deterruisset.</h5>
 <div className='row py-5'>
   <div className='col-lg-4 text-start studentgrowthfirst'>
     <h5>01.Students growth</h5>
     <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor 
       imperdiet deterruisset,
        doctus volumus explicari qui ex.</p>
   </div>
   <div className='col-lg-3 bulb'>
     <img src='http://www.ansonika.com/atena/img/graphic.jpg'/>
   </div>
   <div className='students col-lg-4 text-start '>
     <h5>01.Students growth</h5>
     <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor 
       imperdiet deterruisset,
        doctus volumus explicari qui ex.</p>
   </div>
   <div className='col-lg-4 text-start'>
     <h5>01.Students growth</h5>
     <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor 
       imperdiet deterruisset,
        doctus volumus explicari qui ex.</p>
   </div>
   <div className='students1 col-lg-4 text-start'>
     <h5>01.Students growth</h5>
     <p>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor 
       imperdiet deterruisset,
        doctus volumus explicari qui ex.</p>
   </div>
 </div>
 <div className='takeatourofatena text-center'>
   <div className='makeaborder '>
   <a href=''>take a tour of atena</a>
   </div>
 </div>
</div>


<div id="carouselExampleDark" className="carousel carousel-dark slide">
 <div className="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
 </div>
 <div className="carousel-inner">
   <div className="carousel-item active" data-bs-interval={10000}>
     <img src="http://www.ansonika.com/atena/img/testimonials.jpg" className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
       <h5 className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, 
eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</h5>
       <p className='images'>
       <img className='karla' src=' http://www.ansonika.com/atena/img/testimonial_1.jpg'/> Karla

</p>
     </div>
   </div>
   <div className="carousel-item" data-bs-interval={2000}>
     <img src="http://www.ansonika.com/atena/img/testimonials.jpg" className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
     <h5 className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, 
eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</h5>
<p className='images'>
       <img className='karla' src=' http://www.ansonika.com/atena/img/testimonial_2.jpg'/> Karla

</p>
     </div>
   </div>
   <div className="carousel-item">
     <img src="http://www.ansonika.com/atena/img/testimonials.jpg" className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
     <h5 className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, 
eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</h5>
<p className='images'>
       <img className='karla' src=' http://www.ansonika.com/atena/img/testimonial_3.jpg'/> Karla

</p>
     </div>
   </div>
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true" />
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true" />
   <span className="visually-hidden">Next</span>
 </button>
</div>

   <div className='container text-center py-5'>
     <div className='row'>
       <h3>Latest from Atena ....</h3>
       <h5>Cum doctus civibus efficiantur in imperdiet deterruisset.</h5>
     </div>
   </div>

   <div className='discover'>
     <img  src='http://www.ansonika.com/atena/img/bg_content.jpg'/>
     
   </div>
   <div className='discoverthecampus text-center'>
     <h1>Discover the Campus</h1>
     <h5>Lorem ipsum dolor sit amet, vix  erat audiam ei. Cum doctus civibus efficiantur in. </h5>
     
   </div>


   <i class="fa-regular fa-circle-play playvideo1"></i>
   

   

   <div className='subscribe py-5 '>
     <div className='container'>
      <div className='row text-center sameline py-2'>
       <h3>Subscribe to our Newsletter for latest news.</h3>
       <form className='py-3' action=''>
   <input className='form1' type="email" placeholder='Your Email'></input>
   <button className="btn subsribe1 " type="submit">SUBSCRIBE</button>
 
 </form>
 


      </div>
     </div>
   </div>


   </>
  )
}

export default Body
