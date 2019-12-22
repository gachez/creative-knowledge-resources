import React, {Component} from 'react';
import Menu from '../components/universal-icons/Menu'
import '../styles/PublicationPage.css'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import PublicationThumbnail from '../components/publication-components/PublicationThumbnail'
import PageTitle from '../components/universal-icons/PageTitle'
import SearchBox from '../components/universal-icons/SearchBox' 
import SideBarIcons from '../components/universal-icons/SideBarIcons'
import FilterSectionPublication from '../components/publication-components/FilterSectionPublication';
import down from '../images/component.png'
import ellipse from '../images/ellipse.svg'
import ellipse_trans from '../images/ellips_trans.svg'

let posValue = 35;
let posValueSB = "195px"

class PublicationPage extends Component{
    state={
        searchText: ''
    }

    callFunc = (functionCall) =>{
        functionCall()
    }

          //get search text 
          getSearch = (e) =>{
            this.setState({
                searchText: e.target.value
            })
            console.log(this.state.searchText)
          
         } 
    
    render(){  
        
        console.log(window.screen.height)
        return( 
        // body element    
    <div id = "body" style={{
        width: `${window.screen.width}`,
        height: `${window.screen.height}`
    }}>
    
       <Menu page="fixed"/> 
        <div className="page-title-and-search">
            <p>Contemporary African Arts: Publications</p>
            <input className="searchbox" placeholder="Search"/>
        </div>

        <p id="view-images" >View Publications</p>
          <FilterSectionPublication valuebtn = {23} value = {posValue}/>

        
        <SideBarIcons value = {posValue}  iconColor={ellipse_trans} transell1={ellipse_trans} transell2={ellipse} />
       <PublicationThumbnail searchtext={this.state.searchText} value = {posValue}/>

       <p id="go-to-images" onClick={()=>{
            window.location.href="/"
        }}> Go to Images</p>
       

        
{/* the footer */}
    <div id="footer" style={{
        position: 'absolute',
        top: '112%'
    }}>

    <img src={icon_facebook} id="fb"/>
    <img src={icon_twitter} id="twitter"/>
    <img id="instagram" src={icon_instagram}/>
    <img src={icon_linkedin} id="linkedin"/>
    </div>
        </div>
      )
    }
}

export default PublicationPage;