import React, {Component} from 'react'
import axios from 'axios'
import thumbnailvid from '../../images/thumbnails_video.png'
import {Link} from 'react-router-dom'
import youtube from '../../images/youtube.png'


class VideosThumbnail extends Component{
    
    state={
        videos: [],
        isLoaded: false
     }


  
      componentDidMount(){

       
          axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/videos?_embed`) 
          .then(res =>{
              this.setState({
                  videos: res.data,
                  isLoaded: true
              })
          })
          .catch(err => console.log(err))
          localStorage.clear()
      }
    render(){


        if(this.state.isLoaded){
        
            let filteredVideos = this.state.videos.filter(
                (video) => {
                    return video.acf['discipline'].includes(this.props.searchtext) || video.acf['year'].includes(this.props.searchtext) || video.acf['discussion'].includes(this.props.searchtext)
                }
            )
            console.log(this.state.videos)
            return(
                <React.Fragment>
                    
            {/* the images container  */}
            <div id="images-container" style={{
                width: '66.5%',
                height: '700px',
                position: 'absolute',
                top: '40%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gridTemplateRows: 'repeat(3,1fr)',
                gridColumnGap: '15px',
                left: '130px'
            }}>
    {

        filteredVideos < 1 ? 

                this.state.videos.map(video => {
                    return(
                    <Link key={video.id} to={"/videos-page-content"} onClick ={
                    () =>{
                        localStorage.setItem('id', video.id)
                         }
                    }>
                    <div style={{
                        display: 'flex',
                        width:'300px',
                        height: '150px',
                        backgroundImage: `url(${video._embedded['wp:featuredmedia']['0'].source_url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}>
                        <img src={youtube} style={{
                            margin: 'auto'
                        }}/>
                    </div>
                    </Link>)}) : filteredVideos.map(video => {
                    return(
                    <Link key={video.id} to={"/videos-page-content"} onClick ={
                    () =>{
                        localStorage.setItem('id', video.id)
                         }
                    }>       
                     <div style={{
                        width:'300px',
                        height: '150px',
                        backgroundImage: `url(${video._embedded['wp:featuredmedia']['0'].source_url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>
                    </Link>)})
    }
            
        
      
   
        
            </div>
                </React.Fragment>
            )
        }

        else{

        return <h2 style={{
            position: 'absolute',
            top: '40%',    
            left: '130px',
            fontFamily: 'Ubuntu'
        }}>Loading....</h2>
       
    }
        }
}

export default VideosThumbnail;