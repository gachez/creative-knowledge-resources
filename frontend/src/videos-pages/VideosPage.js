import React, {Component} from 'react';
import Menu from '../components/universal-icons/Menu'

import VideosThumbnail from '../components/videos-components/VideosThumbnail'
import PageTitle from '../components/universal-icons/PageTitle'
import SearchBox from '../components/universal-icons/SearchBox' 
import ResetBtn from '../components/universal-icons/ResetBtn'
import SideBarIcons from '../components/universal-icons/SideBarIcons'
import FilterSectionVideos from '../components/videos-components/FilterSectionVideos';

import ellipse from '../images/ellipse.svg'
import ellipse_trans from '../images/ellips_trans.svg'
import down from '../images/component.png'

let posValue = 35;
let posValueSB = "195px"

class VideosPage extends Component{
   

    render(){  
        
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
        }}>View Videos</p>
          <FilterSectionVideos valuebtn = {23} value = {posValue}/>

   
        <SideBarIcons value = {posValue} iconColor={ellipse_trans} transell1={ellipse} transell2={ellipse_trans}/>
       <VideosThumbnail value = {posValue}/>

       <p onClick={()=>{
            window.location.href="/publications"
        }} style={{
            position: 'absolute',
            top: '123.5%',
            left: '45.3%',
            color: '#ff321a',
            fontFamily: 'Ubuntu',
            fontSize: '18px',
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            cursor: 'pointer'
        }}> Next page Publications</p>
        <img onClick={()=>{
            window.location.href="/publications"
        }} src={down} style = {{
            position: 'absolute',
            top: '120%',
            left: '50%',
            cursor: 'pointer'
        }}/>
        </div>
      )
        
        
    }
}

export default VideosPage;