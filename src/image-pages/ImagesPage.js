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
import ImagesContainer from '../components/Images-components/ImagesContainer'




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
        if(this.state.isLoaded){
       

            console.log(this.state.pageMediaImages)
            return(
                <div id="body">
                    <Menu page="fixed" />
                    <br />
                    <br />
                    <br />
        
                    {/* TITLE LIST GROUP STARTS HERE */}
                    <section className="title-list-group" >
                       
                    <Link to="/">
                        <img src={backbtn} className="back-img" />
                        </Link>

                        <p className="title-name" style={{position: 'absolute', left: '13.4%'}} dangerouslySetInnerHTML={{ __html: this.state.images.title.rendered}}></p>
                        
                        
                      
                       
                    </section>
                    {/* TITLE LIST GROUP ENDS HERE */}
                    {/* container for the images description */}
                    <section className="images-description" style={{width: '73.2%', position: 'relative', left: '13.4%', top: '30px'}} dangerouslySetInnerHTML={{ __html: this.state.images.content.rendered}}>
                     </section>
                    {/* images container ends here */}

                    <br />
                    <br />

                    {/* comment container */}
                    <section style={{position: 'relative', left: '13.4%'}} className="comment-container-box">

                        <input className="comment-textbox" placeholder="What are your thoughts on this work?"/>    
                        <button>POST</button>
                    </section>    
                    <br />
                    <br />
                    <div className="footer-container">
                    </div>
                    </div> 
                
            
            )}
            return null;
            
    
        
    }
}

export default ImagesPage;