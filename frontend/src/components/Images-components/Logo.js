import React, {Component} from 'react'
import '../../styles/Logo.css'
import logotext from '../../images/logotext.svg'
import logosubtext from '../../images/logo_subtext.svg'
import logo from '../../images/vector.svg'


class Menu extends Component{
    render(){
        return(
            <React.Fragment>
                   {/* logo for the homepage */}
        <div id="container" >
        <div id="logo-container" 
>
        <img src={logo} alt="logo-text" style={{
        zIndex: 999
        
        }}/>
        <img src={logosubtext} id="logo-sub" alt="logo sub text" />
            
            </div>    
        </div>
 
 
            </React.Fragment>
        )
    }
}

export default Menu;