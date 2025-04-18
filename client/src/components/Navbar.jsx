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
                <NavLink to="/about">El Evento</NavLink>
            </li>
            <li>
                <NavLink to="/cronograma">Cronograma</NavLink>
            </li>
            <li>
                <NavLink to="/2">F&Qs</NavLink>
            </li>
            <li>
                <NavLink to="/3">Participá</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
