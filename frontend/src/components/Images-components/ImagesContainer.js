import React,{Component} from 'react'
import axios from 'axios'
import '../../styles/ImagesPage.css'

export default class ImageContainer extends Component{

    state={
        mediaImages:[],
        mediaData: []
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/images?_embed/${this.props.images.featured_media}`)
        .then(res => {
            this.setState({
                mediaData: res.data
            })
        })
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/media/${this.props.images.featured_media}`)
        .then(res =>{
            this.setState({
                mediaImages: res.data.media_details.sizes.full.source_url
              
            })
        })
        .catch(err => console.log(err))
    }
    render(){
        console.log(this.state.mediaData)
        return(
            <React.Fragment>
                <div className="images-container">
                    <img src={this.state.mediaImages} alt="contemporary african art paintings and images"/>
                    </div>
            </React.Fragment>
        )
    }
}