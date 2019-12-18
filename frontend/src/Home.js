import React, {Component} from 'react';
import Logo from './components/Images-components/Logo'
import Menu from './components/universal-icons/Menu'
import FilterSection from './components/Images-components/FilterSection'
import Images from './components/Images-components/Images'
import PageTitle from './components/universal-icons/PageTitle'
import SideBarIcons from './components/universal-icons/SideBarIcons'
import ellipse from './images/ellipse.svg'
import ellipse_trans from './images/ellips_trans.svg'
import $ from 'jquery'
import down from './images/component.png'
import './styles/home.css'


class Home extends Component{
    state={
        page: 'sticky',
        images: [],
        imageUrl: [],
        searchText: '',
        filterBlockCategory: '',
        filterBlockYear: null,
        filterBlockDiscussion: '',
        filterBlockFormat: '',
        filterBlockDiscipline:''
    }

    componentDidMount(){
        $(window).scroll( () => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 245) {
                this.setState({
                    page: 'fixed'
                })
             console.log(scrollTop)
                 }
                 else{
                    this.setState({
                        page:'sticky'
                    })
                 }
        })

        
        window.localStorage.clear()
    }

       //get search text 
       getSearch = (e) =>{
        this.setState({
            searchText: e.target.value
        })
        console.log(this.state.searchText)
      
       } 

       //filter through filter blocks
       filterBlockFunc = (filter, block) =>{
        
        switch(block){
            case 'category':
                    this.setState({
                        filterBlockCategory: filter
                    })
                    break;
        
        
            case 'year':
                this.setState({
                    filterBlockYear: filter
                })
                break;
            
            default:
                console.log('default state')    
                  }
     

    
        
       }




    render(){  

       
        console.log(this.state.filterBlockCategory)
        console.log(this.state.filterBlockYear)

        return( 
        // body element    
        <div id = "body" >
        <Logo />
        <Menu page={this.state.page}/> 
        <div id="content" >

  {/* page title and search text box */}
  <div className="page-title-and-class-container">

        <p className="page-title">Contemporary African Art: images</p>
        <input id="searchbox" placeholder="Search"/>    

  </div>

  <p className="view-images">View images</p>

  {/* div that holds the body section  */}

  <div id="body-section" >


  {/* right side section       */}
  <div id="right-section" >
         <FilterSection filtercategory={this.state.filterBlockCategory} filterfunc={this.filterBlockFunc} value={0} />

      
  </div>    
      
   {/* left side section scroll circles */}

     <SideBarIcons value={0} iconColor={ellipse} transell1={ellipse_trans} transell2={ellipse_trans}/>
  
         
       
       
      {/* images container       */}
       <Images filtercategory={this.state.filterBlockCategory} filteryear={this.state.filterBlockYear} searchtext={this.state.searchText} imageurl={this.state.imageUrl} Images= {this.state.images}/>
    
  </div>

    
     {/* bottom section navigation */}
       <div id = "bottom">

       <p id="next-page" onClick={()=>{
           window.location.href="/videos"
       }} > Contemporary African Arts: Videos</p>
 

       </div>
       
      </div>
    
    
        </div>
      )
    }
}

export default Home;