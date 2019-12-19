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
                        <img src={backbtn} className="back"/>
                        <p>Video title goes here</p>
                    </div>
                    </div>
                
                )
        
    }
}

export default VideosPageContent;







