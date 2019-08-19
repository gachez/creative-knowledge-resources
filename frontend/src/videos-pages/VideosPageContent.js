import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import Menu from '../components/universal-icons/Menu'
import backbtn from '../images/buttons_back.svg'
import youtube from '../images/youtube.png'
import axios from 'axios'


class VideosPageContent extends Component{
    state={
        videos: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp/wp-json/wp/v2/videos/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                videos: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

    }
   
    render(){
   
        if(this.state.isLoaded){
            console.log(this.state.videos)
        return(
            <div>
                <Menu page="fixed"/>
                
                {/* back icon */}
                <Link to={"/videos"}>
                <img src={backbtn} style={{
                    position: 'absolute',
                    top: '25.5%',
                    left: '4.5%'
                }}/>

                </Link>
                
                {/* page title */}
                <p style={{
                    position:'absolute',
                    top: '20%',
                    left: '13.4%',
                    fontFamily: 'Ubuntu',
                    fontSize: '30px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }} dangerouslySetInnerHTML={{ __html: this.state.videos.title.rendered}}>
                    
                </p>

                {/* image description */}
                <p style={{
                    position: 'absolute',
                    top: '31%',
                    left: '13.4%',
                    width: '72%',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.35,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }} dangerouslySetInnerHTML={{ __html: this.state.videos.excerpt.rendered}}></p>

                {/* videos */}

                <iframe
                style={{
                    position: 'absolute',
                    top:'52%',
                    left: '13.4%',
                    backgroundColor: 'black'
                  
                }} 
                width="72%" 
                height="550px" 
                src={this.state.videos.acf['url']} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

                </iframe>
                

{/* container for the comment box */}
<div style={{
    position: 'absolute',
    left: '13.4%',
    top: '132.5%',
    width: '72%',
    height: '700px',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
    backgroundColor: '#ffffff'
}}>

<input type="textbox" placeholder="What are your thoughts on this work?" style={{
    position: 'absolute',
    top: '7.1%',
    left: '7.5%',
      width: '85%',
      height: '25%',
      border: 'solid 1px #373a3c',
      fontFamily: 'Ubuntu',
      paddingLeft : '20px',
      paddingTop: '20px',
      fontSize: '18px',
      fontWeight: 300,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.35,
      letterSpacing: 'normal',
      color: '#8d8d8d'
}}/>

<button style={{
    position: 'absolute',
    top: '38.5%',
    border: 'none',
    left: '85.5%',
     width: '100px',
     height: '40px',
     backgroundColor: '#ff8d80',

     fontFamily: 'Ubuntu',
  fontSize: '14px',
  fontWeight: 500,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.1px',
  color: '#ffffff'
   
}}>POST</button>
</div>

{/* the footer */}
    <div style={{
        position: 'absolute',
        top: '248%',
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
        
        )}
        return null
        
    }
}

export default VideosPageContent;
