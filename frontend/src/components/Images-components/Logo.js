import React, {Component} from 'react'

import logotext from '../../images/logotext.svg'
import logosubtext from '../../images/logo_subtext.svg'
import logo from '../../images/vector.svg'


class Menu extends Component{
    render(){
        return(
            <React.Fragment>
                   {/* logo for the homepage */}
        <div style={{
            width: '100%',
              height: '250px',
              backgroundColor: '#373a3c',
              display: 'flex',
              paddingBottom: '20px'
        }}>
        <div style={{
            margin: 'auto',
            display: 'grid',
            gridRowGap: '25px'

            
        }}>
        <img src={logo} alt="logo-text" style={{
        zIndex: 999
        
        }}/>
        <img src={logosubtext} alt="logo sub text" style={{
        position: 'relative',
        left: '10px'
        }}/>
            
            </div>    
        </div>
 
 
            </React.Fragment>
        )
    }
}

export default Menu;