import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
                <br />
                    <br />
                    <br />
        
                    {/* TITLE LIST GROUP STARTS HERE */}
                    <section className="title-list-group" >
                       
                    <Link to="/">
                        <img src={backbtn} className="back-img" />
                        </Link>

                        <p className="title-name" style={{position: 'absolute', left: '13.4%'}} dangerouslySetInnerHTML={{ __html: this.state.videos.title.rendered}}></p>                                                                                             
                    </section>
                    {/* TITLE LIST GROUP ENDS HERE */}
                    <br />
                    <br />
                    {/* video description */}
                    <div className="video-description" style={{position: 'relative', left: '13.4%'}} dangerouslySetInnerHTML={{ __html: this.state.videos.excerpt.rendered}}>
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
                     <br />
                     <br />
                    {/* comment container */}
                    <div className="comment-container-box">
                        <input className="comment-textbox" placeholder="What are your thoughts on this work?"/>
                        <button>POST</button>
                    </div>
                    <br /><br /><br />
                    {/* footer section */}
                    <footer>
                            </footer>   

                    </div>
                
                )
            }
            return null;
        
    }
}

export default VideosPageContent;







