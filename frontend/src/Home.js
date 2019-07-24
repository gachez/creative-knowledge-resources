import React, {Component} from 'react';
import Logo from './components/Images-components/Logo'
import Menu from './components/universal-icons/Menu'
import FilterSection from './components/Images-components/FilterSection'
import Images from './components/Images-components/Images'
import PageTitle from './components/universal-icons/PageTitle'
import SearchBox from './components/universal-icons/SearchBox' 
import ResetBtn from './components/universal-icons/ResetBtn'
import SideBarIcons from './components/universal-icons/SideBarIcons'
import ellipse from './images/ellipse.svg'
import ellipse_trans from './images/ellips_trans.svg'
import $ from 'jquery'
import axios from 'axios'



class Home extends Component{
    state={
        page: 'sticky',
        images: [],
        imageUrl: []
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
    render(){  
        return( 
        // body element    
    <div id = "body" style={{
        width: `${window.screen.width}`,
        height: `${window.screen.height}`
    }}>
        <Logo />
       <Menu page={this.state.page}/> 
       <PageTitle value={0}/>
       <SearchBox value = "445px"/>
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
          <FilterSection />

        <ResetBtn value={0} />
        <SideBarIcons value={0} iconColor={ellipse} transell1={ellipse_trans} transell2={ellipse_trans}/>
        <Images imageurl={this.state.imageUrl} Images= {this.state.images}/>
        </div>
      )
    }
}

export default Home;