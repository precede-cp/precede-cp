import React, { Component } from "react";
import  "./Nav.css";

const navList = [
  'home',
  'about us',
  'contact',
  'technology'
];


/**
 * Nav Menu
 *
 * @param
 * @public
 */
class Nav extends Component {

  render(){
    return (
      <ul className='nav-list'>
        {navList.map((navItem, index) => {
          return <li className='nav-item' key={index}><a>{navItem}</a></li>
        })}
      </ul>
    )
  }
}

export default Nav;