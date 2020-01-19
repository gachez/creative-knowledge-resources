import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import menuBars from '../../images/buttons_open_menu.png'
import mark from '../../images/logo.svg'
import {Nav, 
    NavDropdown,
     Form,
     FormControl,
      Button, 
      Navbar,
      ListGroup,
      Container,
      Col,
      Row,
      CardDeck,
      Card
    } from 'react-bootstrap'
import '../../styles/Menu.css';



class Menu extends Component{


    render(){
        return(
            <React.Fragment>
                     {/* NAVBAR SECTION STARTS HERE */}
                     <Navbar sticky="top" className="menuNav" style={{height: '95px'}}>
                        <Navbar.Brand href="#home"><img src={mark} style={{marginLeft: '50px', cursor: 'pointer'}}/></Navbar.Brand>
                        <div className="menu-items" style={{display: 'flex', position: 'absolute', right: '200px'}}>
                            <p>Home</p>
                            <p>Upload</p>
                            <p>Donate</p>
                            <p>Contact</p>
                        </div>
                        <img id="menuBtn" src={menuBars}/>
                    </Navbar>
                    {/* NAVBAR SECTION ENDS HERE */}
      
       
            </React.Fragment>
        )
    }
}

export default Menu;