import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="card-group m-4">
          <div className="card">
            <div className="card-body text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="card text-white">
            <div className="card-body text-center">
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <i className="cursor-pointer fa-brands fa-facebook mx-1 icon"></i>
                <i className="cursor-pointer fa-brands fa-twitter mx-1 icon"></i>
                <i className="cursor-pointer fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="cursor-pointer fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <h3>ABOUT FREELANCER</h3>
              <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
            </div>
          </div>
        </div>
      </footer>
      <div className='end text-center'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
