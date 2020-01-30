import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div className="navbar-brand">
      <img src='/favicon.ico' width="30" alt="React app" className='d-inline-block align-top mr-3' />
      Todo app. Классическая версия.
    </div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <NavLink exact to="/" className='nav-link'>Главная</NavLink>
      </li>
      <li>
        <NavLink to="/todo" className='nav-link'>Todo</NavLink>
      </li>
    </ul>
  </nav>
)