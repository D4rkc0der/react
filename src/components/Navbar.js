import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="Navbar">
      <h2><Link to={"/"} style={{color:"white",
        textDecoration:"none"}}>Fortnite Api</Link></h2>
      
        <ul >
          <Link to={"/about"} style={{color:"white",
        textDecoration:"none"}}>About</Link>
          <Link to={"/shop"} style={{color:"white",
        textDecoration:"none"}}>Shop</Link>
        </ul>
      </nav>
       
    </div>
  )
}

export default Navbar
