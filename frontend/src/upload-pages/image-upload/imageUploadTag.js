import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import backburnt from '../../images/backburnt.png'
import nextburnt from '../../images/nextburnt.png'
import '../../styles/imageUploadTag.css'
import cancel from '../../images/buttons_cancel.png'

import orangeback from '../../images/orangeback.png'
import downIcon from '../../images/downiconorange.png'

const dropDownFontStyle = {
    marginLeft: '15px',
    marginTop: '26px',
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff'
}

class ImageUploadTag extends Component{
    state={
        btnImg: nextburnt
    }
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
                         color: '#8d8d8d' 
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
                         color: '#8d8d8d' 
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
                         color: '#8d8d8d' 
                    }}> Upload</p>

                {/* cancel icon */}
                    <Link to={"/upload-pin"}>
                    <img src={cancel} style={{
                        position: 'absolute',
                        left: '67.8%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    
                    {/* separator line vertical */}
                    <div style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor:'black',
                        position: 'absolute',
                        left: '77%',
                        top: '35px'
                    }}></div>

                    {/* back button burnt */}
                    <Link to={"/choose-content"}>
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '79.5%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    
                    <Link to={"/add-image-content"}>
                    <img id="next" src={this.state.btnImg} style={{
                        position: 'absolute',
                        left: '89%',
                        paddingTop: '28px'
                    }}/> 
                    </Link>
                   

                    </div>
                    {/* top bar ends here */}

                                        {/* page title here */}
                                        <p style={{
                        position: 'absolute',
                        left: '3.7%',
                        top: '25.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '30px',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Choose tags</p>
{/* 
                    subtitle */}
                    <p style={{
                        position: 'absolute',
                        top: '37.5%',
                        left: '3.7%',
                         fontFamily:' Ubuntu',
                         fontSize:' 18px',   
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Category</p>

            {/* section for the tags */}

                    <div className="rectangle-tag" style={{position:'absolute',
                     top: '46.2%', left: '3.3%'}} onClick={
                         () =>{
                             document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ff321a'
                             document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                         }
                     }>African games</div>
                     
                     <div className="rectangle-tag" style={{position:'absolute',
                     top: '46.2%', left: '12.2%'}} onClick={
                        () =>{
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ff321a'
                        
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                        }}>Animations</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '46.2%', left: '21.2%'}} onClick={
                        () =>{
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ff321a'
                        
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                        }}>Architecture</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '54.3%', left: '3.3%', width: '60px'}} onClick={
                        () =>{
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ff321a'
                        
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                        }}>Dance</div>
                    
                    <div className="rectangle-tag" style={{position:'absolute',
                     top: '54.3%', left: '8.8%', width: '120px'}}>Decorative arts</div>
                     
                     <div className="rectangle-tag" style={{position:'absolute',
                     top: '54.3%', left: '18.2%'}}>Design</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '62.4%', left: '3.3%', width: '98px'}}>installations</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '62.4%', left: '11.25%', width: '80px'}}>Painting</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '62.4%', left: '18.2%'}}>Pottery</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '70.5%', left: '3.3%', width: '81px'}}>Sculpture</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '70.5%', left: '10.25%', width: '70px'}}>Theater</div>
            {/* section for the tags ends here */}

                    {/* year subtitle */}
                    <p style={{
                          position: 'absolute',
                          top: '37%',
                          left: '37.5%',
                          fontFamily: 'Ubuntu',
                          fontSize: '18px',
                          fontWeight: 600,
                          fontStyle: 'normal',
                          fontStretch: 'normal',
                          lineHeight: 1.17,
                          letterSpacing: 'normal',
                          color: '#373a3c'
                    }}>Year created</p>

                    {/* selectbox for the year */}
                    <div style={{
                        position: 'absolute',
                        top: '46.2%',
                        left: '37.5%',
                        width: '14.6%',
                        height: '5.9%',
                        border: 'solid 1px #373a3c',
                        backgroundColor: '#ffffff'
                    }}>
                        <p style={{
                              marginLeft: '15px',
                              fontFamily: 'Ubuntu',
                              fontSize: '14px',
                              fontWeight: 300,
                              fontStyle: 'normal',
                              fontStretch: 'normal',
                              lineHeight: 'normal',
                              letterSpacing: 'normal',
                              color: '#373a3c'
                        }}>Year created</p>
                        <img style={{
                            position: 'absolute', 
                            top: '19px',
                            left: '90%'
                        }} src={downIcon} 
                        onClick={
                            ()=>{
                                let drop = document.getElementById('year-dropdown')
                                if(drop.style.display==="block"){
                                    drop.style.display="none"
                                }
        
                                else if(drop.style.display==="none"){
                                    drop.style.display="block"
                                }
        
                                else{
                                    console.log("elsed")
                                }
                                
                            }
                        }/>

                            {/* dropdown for the year filter */}
            <div id="year-dropdown" style={{
                   position: 'absolute',
                   top: '100%',
                   left: 0,
                   width: '100%',
                   display: 'none',
                     height: '236px',
                     backgroundColor: '#373a3c',
                     zIndex: 999,
                     overflowY: 'scroll'
                   
                }}>

                <p style={dropDownFontStyle}>2019</p>
                <p style={dropDownFontStyle}>2018</p>
                <p style={dropDownFontStyle}>2017</p>
                <p style={dropDownFontStyle}>2016</p>
                <p style={dropDownFontStyle}>2015</p>
                <p style={dropDownFontStyle}>2014</p>
                <p style={dropDownFontStyle}>2013</p>
                <p style={dropDownFontStyle}>2012</p>
                <p style={dropDownFontStyle}>2011</p>
                <p style={dropDownFontStyle}>2010</p>
                <p style={dropDownFontStyle}>2009</p>
                <p style={dropDownFontStyle}>2008</p>
                <p style={dropDownFontStyle}>2007</p>
                <p style={dropDownFontStyle}>2006</p>
                <p style={dropDownFontStyle}>2005</p>

                </div>
            
                    </div>
            </div>
        )
    }
}

export default ImageUploadTag;