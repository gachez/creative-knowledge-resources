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
   
        if(this.state.isLoaded){
       
            console.log(this.state.videos.title.rendered)
        return(
            <div>
                <Menu page="fixed"/>
                {/* body container */}
                    <div className="back-title-container">
                       <Link to="/videos"><img src={backbtn} className="back"/></Link> 
                        <p dangerouslySetInnerHTML={{ __html: this.state.videos.title.rendered}}></p>
                    </div>
                    <br />
                    {/* video description */}
                    <div className="video-description" dangerouslySetInnerHTML={{ __html: this.state.videos.excerpt.rendered}}>
                    </div>
                    <br />
                    {/* video frame */}
                    <iframe 
                    className="video-frame" 
                    src={this.state.videos['acf'].url} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen></iframe>
                    <br />
                    {/* comment container */}
                    <div className="comment-container">
                        <input className="comment-textbox" placeholder="What are your thoughts on this work?"/>
                        <button>POST</button>
                    </div>
                    <br />
                    {/* footer section */}
                    <section className="footer-section">
                        <img id="fb" src={icon_facebook}/>
                        <img id="insta" src={icon_instagram}/>
                        <img id="linkedin" src={icon_linkedin}/>
                        <img id="twitter" src={icon_twitter}/>
                    </section>

                    </div>
                
                )
            }
            return null;
        
    }
}

export default VideosPageContent;







