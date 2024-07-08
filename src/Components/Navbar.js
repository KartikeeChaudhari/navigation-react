import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
   <nav>
    <div className={classes.nav_container}>
    <div className={classes.logo}>K C</div>
    <ul className={classes.navlinks}>
        <Link to="/home">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/aboutus">About us</Link>
    </ul>
    <div className='sort button'>
        <button>Sort</button>
    </div>
    </div>
   </nav>
   <Outlet></Outlet>
       
    </>
  )
}

export default Navbar
