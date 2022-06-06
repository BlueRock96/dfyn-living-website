import React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import './App.scss';
import About from './pages/about/About';
import Career from './pages/career/Career';
import Home from './pages/home/Home';

const  App =() => {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route index element={<About />} />
        <Route exact path="/careers" element={<Career />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
}

const NavLayout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    borderTop: isActive ? '5px solid #B08A76' : '1px solid #B08A76',
    color: isActive ? '#B89C9C' : '#B08A76'
  });

  return (
    <div className="app-nav-wrapper">
      <div className="container">
      <nav className="app-nav">
        <NavLink to="/" style={style} className="nav-link">
          About
        </NavLink>
        <NavLink to="/careers" style={style} className="nav-link">
          Careers
        </NavLink>
        <NavLink to="/home" style={style} className="nav-link">
          Home
        </NavLink>
      </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};



export default App;
