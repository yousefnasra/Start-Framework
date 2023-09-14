import React from 'react'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'

export default function Portfolio() {
  return (
    <div className='heading mb-4'>
      <div className="pt-4">
        <div className="text-center">
          <h2 className='fs-1 fw-bolder mb-3'>PORTFOLIO COMPONENT</h2>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="hero" className='w-100 rounded-3' />
                <div className='layer cursor-pointer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="hero" className='w-100 rounded-3' />
                <div className='layer cursor-pointer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="hero" className='w-100 rounded-3' />
                <div className='layer cursor-pointer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="hero" className='w-100 rounded-3' />
                <div className='layer cursor-pointer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="hero" className='w-100 rounded-3' />
                <div className='layer cursor-pointer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="hero" className='w-100 rounded-3' />
                <div className='layer cursor-pointer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus fa-6x text-white'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
