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
        attribute: ''
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
         
           {/* sidebar slide on for the menu items */}
           <div className="menu-items"   >
               <Link to={"/"} style={{textDecoration: 'none', listStyle: 'none'}}><p>Home</p></Link>
               <Link to={"/upload-pin"} style={{textDecoration: 'none', listStyle: 'none'}}><p >Upload</p></Link>
               <Link to={"/donate"} style={{textDecoration: 'none', listStyle: 'none'}}><p>Donate</p></Link>
               <Link to={"/contact-us"} style={{textDecoration: 'none', listStyle: 'none'}}>
               <p >Contact</p>
               </Link>
               
           </div>
           {/* container for the menu button */}
        <div id="menu"  onClick={() =>{
                document.getElementsByClassName('menu-items')[0].style.display==="none" ? document.getElementsByClassName('menu-items')[0].style.display="flex" : document.getElementsByClassName('menu-items')[0].style.display="none" 
                document.getElementById('bars').style.display="none"
                document.getElementById('menu-text').style.display="none"
                document.getElementById('exit-text').style.display="block"
                document.getElementById('close').style.display="block"
                console.log("show me")
            }}> 

            <img src={menu} id="menu-text" 
            alt="menu"
           
            />

            
<img src={exit} id="exit-text" alt="menu"/>


<img src={iconClose} id="close" className="animated fowards rotateIn " alt="close" 
            onClick={() =>{
                document.getElementsByClassName('menu-items')[0].style.display="none"
                document.getElementById('bars').style.display="block"
                document.getElementById('menu-text').style.display="block"
                document.getElementById('exit-text').style.display="none"
                document.getElementById('close').style.display="none"
                console.log("close")
            }}
            />

            <img src={bars} id="bars"  alt="bars"
         />
        </div>


        
        </div>
{/* menu ends here */}
       
            </React.Fragment>
        )
    }
}

export default Menu;