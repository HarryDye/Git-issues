import React from 'react';
import { NavLink } from 'react-router-dom';

//the link to, links component to a route by changing the path in the URL
const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/feature">Feature</NavLink></li>
    </ul>
  </header>
);

export default Header;
