import React, {Component} from 'react';
import Menu from '../components/universal-icons/Menu'

import VideosThumbnail from '../components/videos-components/VideosThumbnail'
import PageTitle from '../components/universal-icons/PageTitle'
import SearchBox from '../components/universal-icons/SearchBox' 

import SideBarIcons from '../components/universal-icons/SideBarIcons'
import FilterSectionVideos from '../components/videos-components/FilterSectionVideos';

import ellipse from '../images/ellipse.svg'
import ellipse_trans from '../images/ellips_trans.svg'
import down from '../images/component.png'

let posValue = 35;
let posValueSB = "195px"

class VideosPage extends Component{
   state={
       searchText: ''
   }


       //get search text 
       getSearch = (e) =>{
        this.setState({
            searchText: e.target.value
        })
        console.log(this.state.searchText)
      
     } 

    render(){  
        
        return( 
        // body element    
    <div id = "body" style={{
        width: `${window.screen.width}`,
        height: `${window.screen.height}`
    }}>
    
       <Menu page="fixed"/> 
       <PageTitle value = {posValue} page="Videos"/>
       <SearchBox  getsearch = {this.getSearch} value = {posValueSB}/>
        <p id="view-images" style={{
            position: 'absolute',
            top: '35%', 
            left: '83%', 
             height: '16px',
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
       <VideosThumbnail searchtext={this.state.searchText} value = {posValue}/>

       <p onClick={()=>{
            window.location.href="/publications"
        }} style={{
            position: 'absolute',
            top: '124.5%',
            left: '41.3%',
            color: '#ff321a',
            fontFamily: 'Ubuntu',
            fontSize: '18px',
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            cursor: 'pointer'
        }}> Contemporary African Arts: Publications</p>
        <img onClick={()=>{
            window.location.href="/publications"
        }} src={down} style = {{
            position: 'absolute',
            top: '120%',
            left: '50%',
            cursor: 'pointer',
            marginBottom: '35px'
        }}/>
        </div>
      )
        
        
    }
}

export default VideosPage;