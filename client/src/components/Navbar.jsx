import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import "../styles/Navbar.css"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to="/" className='title'>NATURAL SHOP</Link>
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/expo">Expo</NavLink>
            </li>
            <li>
                <NavLink to="/copa">Copa</NavLink>
            </li>
            <li>
                <NavLink to="/programa">Programa</NavLink>
            </li>
            <li>
                <NavLink to="/participa">Participá</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
