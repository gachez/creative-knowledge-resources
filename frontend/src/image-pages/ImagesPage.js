import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import Menu from '../components/universal-icons/Menu'
import backbtn from '../images/buttons_back.svg'
import axios from 'axios';
import close from '../images/icons_close.png'
import '../styles/ImagesPage.css'
import soly from '../images/soly-cise.jpg'
import soly2 from '../images/soly-cise-2.jpg'
import soly3 from '../images/soly-cisse.jpg'




let imageurls = [soly,soly2,soly3]
class ImagesPage extends Component{
    state={
        images: [],
        isLoaded: false,
        pageMedia: [],
        pageMediaImages: [],
        zoomim: null

    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/images/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                images: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/media`)
        .then(res =>{
            this.setState({
                pageMedia: res.data
            })
        })
        .catch(err => console.log(err))


    }

      callFunc = (func) =>{
          func()
      }
     
    render(){
        
        
     

      
            return(
                <div id="body">
                    <Menu page="fixed" />

                    {/* back button and title */}
                    <div className="back-and-title">
                        <Link to="/">
                        <img src={backbtn} className="back-img" />
                        </Link>
                        <p className="title">Art title goes here</p>
                    </div>
                    {/* container for the images description */}
                    <div className="images-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <br />
                    <div className="images-container">
                        {imageurls.map(image =>{
                            return(
                                <img src={image} className="images"/>
                            )
                        })
                        }
                    </div>
                    <br />

                    {/* comment container */}
                    <div className="comment-container">

                        <input className="comment-textbox" placeholder="What are your thoughts on this work?"/>    
                        <button>POST</button>
                    </div>    
                    <br />
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

export default ImagesPage;