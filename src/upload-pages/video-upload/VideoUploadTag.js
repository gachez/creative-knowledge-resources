import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import nextorange from '../../images/next.png'
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
    color: '#ffffff',
    cursor: 'pointer'
}

export default class VideoUploadTag extends Component{
    state={
        btnImg: nextburnt
    }
    render(){
       localStorage.clear() 
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
                <Link to={"/"}>
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
                    
                    <Link to={"/add-video-content"}>
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
                    }}>Choose tags (Videos)</p>

                    {/* 
                    subtitle format */}
                    <p style={{
                        position: 'absolute',
                        top: '40.5%',
                        left: '3.7%',
                         fontFamily:' Ubuntu',
                         fontSize:' 18px',   
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Category</p>

                   
                                        {/* 
                    subtitle category */}
                    <p style={{
                        position: 'absolute',
                        top: '40.5%',
                        left: '33.5%',
                         fontFamily:' Ubuntu',
                         fontSize:' 18px',   
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Discussion</p>

                               {/* section for the category tags */}
                               <div className="rectangle-tag" style={{position:'absolute',
                     top: '50.2%', left: '3.3%', cursor: 'pointer'}} onClick={
                         () =>{
                             document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ff321a'
                             document.getElementsByClassName('rectangle-tag')[0].style.color='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[0].style.border = 'none'
                             document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                             document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                             document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                             document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        
                             localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[0].innerText)
                            }
                     }>African games</div>
                     
                     <div className="rectangle-tag" style={{position:'absolute',
                     top: '50.2%', left: '12.2%',cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[1].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Animations</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '50.2%', left: '21.2%',cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[2].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Architecture</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '58.3%', left: '3.3%', width: '60px'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[3].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Dance</div>
                    
                    <div className="rectangle-tag" style={{position:'absolute',
                     top: '58.3%', left: '8.8%', width: '120px', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[4].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Decorative arts</div>
                     
                     <div className="rectangle-tag" style={{position:'absolute',
                     top: '58.3%', left: '18.2%', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[5].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Design</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '66.4%', left: '3.3%', width: '98px', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[6].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>installations</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '66.4%', left: '11.25%', width: '80px', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[7].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Painting</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '66.4%', left: '18.2%', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[8].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Pottery</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '74.5%', left: '3.3%', width: '81px', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[9].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Sculpture</div>

<div className="rectangle-tag" style={{position:'absolute',
                     top: '74.5%', left: '10.25%', width: '70px', cursor: 'pointer'}} onClick={
                        () =>{
                            localStorage.setItem('category', document.getElementsByClassName('rectangle-tag')[9].innerText)
                            
                            document.getElementsByClassName('rectangle-tag')[9].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[9].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[9].style.border = 'none'
                            document.getElementsByClassName('rectangle-tag')[0].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[0].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[0].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[1].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[1].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[1].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[2].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[2].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[2].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[3].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[3].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[3].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[4].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[4].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[4].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[5].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[5].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[5].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[6].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[6].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[6].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[7].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[7].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[7].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[8].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[8].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[8].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[10].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[10].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[10].style.border = 'solid 1px black'
                        }
                    }>Theater</div>

 
                    {/* section for the format tags */}
                     <div className="rectangle-tag" style={{
                        position: 'absolute',
                        top: '50.2%',
                        left: '33.7%',
                          width: '4.1%',
                          height: '4.6%',
                          cursor: 'pointer'
                    }} onClick={
                        () =>{
                            localStorage.setItem('discussion', document.getElementsByClassName('rectangle-tag')[11].innerText) 
                            
                            document.getElementsByClassName('rectangle-tag')[11].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[11].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[11].style.border = 'none'

                            document.getElementsByClassName('rectangle-tag')[12].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[12].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[12].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[13].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[13].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[13].style.border = 'solid 1px black'
                        }
                    }>
                        Ideas
                    </div>

                    <div className="rectangle-tag" style={{
                        position: 'absolute',
                        top: '50.2%',
                        left: '39.7%',
                          width: '4.1%',
                          height: '4.6%',
                          cursor: 'pointer'
                    }} onClick={
                        () =>{
                            localStorage.setItem('discussion', document.getElementsByClassName('rectangle-tag')[12].innerText) 
                            
                            document.getElementsByClassName('rectangle-tag')[12].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[12].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[12].style.border = 'none'

                            document.getElementsByClassName('rectangle-tag')[11].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[11].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[11].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[13].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[13].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[13].style.border = 'solid 1px black'
                        }
                    }>
                        Debates
                    </div>

                    <div className="rectangle-tag" style={{
                        position: 'absolute',
                        top: '50.2%',
                        left: '45.7%',
                          width: '5.1%',
                          height: '4.6%',
                          cursor: 'pointer'
                    }} onClick={
                        () =>{
                            localStorage.setItem('discussion', document.getElementsByClassName('rectangle-tag')[13].innerText) 
                            
                            document.getElementsByClassName('rectangle-tag')[13].style.backgroundColor='#ff321a'
                            document.getElementsByClassName('rectangle-tag')[13].style.color='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[13].style.border = 'none'

                            document.getElementsByClassName('rectangle-tag')[11].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[11].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[11].style.border = 'solid 1px black'
                            document.getElementsByClassName('rectangle-tag')[12].style.backgroundColor='#ffffff'
                            document.getElementsByClassName('rectangle-tag')[12].style.color='black'
                            document.getElementsByClassName('rectangle-tag')[12].style.border = 'solid 1px black'
                        }
                    }>
                        Interviews
                    </div>


                                             {/* 
                    subtitle year */}
                    <p style={{
                        position: 'absolute',
                        top: '40.5%',
                        left: '61.9%',
                         fontFamily:' Ubuntu',
                         fontSize:' 18px',   
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Year created</p>
 {/* selectbox for the year */}
 <div style={{
                        position: 'absolute',
                        top: '49.2%',
                        left: '61.9%',
                        width: '14.6%',
                        height: '5.9%',
                        border: 'solid 1px #373a3c',
                        backgroundColor: '#ffffff'
                    }}>
                        <p id="year" style={{
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
                            left: '90%',
                            cursor: 'pointer'
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

            <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                       this.setState({
                           btnImg: nextorange
                       })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[0].innerText
                
                    localStorage.setItem('year', document.getElementsByClassName('years')[0].innerHTML)
                }
                   
                    
                }>2019</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[1].innerText
                    
                    localStorage.setItem('year', document.getElementsByClassName('years')[1].innerHTML)
                }
                   
                    
                }>2018</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[2].innerText
                
                    localStorage.setItem('year', document.getElementsByClassName('years')[2].innerHTML)
                }
                   
                    
                }>2017</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[3].innerText
                
                    localStorage.setItem('year', document.getElementsByClassName('years')[3].innerHTML)
                }
                   
                    
                }>2016</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[4].innerText
                
                    localStorage.setItem('year', document.getElementsByClassName('years')[4].innerHTML)
                }
                   
                    
                }> 2015</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[5].innerText
                    
                    localStorage.setItem('year', document.getElementsByClassName('years')[5].innerHTML)
                }
                   
                    
                }>2014</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[6].innerText
                
                    localStorage.setItem('year', document.getElementsByClassName('years')[6].innerHTML)
                }
                   
                    
                }>2013</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{

                    this.setState({
                        btnImg: nextorange
                    })
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[7].innerText
                
                    localStorage.setItem('year', document.getElementsByClassName('years')[7].innerHTML)
                }
                   
                    
                }>2012</p>

                </div>       </div>


        </div>
    )
    }
}