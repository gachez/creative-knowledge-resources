import React, {Component} from 'react';
import Menu from '../components/universal-icons/Menu'

import VideosThumbnail from '../components/videos-components/VideosThumbnail'
import PageTitle from '../components/universal-icons/PageTitle'
import SearchBox from '../components/universal-icons/SearchBox' 

import SideBarIcons from '../components/universal-icons/SideBarIcons'
import FilterSectionVideos from '../components/videos-components/FilterSectionVideos';
import '../styles/videos-page.css'
import ellipse from '../images/ellipse.svg'
import ellipse_trans from '../images/ellips_trans.svg'
import down from '../images/component.png'
import { Link } from 'react-router-dom';

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
    <div id = "body" >
    
       <Menu page="fixed"/> 
       <div className="page-title-and-search">
           <p>Contemporary African Arts: Videos</p>
           <input className="searchbox" placeholder="Search"/>
       </div>
  
      <p className="view-text">View videos</p>
          <FilterSectionVideos valuebtn = {23} value = {posValue}/>

   
        <SideBarIcons value = {posValue} iconColor={ellipse_trans} transell1={ellipse} transell2={ellipse_trans}/>
       <VideosThumbnail searchtext={this.state.searchText} value = {posValue}/> 


         <Link to='/publications'>
         <p className="next-page-footer">Contemporary African Arts: Publications</p>

         </Link>       
        </div>
      )
        
        
    }
}

export default VideosPage;