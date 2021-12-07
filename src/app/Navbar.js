import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Ripemetrics Redux Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/" style={{backgroundColor: "#FF792A", border: "1px solid black", boxShadow: "2px 2px 2px grey", color: "black"}}>Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
