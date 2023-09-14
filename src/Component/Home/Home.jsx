import React from 'react'
import hero from "../../assets/images/avataaars.svg"
export default function Home() {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="text-center">
        <img src={hero} alt="hero" className='mb-3' style={{ width: '250px' }} />
        <div className='text-center pt-4'>
          <h2 className='fs-1 fw-bolder mb-3'>START FRAMEWORK</h2>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>

    </div>

  )
}
