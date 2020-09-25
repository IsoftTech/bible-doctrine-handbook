import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-dark navbar-primary">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a id="nbar" className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      <li className="nav-item d-none d-sm-inline-block"><Link to="/" className="nav-link">Logout</Link></li>
      
    </ul>
    {/* SEARCH FORM */}
    <form className="form-inline ml-3" action="/search" method="GET">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" id="navbar-search-input" type="search" placeholder="Search MD5" name="md5" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
  </nav>
 
        </div>
    )
}

export default Header
