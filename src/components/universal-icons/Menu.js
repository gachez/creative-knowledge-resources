import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import menu from '../../images/menu.png';
import bars from '../../images/bars.png';
import '../../styles/Menu.css';
import ckrlogo from '../../images/logo.svg'
import exit from '../../images/exit.png'
import iconClose from '../../images/icons_close.png'



class Menu extends Component{
    state={
        position: '',
        attribute: '',
        menuText: 'MENU',
        menuImg: bars
    }
    componentDidMount(){
        if(this.props.page === 'images'){
            this.setState({
                position: '30%',
                attribute: 'absolute'
            })
        }

        else{
            this.setState({
                position: 0,
                attribute: 'fixed'
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                {/* white container that holds the menu */}
       <div className="menu-container" style={{
           top: `${this.state.position}`,
           position: `${this.state.attribute}`
       }}> 

         {/* logo for ckr */}
         <Link className="logo-img" to={"/"}>
         <img  alt="ckr logo" src={ckrlogo} /> 

         </Link>
         
         <div className="menu-btn-container" >
        <div id="menu-items">
        <Link to={"/"} style={{textDecoration: 'none', listStyle:'none'}}>
            <p>Home</p>
        </Link>
        <Link to={"/upload-pin"} style={{textDecoration: 'none', listStyle:'none'}}>
            <p>Upload</p>
        </Link >
        <Link to={"/donate"} style={{textDecoration: 'none', listStyle:'none'}}>
            <p>Donate</p>
        </Link>
        <Link to={"contact-us"} style={{textDecoration: 'none', listStyle:'none'}}>
            <p>Contact</p>
        </Link>     
            </div>     
       
      
       </div>      

        <div id="menu-btn" onClick={
           () =>{


            
               document.getElementById("menu-items").style.display==="none" ? document.getElementById("menu-items").style.display = "flex" : document.getElementById("menu-items").style.display="none"
           
              
            }
       }>

    <p id="menu-btn-text">{this.state.menuText}</p>
       <img src={this.state.menuImg}/>
       </div> 
        </div>
{/* menu ends here */}

       
       
            </React.Fragment>
        )
    }
}

export default Menu;