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
import '../styles/videosPageContent.css'


class VideosPageContent extends Component{
    state={
        videos: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/videos/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                videos: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

    }
   
    render(){ 
   
       
            console.log(this.state.videos)
        return(
            <div>
                <Menu page="fixed"/>
                {/* body container */}
                    <div className="back-title-container">
                       <Link to="/videos"><img src={backbtn} className="back"/></Link> 
                        <p>Video title goes here</p>
                    </div>
                    <br />
                    {/* video description */}
                    <div className="video-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                    </div>
                    <br />
                    {/* video frame */}
                    <iframe 
                    className="video-frame" 
                    src="https://www.youtube.com/embed/rQvYG45otbs" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
                    <br />
                    {/* comment container */}
                    <div className="comment-container">
                        <input className="comment-textbox" placeholder="What are your thoughts on this work?"/>
                        <button>POST</button>
                    </div>
                    <br />
                    {/* footer section */}
                    <footer>
                        <img id="fb" src={icon_facebook}/>
                        <img id="insta" src={icon_instagram}/>
                        <img id="linkedin" src={icon_linkedin}/>
                        <img id="twitter" src={icon_twitter}/>
                    </footer>

                    </div>
                
                )
        
    }
}

export default VideosPageContent;







