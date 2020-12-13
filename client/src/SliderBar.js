import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../src/SliderBar.css';

export default props => {
    return(
        <Menu>
          <Link to = '/' className = 'menu-item'> Home </Link>
          <Link to = '/plantas' className = 'menu-item'> Plantas </Link>
          <Link to = '/cadastrar' className = 'menu-item'> Cadastrar </Link>
          <Link to = '/empresa' className = 'menu-item'> História </Link>
        </Menu>
    )
}