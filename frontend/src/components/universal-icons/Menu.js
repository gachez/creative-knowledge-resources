import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import menu from '../../images/menu.png';
import bars from '../../images/bars.png';
import '../../styles/Menu.css';
import ckrlogo from '../../images/lettermark.svg'
import exit from '../../images/exit.png'
import iconClose from '../../images/icons_close.png'

const menuItems = {
    position:'relative',
    top:'-6px',
    marginLeft: '30px',
    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontWeight: 700,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal',
    color: '#373a3c',
    cursor: 'pointer'
}

class Menu extends Component{
    render(){
        return(
            <React.Fragment>
                {/* white container that holds the menu */}
       <div id="menu-container" style={{
           position:`${this.props.page}`,
           top: '0px', 
       
           zIndex: 999,
           width: '100%',
           height: '95px',
           boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.15)',
           backgroundColor: '#ffffff'
       }}>

         {/* logo for ckr */}
         <Link to={"/"}>
         <img alt="ckr logo" src={ckrlogo} style={{
             position: 'absolute',
             top: '34.7%',
             left: '3.7%'
         }}/> 

         </Link>
         
           {/* sidebar slide on for the menu items */}
           <div id="menu-items"  style={{
            position:'absolute',
            left: '59.5%',
            display: 'none',
            top: '29.5%',
            width: '458px',
            height: '40px'
           }}>
               <Link to={"/"} style={{linkStyleDecoration: 'none', textDecoration: 'none'}}><p style={menuItems}>Home</p></Link>
               <Link to={"/upload-pin"} style={{linkStyleDecoration: 'none', textDecoration: 'none'}}><p style={menuItems}>Upload</p></Link>
               <Link to={"/donate"} style={{linkStyleDecoration: 'none', textDecoration: 'none'}}><p style={menuItems}>Donate</p></Link>
               <Link to={"/contact-us"} style={{linkStyleDecoration: 'none', textDecoration: 'none'}}>
               <p style={menuItems}>Contact</p>
               </Link>
               
           </div>
           {/* container for the actual menu */}
        <div id="menu" style={{
            position:'absolute',
            left: '89%',
            top: '29.5%',
            width: '100px',
            height: '40px',
            border: 'solid 1px #ff321a',
            backgroundColor: '#ffffff'
        }}>

            <img src={menu} id="menu-text" style={{
                position: 'absolute',
                left: '15px',
                top: '15px'
            }} alt="menu"/>

            
<img src={exit} id="exit-text" style={{
                position: 'absolute',
                left: '15px',
                top: '15px',
                display: 'none'
            }} alt="menu"/>


<img src={iconClose} id="close" className="animated fowards rotateIn " style={{
                position: 'absolute',
                display: 'none',
                left: '62.5px',
                top: '11px'
            }} alt="close" 
            onClick={() =>{
                document.getElementById('menu-items').style.display="none"
                document.getElementById('bars').style.display="block"
                document.getElementById('menu-text').style.display="block"
                document.getElementById('exit-text').style.display="none"
                document.getElementById('close').style.display="none"
                console.log("show me")
            }}
            />

            <img src={bars} id="bars" style={{
                position: 'absolute',
                left: '62.5px',
                top: '8px',
                cursor: 'pointer'
            }} alt="bars"
            onClick={() =>{
                document.getElementById('menu-items').style.display="flex"
                document.getElementById('bars').style.display="none"
                document.getElementById('menu-text').style.display="none"
                document.getElementById('exit-text').style.display="block"
                document.getElementById('close').style.display="block"
                console.log("show me")
            }}/>
        </div>


        
        </div>
{/* menu ends here */}
       
            </React.Fragment>
        )
    }
}

export default Menu;