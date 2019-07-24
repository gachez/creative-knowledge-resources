import React, {Component} from 'react'
import Menu from '../components/universal-icons/Menu'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'


class Contact extends Component{
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
                }}>Feel free to reach out</p>

                <p style={{
                    position: 'absolute',
                    top: '40.3%',
                    left: '9.5%',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.17,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }}>
                    Email address
                </p>

                <p style={{
                    position: 'absolute',
                    top: '44%',
                    left: '9.5%',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.35,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                  
                }}>info@ckr.za</p>


                
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

export default Contact;