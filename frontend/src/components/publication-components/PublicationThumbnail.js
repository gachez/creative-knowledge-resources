import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import thumbnailpub from '../../images/thumbnails_publications.png'


class PublicationThumbnail extends Component{

    state={
        publications: [],
        isLoaded: false
     }
  
      componentDidMount(){
          axios.get(`http://localhost:5000/wp-json/wp/v2/publications?_embed`)
          .then(res =>{
              this.setState({
                  publications: res.data,
                  isLoaded: true
              })
          })
          .catch(err => console.log(err))
          localStorage.clear()
      }
  

    render(){
        return(
            <React.Fragment>
                
        {/* the images container  */}
        <div id="images-container" style={{
            width: '66.5%',
            height: '700px',
            position: 'absolute',
            top: `${73 - this.props.value}%`,
            left: '130px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gridTemplateRows: 'repeat(3,1fr)',
            gridColumnGap: '15px'
        }}>

        
    {/* thumbnail images */}

    {
                this.state.publications.map(publication => {
                    return(
                    <Link key={publication.id} to={"/publication-page-content"} onClick ={
                    () =>{
                        localStorage.setItem('id', publication.id)
                         }
                    }>
                    <img alt="thumbnail" src={publication._embedded['wp:featuredmedia']['0'].source_url} style={{
                        width:'300px',
                        height: '150px'
                    }}/>
                    </Link>)})
    }
                </div>
            </React.Fragment>
        )
    }
}

export default PublicationThumbnail;