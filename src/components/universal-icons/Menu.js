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
    state={
        menuDisplay: 'none'
    }


    render(){
        return(
            <React.Fragment>
                      <Navbar sticky="top" className="menuNav" style={{height: '95px'}}>
                        <Link to={"/"}>
                        <Navbar.Brand href="#home"><img src={mark} style={{marginLeft: '50px', cursor: 'pointer'}}/></Navbar.Brand>
                        </Link>
                        <div className="menu-items" style={{ position: 'absolute', right: '200px', display: this.state.menuDisplay}}>
                           <Link style={{textDecoration: 'none', color: 'black'}} to={"/"}><p>Home</p></Link> 
                            <Link style={{textDecoration: 'none', color: 'black'}} to={"/upload-pin"}><p>Upload</p></Link>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={"/donate"}><p>Donate</p></Link>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={"/contact-us"}><p>Contact</p></Link>
                        </div>
                        <img style={{cursor: 'pointer'}} id="menuBtn" src={menuBars} onClick={ () => {
                            this.state.menuDisplay == "none" ? this.setState({menuDisplay: 'flex'}) : this.setState({menuDisplay: 'none'})
                        }}/>
                    </Navbar>
                    {/* NAVBAR SECTION ENDS HERE */}
      
       
            </React.Fragment>
        )
    }
}

export default Menu;