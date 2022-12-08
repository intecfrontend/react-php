import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/register" className="nav-link active">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login" className="nav-link active">Login</Link>
            </li>
          </ul>
          <span className="navbar-text">
            Welcome
          </span>
        </div>
      </nav>
    </>
  )
}
export default Header;
