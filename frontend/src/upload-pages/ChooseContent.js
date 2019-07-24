import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import cancel from '../images/buttons_cancel.png'
import backburnt from '../images/backburnt.png'
import nextburnt from '../images/nextburnt.png'
import imageplaceholder from '../images/placeholder_image.png'

import publicationplaceholder from '../images/placeholder_publication.png'
import videoplaceholder from '../images/placeholder_video.png'
import next from '../images/next.png'
import imageplaceholder_white from '../images/placeholder_image_white.png'
import videoplaceholder_white from '../images/placeholder_video_white.png'
import publicationplaceholder_white from '../images/placeholder_publication_white.png'


class ChooseContent extends Component{
    state={
        btnImg: nextburnt,
        imagePlaceholder: imageplaceholder,
        videoPlaceholder: videoplaceholder,
        publicationPlaceholder: publicationplaceholder,
        navigateNext: ''
    }
    render(){
        return(
            <React.Fragment>
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
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#8d8d8d'                    }}>Tags</p>
                    


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
                    <Link to={"/upload-pin"}>
                    <img src={backburnt} style={{
                        position: 'absolute',
                        left: '79.5%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    

                    <Link to={this.state.navigateNext}>
                    <img  src={this.state.btnImg} style={{
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
                        top: '27.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '30px',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Choose your content type</p>


                    {/* card for the images */}
                    <div id="image-card" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '26.2%',
                          width: '150px',
                          height: '150px',
                          border: 'solid 1px #8d8d8d',
                          cursor: 'pointer'
                          
                    }} onClick={
                        () =>{
                            document.getElementById('image-card').style.backgroundColor='#ff321a'
                            document.getElementById('video-card').style.backgroundColor='white'
                            document.getElementById('publication-card').style.backgroundColor='white'
                            

                            this.setState({
                                btnImg: next,
                                imagePlaceholder: imageplaceholder_white,
                                videoPlaceholder: videoplaceholder,
                                publicationPlaceholder: publicationplaceholder,
                                navigateNext: "/image-upload-tag"
                            })
                        }
                    }>
                        <img src={this.state.imagePlaceholder} style={{
                            position: 'absolute',
                            left: '32%',
                            top: '31%',
                            zIndex: 5
                        }}/>
                    </div>
                    <p style={{
                        position:'absolute',
                        top:'70%',
                        left:'29%',
                         fontFamily: 'Ubuntu',
                         fontSize: '18px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Images</p>

                    {/* card for the videos */}
<div id="video-card" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '44.2%',
                          width: '150px',
                          height: '150px',
                          border: 'solid 1px #8d8d8d',
                          cursor: 'pointer'
                    }} onClick={
                        () =>{
                            document.getElementById('image-card').style.backgroundColor='white'
                            document.getElementById('video-card').style.backgroundColor='#ff321a'
                            document.getElementById('publication-card').style.backgroundColor='white'
                        
                            this.setState({
                                btnImg: next,
                                videoPlaceholder: videoplaceholder_white,
                                imagePlaceholder: imageplaceholder,
                                publicationPlaceholder: publicationplaceholder,
                                navigateNext: "/video-upload-tag"
                            })
                        }
                    }>
                        <img src={this.state.videoPlaceholder} style={{
                            position: 'absolute',
                            left: '32%',
                            top: '31%',
                            zIndex: 5
                        }}/>
                    </div>

<p style={{
                        position:'absolute',
                        top:'70%',
                        left:'47.25%',
                         fontFamily: 'Ubuntu',
                         fontSize: '18px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Video</p>
                    
                    {/* card for the publications */}
<div id="publication-card" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '62%',
                          width: '150px',
                          height: '150px',
                          border: 'solid 1px #8d8d8d',
                          cursor: 'pointer'
                    }} onClick={
                        () =>{
                            document.getElementById('image-card').style.backgroundColor='white'
                            document.getElementById('video-card').style.backgroundColor='white'
                            document.getElementById('publication-card').style.backgroundColor='#ff321a'
                            
                            this.setState({
                                btnImg: next,
                                publicationPlaceholder: publicationplaceholder_white,
                                imagePlaceholder: imageplaceholder,
                                videoPlaceholder: videoplaceholder,
                                navigateNext: "/publication-upload-tag"
                            })

                        }
                    }>

                        <img src={this.state.publicationPlaceholder} style={{
                            position: 'absolute',
                            left: '32%',
                            top: '31%',
                            zIndex: 5
                        }}/>
                    </div>

<p style={{
                        position:'absolute',
                        top:'70%',
                        left:'64%',
                         fontFamily: 'Ubuntu',
                         fontSize: '18px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Publication</p>

                </div>
            </React.Fragment>
        )
    }
}

export default ChooseContent 