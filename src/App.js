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
        <Route index element={<Home />} />
        <Route exact path="/careers" element={<Career />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
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
        <NavLink to="/about" style={style} className="nav-link">
          About
        </NavLink>
        <NavLink to="/careers" style={style} className="nav-link">
          Careers
        </NavLink>
        <NavLink to="/" style={style} className="nav-link">
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

const PageNotFound =() =>{
  const navigateHome = () =>{
    window.location.href = "/"
  }
  return(
    <>
    <div className="page-not-found">
      <div className="content">
      <h1>Opps , 404!</h1>
      <button className="btn click-home" onClick={navigateHome}>Click Here</button>
      </div>
    </div>
    </>
  )
};

export default App;
