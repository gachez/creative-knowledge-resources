import React, {Component} from 'react'

import logotext from '../../images/logotext.svg'
import logosubtext from '../../images/logo_subtext.svg'


class Menu extends Component{
    render(){
        return(
            <React.Fragment>
                   {/* logo for the homepage */}
        <div style={{
            width: '100%',
              height: '245px',
              backgroundColor: '#373a3c'
        }}>
            
        <img src={logotext} alt="logo-text" style={{
        zIndex: 999,
        
        position: 'absolute',
        left: '35%',
        top: '10.6%'    
        }}/>
        <img src={logosubtext} alt="logo sub text" style={{
            position: 'absolute',
            top: '28%',
            left: '39.5%'
        }}/>
        </div>
 
 
            </React.Fragment>
        )
    }
}

export default Menu;