import React, {Component} from 'react';
import Menu from '../components/universal-icons/Menu'

import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import PublicationThumbnail from '../components/publication-components/PublicationThumbnail'
import PageTitle from '../components/universal-icons/PageTitle'
import SearchBox from '../components/universal-icons/SearchBox' 
import ResetBtn from '../components/universal-icons/ResetBtn'
import SideBarIcons from '../components/universal-icons/SideBarIcons'
import FilterSectionPublication from '../components/publication-components/FilterSectionPublication';
import down from '../images/component.png'
import ellipse from '../images/ellipse.svg'
import ellipse_trans from '../images/ellips_trans.svg'

let posValue = 35;
let posValueSB = "195px"

class PublicationPage extends Component{
    callFunc = (functionCall) =>{
        functionCall()
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
       <PageTitle value = {posValue} />
       <SearchBox value = {posValueSB}/>
        <p id="view-images" style={{
            position: 'absolute',
            top: '35%', 
            left: '83%', 
             height: '21px',
             fontFamily: 'Ubuntu',
             fontSize: '18px',
             fontWeight: 500,
             fontStyle: 'normal',
             fontStretch: 'normal',
             lineHeight: 1.17,
             letterSpacing: 'normal',
             color: '#ff321a'
        }}>View Publications</p>
          <FilterSectionPublication valuebtn = {23} value = {posValue}/>

        
        <SideBarIcons value = {posValue}  iconColor={ellipse_trans} transell1={ellipse_trans} transell2={ellipse} />
       <PublicationThumbnail value = {posValue}/>

       <p onClick={()=>{
            window.location.href="/"
        }} style={{
            position: 'absolute',
            top: '140.5%',
            left: '48%',
            color: '#ff321a',
            fontFamily: 'Ubuntu',
            fontSize: '18px',
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            cursor: 'pointer'
        }}> Go to Images</p>
        <img onClick={()=>{
            window.location.href="/"
        }} src={down} style = {{
            position: 'absolute',
            top: '135%',
            left: '50%',
            cursor: 'pointer',
            transform: 'rotate(180deg)'
        }}/>

       
{/* the footer */}
    <div style={{
        position: 'absolute',
        top: '150%',
          width: '100%',
          height: '75px',
          backgroundColor: '#373a3c'
        
    }}>

    <img src={icon_facebook} style={{
        position:'absolute',
        top: '34.7%',
        left: '41%'
    }}/>
    <img style={{
        position:'absolute',
        top: '34.7%',
        left: '46.4%'
    }} src={icon_twitter}/>
    <img style={{
        position:'absolute',
        top: '34.7%',
        left: '51.8%'
    }} src={icon_instagram}/>
    <img style={{
        position:'absolute',
        top: '34.7%',
        left: '57.2%'
    }} src={icon_linkedin}/>
    </div>
        </div>
      )
    }
}

export default PublicationPage;