import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container">
                <Link className="navbar-brand text-white fs-2 fw-bolder" to="">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-white rounded-3 mt-3 mt-md-0 px-2" aria-current="page" to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-white rounded-3 mt-3 mt-md-0 px-2" to="portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-white rounded-3 mt-3 mt-md-0 px-2" to="contact">CONTACT</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
