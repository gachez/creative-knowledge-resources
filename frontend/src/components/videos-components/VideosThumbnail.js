import React, {Component} from 'react'
import axios from 'axios'
import thumbnailvid from '../../images/thumbnails_video.png'
import {Link} from 'react-router-dom'


class VideosThumbnail extends Component{
    
    state={
        videos: [],
        isLoaded: false
     }
  
      componentDidMount(){
          axios.get(`http://localhost:5000/wp-json/wp/v2/videos?_embed`)
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
            console.log(this.state.videos)
            return(
                <React.Fragment>
                    
            {/* the images container  */}
            <div id="images-container" style={{
                width: '66.5%',
                height: '700px',
                position: 'absolute',
                top: `${73 - this.props.value}%`,
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gridTemplateRows: 'repeat(3,1fr)',
                gridColumnGap: '15px',
                left: '130px'
            }}>
    {
                this.state.videos.map(video => {
                    return(
                    <Link key={video.id} to={"/videos-page-content"} onClick ={
                    () =>{
                        localStorage.setItem('id', video.id)
                         }
                    }>
                    <img alt="thumbnail" src={video._embedded['wp:featuredmedia']['0'].source_url} style={{
                        width:'300px',
                        height: '150px'
                    }}/>
                    </Link>)})
    }
            
        
      
   
        
            </div>
                </React.Fragment>
            )
        }

        else{
            return null
        }
       
    }
}

export default VideosThumbnail;