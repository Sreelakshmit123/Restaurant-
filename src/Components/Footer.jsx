import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-dark '>


      <div className='container w-100 h-100  mb-5 mt-5'>

        <div className="footer-content  d-flex justify-content-between">
          <Row>

            <Col sm >
              <div style={{ color: 'white' }} className="title ">
                <h4 style={{ height: '50px', fontFamily: '"Protest Revolution", sans-serif' }} > Spice saga</h4>
                <span style={{ height: '50px' }} >Dolor sit amet consectetur adipisicing elit. Porro hic atque consectetur perspiciatis suscipit ex vitae iste quis consequatur in quaerat, quo fugit beatae numquam voluptatum distinctio error illo amet. sit amet consectetur adipisicing elit. Expedita accusantium ducimus asperiores fugiat vero sed, sint assumenda ea. Eaque sint quos ad error  </span><br />
              </div>
            </Col> 
            
            <Col sm>
              <div className="guides d-flex flex-column ">
                <h4 style={{ height: '55px', color: 'white' }}>Links</h4>
                <Link to={'/'} style={{ color: 'white' }} className='text-decoration-none'> Home</Link>
                <Link to={'/about'} style={{ color: 'white' }} className='text-decoration-none'> About</Link>
                <Link to={'/'} style={{ color: 'white' }} className='text-decoration-none'>Chef </Link>
                <Link to={'/'} style={{ color: 'white' }} className='text-decoration-none'> Menu</Link>
                <Link to={'/'} style={{ color: 'white' }} className='text-decoration-none' > Blog</Link>
              </div>
            </Col>
            <Col sm >
              <div style={{ color: 'white' }} className="contact">
                <h4 style={{ height: '55px' }}>Contact Us</h4>
                <div className='d-flex'>
                  <input placeholder='Enter Your Mail' type="text" className="form-control" />
                  <button className='btn btn-danger ms-2'><i class="fa-solid fa-arrow-right "></i></button>
                </div>
                <div style={{ color: 'white' }} className="icons mt-3 d-flex justify-content-between">
                  <i style={{ height: '55px' }} class="fa-solid fa-envelope fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-twitter fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-facebook fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-instagram fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-linkedin fa-2x"></i>

                </div>
              </div>

            </Col>
          </Row>

        </div>
        <p style={{ color: 'white' }} className='text-center '>Copyright &copy; 2023 & All Rights Reserved by Spice saga.</p>
      </div>

    </div>
  )
}

export default Footer