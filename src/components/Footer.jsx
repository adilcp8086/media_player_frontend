import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center alig-items-center'>
        <div className='footer d-flex align-item-center justify-content-evenly'>
          <div className='website' style={{width:"400px"}}> 
          <h5><i class="fa-solid fa-video text-warning me-2" ></i>
           Media Player </h5>
           <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed obcaecati
          </p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{textDecoration:"none",color:"white"}}>Landing page</Link>
            <Link to='/home' style={{textDecoration:"none",color:"white"}}>Home page</Link>
            <Link to='/watch' style={{textDecoration:"none",color:"white"}}>Watch history</Link>
            </div>
            <div className='links d-flex flex-column ms-5'>
              <h4>Links</h4>
              <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none",color:"white"}}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none",color:"white"}}>React bootstrap</Link>
            <Link to='https://bootswatch.com/'target='_blank' style={{textDecoration:"none",color:"white"}}>Boots Watch</Link>
              
            </div>
            <div className='contactus ms-4'>
              <h4>Contact us</h4>
              <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter your email' />
                <button className='btn btn-warning ms-3'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-evenly align-item-center'>
                <Link to='https://www.instagram.com/'className='mt-3' >
                <i class="fa-brands fa-instagram "  style={{fontSize:"25px"}}></i>
                </Link>
                <Link to='https://www.facebook.com/' className='mt-3'>
            <i class="fa-brands fa-facebook" style={{fontSize:"25px"}} ></i>
            </Link>
            <Link to='https://github.com/' className='mt-3'>
            <i class="fa-brands fa-github" style={{fontSize:"25px"}}></i>
            </Link>
            <Link to="https://twitter.com/i/flow/login" className='mt-3'>
              <i class="fa-brands fa-x-twitter" style={{fontSize:"25px"}}></i>
              </Link>
              </div>
            </div>

        </div>
        </div>
       <p className='mt-5 text-center'>Copyright &copy; 2023 media player.Built with React</p>
    
    </>
  )
}

export default Footer