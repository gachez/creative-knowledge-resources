import React from 'react'
import cancel from '../../images/buttons_cancel.png'
import orangeback from '../../images/orangeback.png'
import preview from '../../images/preview.png'
import upload from '../../images/upload.png'
import {Link} from 'react-router-dom'


export default class PublicationContentUpload extends React.Component{
    render(){
        return(
            <div>
                  {/* top bar on page */}
                  <div style={{
                          width: '100%',
                          height: '95px',
                          boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.15)',
                          backgroundColor:' #ffffff'
                    }}>

                    <p style={{
                        position:'absolute',
                        left: '3.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Type</p>
                    
                    {/* separation line */}
                    <div style={{
                        position: 'absolute',
                        left: '6.6%',
                        top: '54px',                            
                          width: '40px',
                          height: '1px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>

{/* tags tag                     */}
<p style={{
                        position:'absolute',
                        left: '10.2%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c'                    }}>Tags</p>
                    


                        {/* separation line */}
                        <div style={{
                        position: 'absolute',
                        left: '13%',
                        top: '54px',                            
                          width: '40px',
                          height: '1px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>

                    <p style={{
                        position:'absolute',
                        left: '16.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c' 
                    }}> Content</p>

                    {/* separation line */}
                    <div style={{
                        position: 'absolute',
                        left: '21.1%',
                        top: '54px',                            
                          width: '40px',
                          height: '1.5px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>
 
<p style={{
                        position:'absolute',
                        left: '24.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c' 
                    }}> Preview</p>
                    
                    
                    {/* separation line */}
                    <div style={{
                        position: 'absolute',
                        left: '29.1%',
                        top: '54px',                            
                          width: '40px',
                          height: '1.5px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>

<p style={{
                        position:'absolute',
                        left: '32.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c' 
                    }}> Upload</p>

                {/* cancel icon */}
                    <Link to={"/cancel-confirmation"}>
                    <img src={cancel} style={{
                        position: 'absolute',
                        left: '77.9%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    {/* separator line vertical */}
                    <div style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor:'black',
                        position: 'absolute',
                        left: '86.5%',
                        top: '35px'
                    }}></div>

                    {/* back button burnt */}
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '89%',
                        paddingTop: '28px'
                    }}/>


                

                    </div>
                    {/* top bar ends here */}

                    {/* page title */}
                    <p style={{
                        position: 'absolute',
                        left: '39.2%',
                        top:'23.1%',
                        fontFamily:' Ubuntu',
                        fontSize: '30px',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>Publication title here</p>

                    {/* type title goes here */}
                    <p style={{
                        position: 'absolute',
                        top: '35%',
                        left:'47.5%',
                        fontFamily: 'Ubuntu',
                        fontSize: '18px',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 1.17,
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>Type</p>

                    {/* the type of imagery goes here */}
                    <p style={{
                        position: 'absolute',
                        top: '39.5%',
                        left: '46%',
                          fontFamily: 'Ubuntu',
                          fontSize: '18px',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontStretch: 'normal',
                          lineHeight: 1.35,
                          letterSpacing: 'normal',
                          color: '#373a3c'
                    }}>Publication</p>

                    <p style={{
                        position:'absolute',
                        left: '47%',
                        top: '49%',
                         fontFamily: 'Ubuntu',
                         fontSize: '18px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Category</p>

                    <p style={{
                        position: 'absolute',
                        top: '53.5%',
                        left: '47%',
                        fontFamily: 'Ubuntu',
                        fontSize: '18px',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 1.35,
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>Theatre</p>

                <p style={{
                    position: 'absolute',
                    top: '61.5%',
                    left: '46.5%',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 600,
                    fontStyle:' normal',
                    fontStretch: 'normal',
                    lineHeight: 1.17,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }}>Year created</p>

                <p style={{
                     fontFamily: 'Ubuntu',
                     fontSize: '18px',
                     fontWeight: 300,
                     fontStyle: 'normal',
                     fontStretch: 'normal',
                     lineHeight: 1.35,
                     letterSpacing: 'normal',
                     color: '#373a3c',
                     position: 'absolute',
                     left: '47.5%',
                     top: '66.5%'
                }}>2010</p>

              <Link to={"/publication-preview"}>
              <img src={preview} style={{
                    position: 'absolute',
                    top: '78.7%',
                    left: '41.2%',
                    cursor: 'pointer'
                }}/>
              </Link>
               <Link to={"/upload-success"}>
               <img src={upload} style={{
                    position: 'absolute',
                    top: '78.7%',
                    left: '51.5%',
                    cursor: 'pointer'
                }}/>
               </Link> 
            </div>
        )
    }
}