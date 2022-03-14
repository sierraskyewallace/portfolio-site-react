import React from "react";
import {Link} from 'react-router-dom'


const NavBar = (props) => {
    return (
        <div>
      <Link to='/' style={{paddingRight: '10px'}}>Home</Link>
      <Link to='/projects' style={{paddingRight: '10px'}}>All Categories</Link>
      <Link to='/Blog' style={{paddingRight: '10px'}}>Scrape blog here?</Link>
    </div>
    )
}


export default NavBar;