import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import Menu from '../components/universal-icons/Menu'
import backbtn from '../images/buttons_back.svg'
import axios from 'axios';


let imageurls = []
class ImagesPage extends Component{
    state={
        images: [],
        isLoaded: false,
        pageMedia: [],
        pageMediaImages: []
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp/wp-json/wp/v2/images/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                images: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

        axios.get(`http://tengezastudios.co.ke/wp/wp-json/wp/v2/media`)
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
        
        
        const {title} = this.state.images     

        if(this.state.isLoaded){
            let filteredImages = this.state.pageMedia.filter(media => media.post == parseInt(localStorage.id))
            switch(filteredImages.length){
                case 1:
                    console.log(1)
                    break;
                case 2: 
                    console.log(2)
                    break;
                case 3:
                    console.log(3)
                    document.getElementById('comment-container').style.top = '300%'
                    document.getElementById('footer').style.top = '390%' 
                    break;
                case 4:
                    console.log(4)
                    document.getElementById('comment-container').style.top = '370%'
                    document.getElementById('footer').style.top = '460%' 
                    break;
                case 5:
                        console.log(5)
                        document.getElementById('comment-container').style.top = '445%'
                        document.getElementById('footer').style.top = '535%' 
                        break;                    
                default:
                    console.log(0)       
            }
            return(
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6,1fr)',
                    gridTemplateAreas: `'m m m m m m'
                                       'b b b b b b'
                                       'd d d d d d'
                                       'im im im im im im'
                                       'c c c c c c'
                                       'f f f f f f',`,
                    gridRowGap: '35px'
                }}>
                    <Menu page="fixed" area="m"/>

                   
                    <div className='back-title' style={{
                        gridArea: "b"
                    }}> 
                    {/* back icon */}
                    <Link to={"/"} style={{
                        textDecoration: 'none'
                    }}>
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
                    }}  >
                           {title.rendered} 

                    </p>
    
                    </div>
                    
                    {/* image description */}
                    <div style={{
                        gridArea: "d",
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
                    }} dangerouslySetInnerHTML={{__html:  this.state.images.excerpt.rendered}} />
                    
                    
    
                {/* images container */}
                <div className="images-container" style={{
                        position: 'absolute',
                        top: '52%',
                        left: '13.4%',
                        width: '72%',
                        gridArea: 'im',
                        height: 'auto',
                        display: 'grid',
                        gridGap: '25px'
                    }}>
                     {
                      filteredImages.map(media => {
                          return(
                              <React.Fragment key={media.id}>
                                  <div  style={{
                                      width: '100%',
                                      height: '550px',
                                      backgroundImage: `url(${media.media_details.sizes.full.source_url})`,
                                      backgroundRepeat: 'no-repeat',
                                      backgroundSize: 'cover'
                                  }}>
                                      </div>
                              </React.Fragment>
                          )
                      })    
                     }   
    
                    
                </div> 
    
    {/* container for the comment box */}
    <div id="comment-container" style={{
        position: 'absolute',
        top: '230%',
        gridArea: 'c',
        marginLeft: '13.4%',
        width: '72%',
        height: '600px',
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
    
    {/* footer */}
        <footer id="footer" style={{
            width: '100%',
            height: '75px',
            backgroundColor: '#373a3c',
            gridArea: 'f',
            position: 'absolute',
            top: '320%' 
        }}>
    
        <img src={icon_facebook} style={{
            position: 'relative',
            top: '34.7%',
            left: '41%'
        }}/>
        <img style={{
            position:'relative',
            top: '34.7%',
            left: '46.4%'
        }} src={icon_twitter}/>
        <img style={{
            position:'relative',
            top: '34.7%',
            left: '51.8%'
        }} src={icon_instagram}/>
        <img style={{
            position:'relative',
            top: '34.7%',
            left: '57.2%'
        }} src={icon_linkedin}/>
        </footer>
                </div>
            
            )
            
        }
        return null;
        
    }
}

export default ImagesPage;