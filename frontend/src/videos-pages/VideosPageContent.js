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
                {/* body container */}
                <div id="grid-container" >

                                    {/* first grid */}
                <div id="back-title">

                    {/* back icon */}
                    <Link to={"/videos"}>
                    <img id="back-btn"src={backbtn} />

                    </Link>

                    {/* page title */}
                    <p id="title"  dangerouslySetInnerHTML={{ __html: this.state.videos.title.rendered}}>
                        
                    </p>
                    </div>

                    {/* second grid */}
                    {/* video description */}
                    <div id="vid-desc"  dangerouslySetInnerHTML={{ __html: this.state.videos.excerpt.rendered}}></div>

                    {/* videos */}

                    {/* third grid */}
                    <iframe
                     id="video"
                    width="72%" 
                    height="550px" 
                    src={this.state.videos.acf['url']} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>

                    </iframe>

                    {/* fourth grid */}
                    {/* container for the comment box */}
                    <div id="comment-box" >

                    <input id="text-box" type="textbox" placeholder="What are your thoughts on this work?" />

                    <button id="comment-btn" >POST</button>
                    </div>

                    {/* the footer */}
                        <div id="footer" >

                        <img id="fb" src={icon_facebook} />
                        <img id="twitter" src={icon_twitter}/>
                        <img id="insta" src={icon_instagram}/>
                        <img id="linkedin" src={icon_linkedin}/>
                        </div>



                </div>
                    </div>
                
                )}
        return null
        
    }
}

export default VideosPageContent;







