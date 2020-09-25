import React from 'react'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
             
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="/" className="brand-link">
      <img src="static/img/mobsf_icon.png" alt="logo" className="brand-image" style={{opacity: '.8'}} />
      <span className="brand-text logo-lg"> | <strong> BD</strong>H</span>
    </a>

    {/* Main Sidebar Container */}
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="info">
          <a href="#" className="d-block">Bible Doctrines</a>
        </div>
      </div>
      {/* Sidebar Menu */}
    
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">

        <li className="nav-item">
            <Link to="/admin" className="nav-link">
              <i className="nav-icon fas fa-th-list" />
              <p>Dashboard</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/introduction" className="nav-link">
              <i className="nav-icon fas fa-info-circle" />
              <p>Introduction</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="summary" className="nav-link">
              <i className="nav-icon fas fa-cog" />
              <p>
                Summary
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="holybible" className="nav-link">
              <i className="nav-icon fas fa-certificate" />
              <p>
                The Holy Bible
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#permissions" className="nav-link">
              <i className="nav-icon fas fa-list" />
              <p>
                Permissions
              </p>
            </a>
          </li>
         
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-question-circle" />
              <p>
                Support
              </p>
            </a>
          </li>
         
          {/* Settings */}
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-cog" />
              <p>
                Settings
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#activities" className="nav-link">
                  <i className="fa fa-language nav-icon" />
                  <p>User Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  <i className="fa fa-cogs nav-icon" />
                  <p>Change Password</p>
                </a>
              </li>
              
             
            
            </ul>
          </li>


        </ul>
      </nav>
      
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}


  </aside>
  
        </div>
    )
}

export default Menu;
