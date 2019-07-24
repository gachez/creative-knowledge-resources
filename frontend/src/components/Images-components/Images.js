import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import thumbnail from '../../images/thumbnails_image.png'
import axios from 'axios'


class Images extends Component{
    state={
        imagesArr: []
    }

    // gets all featured images and adds them to the state
    componentDidMount(){
        axios.get(`http://localhost:8000/wp-json/wp/v2/images?_embed`)
        .then(res =>{
            this.setState({
                imagesArr: res.data
            })
        })
        .catch(err => console.log(err))

    }


    render(){
      console.log(this.state.imagesArr)
        return(
            <React.Fragment>
                
        {/* the images container  */}
        <div id="images-container" style={{
            width: '66.5%',
            height: '700px',
            position: 'absolute',
            top: '73%',
            left: '130px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridTemplateRows: 'repeat(4,1fr)',
            gridGap: '15px'
        }}>

        
    {/* thumbnail images */}

        {
            // maps each featuredmedia to an image
            this.state.imagesArr.map(image =>{
                return(
                    
                   <Link to={"/images-page"} onClick={
                       () =>{
                           localStorage.setItem('id', image.id)
                       }
                   } key = {image.id} >
                   <img alt="thumbnail"  src={image._embedded['wp:featuredmedia']['0'].source_url} style={{
                    width: '180px',
                    height: '150px',
                    objectFit: 'cover',
                    cursor: 'pointer'
                    }} />
                   </Link>    
                    
                
                )
            })
        }
        </div>
            </React.Fragment>
        )
    }
}

export default Images;