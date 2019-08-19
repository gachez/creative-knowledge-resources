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
    <div id = "body" style={{
        width:  '100%',
        margin: 0,
        padding: 0,
        display: 'grid'

    }}>
        <Logo />
       <Menu page={this.state.page}/> 
    <div style={{
        display: 'grid'
    }}>

  {/* page title and search text box */}
  <div>

      <PageTitle value={0} page="Images"/>
       
       {/* search textbox */}
       <input onChange = {this.getSearch} placeholder = "Search" style={{
           position: 'absolute',
           top: `445px`,
           left: '83%',
           border: 'none',
           paddingBottom: '5px',
           borderBottom: 'solid 1px #373a3c',
           height: '17px',
           fontFamily: 'Ubuntu',
           fontSize: '14px',
           fontWeight: 300,
           fontStyle: 'normal',
           fontStretch: 'normal',
           lineHeight: 'normal',
           letterSpacing: 'normal',
           color: '#373a3c'

       }} />
    

  </div>

  {/* div that holds the body section  */}

  <div style={{
      display: 'flex'
  }}>


  {/* right side section       */}
  <div>
  <p id="view-images" style={{
           position: 'absolute',
           top: '70%', 
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
       }}>View images</p>
         <FilterSection filtercategory={this.state.filterBlockCategory} filterfunc={this.filterBlockFunc} value={0} />

      
  </div>    
      
   {/* left side section scroll circles */}

     <SideBarIcons value={0} iconColor={ellipse} transell1={ellipse_trans} transell2={ellipse_trans}/>
  
         
       
       
      {/* images container       */}
       <Images filtercategory={this.state.filterBlockCategory} filteryear={this.state.filterBlockYear} searchtext={this.state.searchText} imageurl={this.state.imageUrl} Images= {this.state.images}/>
    
  </div>

    
     {/* bottom section navigation */}
       <div>

       <p onClick={()=>{
           window.location.href="/videos"
       }} style={{
           position: 'absolute',
           top: '151.5%',
           left: '42%',
           color: '#ff321a',
           fontFamily: 'Ubuntu',
           fontSize: '18px',
           fontWeight: 500,
           fontStyle: 'normal',
           fontStretch: 'normal',
           cursor: 'pointer'
       }}> Contemporary African Arts: Videos</p>
       <img onClick={()=>{
           window.location.href="/videos"
       }} src={down} style = {{
           position: 'absolute',
           top: '147%',
           left: '50%',
           cursor: 'pointer'
       }}/>

       </div>
       
      </div>
    
    
        </div>
      )
    }
}

export default Home;