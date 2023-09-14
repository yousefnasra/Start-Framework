import React from 'react'

export default function About() {
  return (
    <div className='about d-flex justify-content-center align-items-center'>
      <div>
        <div className='text-center pt-4'>
          <h2 className='fs-1 fw-bolder mb-3'>ABOUT COMPONENT</h2>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <div className='container'>
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-md-6 pe-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
