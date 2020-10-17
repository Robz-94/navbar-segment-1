import React, { Component } from 'react';
import {menuitems} from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"
class Navbar extends Component {
    state = {  clicked: false}
//swtiches the status of humburger menu
 handleClick=() => {
     this.setState({ clicked: !this.state.clicked })
 } 

    render() { 
        return ( 
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Online Shop</h1>
                <div className="menu-icon" onClick={this.handleClick}>
<i className={this.state.clicked  ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu  active' : 'nav-menu'}>
                    {menuitems.map((item,index)=>{
                    return(
                        //cascades the menu in the navbar 
                         <li key={index}>
                             <a className={item.cName } href={item.url} >
                             
                               {item.title}
                             </a>
                             </li>
                    )
                    })}                   
                </ul>
                <Button>
                    Shopping Cart
                </Button>
            </nav>

        
         );
    }
}
export default Navbar;