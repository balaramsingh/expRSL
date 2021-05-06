import React,{Component} from 'react';
import {MenuItems} from "./Menuitems.js";
import './Navbar.css'
import logo from './logo.png'
class Navbar extends Component
{
  render(){
      return (
        <nav className="NavbarItems">
          <h1 className="nav-logo">expRSL</h1>
          <div className="menu-icon">  <img src={logo} width="45" height="45" /></div>
          <ul className="nav-menu">
            {
              MenuItems.map((item,index)=>
              {
                return (
                     <a className={item.cName} href={item.url}>
                       {item.title}
                     </a>
                )
              }
              )
            }
            </ul>

         
        </nav>
      )
  }
}
export default Navbar