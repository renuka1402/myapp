import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';


const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      {token && (
        <header className="header">
          <div className="logo">MyApp</div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="search">Search</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link1" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <Outlet />
    </>
  );
};

export default Layout;