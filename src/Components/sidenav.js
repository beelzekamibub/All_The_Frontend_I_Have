import React, { useState } from 'react';
import '../styles/sidenav.css';
import { Link } from 'react-router-dom';


export const Sidenav = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>  
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
         
        </div>
        <h3>Hi, Advisor</h3>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              {/* <img
              className="logo"
              src={require("../Images/logo.png")}
              alt="logo"
            /> */}
              
            </Link>

            <div className='nav-list'>
              <Link to='/clientlist' className='nav-link active'>
                <i className='fas fa-list-ul nav-link-icon'></i>
                <span className='nav-link-name'>Client List</span>
              </Link>
              <Link to='/addclient' className='nav-link'>
                <i className='fas fa-plus-square nav-link-icon'></i>
                <span className='nav-link-name'>Add Client</span>
              </Link>
              <Link to='/profileadv' className='nav-link'>
                <i className='fas fa-user nav-link-icon'></i>
                <span className='nav-link-name'>Profile</span>
              </Link>
              {/* <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Investment</span>
              </Link> */}
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out aria-hidden="true" nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

     
    </main>
  );
};
