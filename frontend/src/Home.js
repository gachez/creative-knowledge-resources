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
        searchText: ''
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
    render(){  
        return( 
        // body element    
    <div id = "body" style={{
        width:  '100%',
        height: window.screen.height
    }}>
        <Logo />
       <Menu page={this.state.page}/> 
       <PageTitle value={0}/>
       
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
          <FilterSection value={0} />

   
        <SideBarIcons value={0} iconColor={ellipse} transell1={ellipse_trans} transell2={ellipse_trans}/>

        
            
        <Images searchtext={this.state.searchText} imageurl={this.state.imageUrl} Images= {this.state.images}/>
        <p onClick={()=>{
            window.location.href="/videos"
        }} style={{
            position: 'absolute',
            top: '150.5%',
            left: '47%',
            color: '#ff321a',
            fontFamily: 'Ubuntu',
            fontSize: '18px',
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            cursor: 'pointer'
        }}> Next page Videos</p>
        <img onClick={()=>{
            window.location.href="/videos"
        }} src={down} style = {{
            position: 'absolute',
            top: '147%',
            left: '50%',
            cursor: 'pointer'
        }}/>
        </div>
      )
    }
}

export default Home;