import React, {Component} from 'react'
import Menu from '../components/universal-icons/Menu'
import buttons_cancel from '../images/buttons_cancel.png'
import buttons_normal from '../images/buttons_normal.png'
import {Link} from 'react-router-dom'

class UploadPin extends Component{
    render(){
        return(
            <React.Fragment>

                <Menu page="fixed"/>
                
                {/* page title */}
                <p style={{
                    position: 'absolute',
                    top: '23.1%',
                    left: '46.4%',
                    fontFamily: 'Ubuntu',
                    fontSize: '30px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }}>Upload</p>

                {/* description on the upload page */}
                <p style={{
                    position: 'absolute',
                    top: '34.3%',
                    left: '27.7%',
                    width: '45.7%',
                    height: '96px',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStyle: 'normal',                   
                    letterSpacing: 'normal',
                    color: '#373a3c',
                    fontStretch: 'normal'
                }}>

                To upload content to this website, you need to be granted access through a one-time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; code sent by the admin. If you have the code, please enter it below.
<br /><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
To request access to upload, please contact the admin <strong style={{color: '#ff321a'}}>here.</strong>
                </p>

                <input style={{
                    position: 'absolute',
                    top: '55.9%',
                    left: '37.9%',
                      width: '60px',
                      height: '60px',
                      border: 'solid 1px #373a3c',
                      backgroundColor: '#ffffff'
                }} />

                

                <input style={{
                    position: 'absolute',
                    top: '55.9%',
                    left: '44.6%',
                      width: '60px',
                      height: '60px',
                      border: 'solid 1px #373a3c',
                      backgroundColor: '#ffffff'
                }} />


                
                <input style={{
                    position: 'absolute',
                    top: '55.9%',
                    left: '51.3%',
                      width: '60px',
                      height: '60px',
                      border: 'solid 1px #373a3c',
                      backgroundColor: '#ffffff'
                }} />

                

                <input style={{
                    position: 'absolute',
                    top: '55.9%',
                    left: '58%',
                      width: '60px',
                      height: '60px',
                      border: 'solid 1px #373a3c',
                      backgroundColor: '#ffffff'
                }} />

                

               <Link to={"/"}>
               <img  src={buttons_cancel} style={{
                position: 'absolute',
                top: '72.2%',
                left: '41.2%'
                }}/>
               </Link>
                <Link to={"/choose-content"}>
                <img src={buttons_normal} style={{
                position: 'absolute',
                top: '72.2%',
                left: '51.5%'
                }}/>
                </Link>
            </React.Fragment>
        )
    }
}

export default UploadPin;
