import { useFormik } from 'formik'
import React from 'react'

export default function Contact() {

  let formik = useFormik({
    initialValues: {
      userName: '',
      userAge: '',
      userEmail: '',
      userPassword: ''
    }
  })

  return (
    <div className='heading mb-4'>
      <div className="pt-4 ">
        <div className="text-center">
          <h2 className='fs-1 fw-bolder mb-3'>CONATCT SECTION</h2>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <form className='w-50 p-3 mt-5 mx-auto' onSubmit={formik.handleSubmit}>
          {formik.dirty? <label htmlFor="userName" className="position-relative top-0">userName : </label> : <label htmlFor="userName" className="position-relative top-0 top-hide">userName : </label>}
          <input id="userName" type="text" placeholder="userName" name="userName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName} className="form-control border-0 border-bottom py-3 position-relative" />

          {formik.dirty? <label htmlFor="userAge" className="position-relative top-0">userAge : </label> : <label htmlFor="userAge" className="position-relative top-0 top-hide">userAge : </label>}
          <input id="userAge" type="text" placeholder="userAge" name="userAge" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userAge} className="form-control border-0 border-bottom py-3 position-relative" />

          {formik.dirty? <label htmlFor="userEmail" className="position-relative top-0">userEmail : </label> : <label htmlFor="userEmail" className="position-relative top-0 top-hide">userEmail : </label>}
          <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userEmail} className="form-control border-0 border-bottom py-3 position-relative" />

          {formik.dirty? <label htmlFor="userPassword" className="position-relative top-0">userPassword : </label> : <label htmlFor="userPassword" className="position-relative top-0 top-hide">userPassword : </label>}
          <input id="userPassword" type="text" placeholder="userPassword" name="userPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userPassword} className="form-control border-0 border-bottom py-3 position-relative" />

          <button type='submit' className='btn mt-4 text-white' style={{ backgroundColor: '#1abc9c' }}>send Message</button>
        </form>
      </div>
    </div>
  )
}
