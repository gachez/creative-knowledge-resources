import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import thumbnail from '../../images/thumbnails_image.png'
import axios from 'axios'
import '../../styles/Images.css'




class Images extends Component{
    state={
        imagesArr: [],
        isLoaded: false
    }

    // gets all featured images and adds them to the state
    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/images?_embed`)
        .then(res =>{
            this.setState({
                imagesArr: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
        this.state.imagesArr.length > 0 ? console.log(this.state.imagesArr) : console.log('shit!')
        console.log("everything got")
    }


    runFunc = (method) =>{
        method()
    }
          
 

    render(){
    
        let filteredImages = this.state.imagesArr.filter(
            (image) => {
                return image.acf['category'].includes(this.props.searchtext.toLowerCase()) || image.acf['year'].includes(this.props.searchtext) 
            }
        )

        let filteredBlockImages = this.state.imagesArr.filter(
            (image) => {
                return image.acf['category'].includes(this.props.filtercategory.toLowerCase())
            }
        )
         
        
        if(this.state.isLoaded){
            console.log(this.state.imagesArr)
        return(
       
            
            
       
       <React.Fragment>
                
        {/* the images container  */}
        <div id="images-container" >

        
    {/* thumbnail images */}

        {
        

            filteredImages.length < 1 ?

                    // maps each featuredmedia to an image
                    this.state.imagesArr.map(image =>{
                        return(
                            
                           <React.Fragment   >
                           <img onClick={
                               () =>{
                                   window.location.href="/images-page"
                                   localStorage.setItem('id', image.id)
                               }
                           } key = {image.id} alt="thumbnail" id="thumbnail" src={image._embedded['wp:featuredmedia']['0'].source_url}  />
                           </React.Fragment>    
                            
                        
                        )
                    }): 
                    
                     filteredImages.map(image =>{
                        return(
                            
                           <React.Fragment>
                           <img onClick={
                               () =>{
                                   window.location.href="/images-page"
                                   localStorage.setItem('id', image.id)
                               }
                           } key = {image.id} alt="thumbnail" id="thumb"  src={image._embedded['wp:featuredmedia']['0'].source_url}  />
                           </React.Fragment>    
                            
                        
                        )
                    }) 

                }

              

              
                    
            
            
       
        </div>
            </React.Fragment>
        )
        } 

        return <h2 style={{
            position: 'absolute',
            top: '73%',
            left: '130px',
            fontFamily: 'Ubuntu'
        }}>Loading....</h2>
      
    }
}

export default Images;