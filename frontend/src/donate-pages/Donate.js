import React, {Component} from 'react'
import Menu from '../components/universal-icons/Menu'
import mastercard from '../images/mastercard.svg'
import paypal from '../images/paypal.png'
import visa from '../images/visa.svg'

import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'


class Donate extends Component{
    render(){
        return(
            <div>
                <Menu page="fixed"/>
                
                {/* page title */}
                <p style={{
                      position: 'absolute',
                      top: '22.7%',
                      left:'9.5%',
                      height: '35px',
                      fontFamily: 'Ubuntu',
                      fontSize: '30px',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#373a3c'
                }}>Donate</p>

                {/* copy writing paragraph */}
                <p style={{
                    position: 'absolute',
                    left: '9.7%',
                    top: '33%',
                      width: '535px',
                      height: '143px',
                      fontFamily: 'Ubuntu',
                      lineHeight: '30px',
                      fontSize: '18px',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontStretch: 'normal',
                    
                      letterSpacing: 'normal',
                      color: '#373a3c'
                }}>Creative Knowledge Resources is a proud, non-profit organization. We rely on people like you to keep this website up and running. Any amount donated will be highly appreciated. 
<br /><br />
Should you wish to donate, please select your preffered payment option. Should you have any questions, feel free to <strong>contact us.</strong></p>

                {/* visa icon */}
                <img src={visa} style={{
                    position: 'absolute',
                    top: '36.5%',
                    left: '58.3%'
                }}/>

                {/* mastercard icon */}
                <img src={mastercard} style={{
                    position: 'absolute',
                    top: '36.5%',
                    left: '69.3%'
                }}/>

                {/* paypal icon */}
                <img src={paypal} style={{
                position: 'absolute',
                top: '36.5%',
                left: '80.2%'
                }}/>

                
{/* the footer */}
    <div style={{
        position: 'absolute',
        top: '90%',
          width: '100%',
          height: '75px',
          backgroundColor: '#373a3c'
        
    }}>

    <img src={icon_facebook} style={{
        position:'absolute',
        top: '34.7%',
        left: '41%'
    }}/>
    <img style={{
        position:'absolute',
        top: '34.7%',
        left: '46.4%'
    }} src={icon_twitter}/>
    <img style={{
        position:'absolute',
        top: '34.7%',
        left: '51.8%'
    }} src={icon_instagram}/>
    <img style={{
        position:'absolute',
        top: '34.7%',
        left: '57.2%'
    }} src={icon_linkedin}/>
    </div>

            </div>
        )
    }
}

export default Donate;