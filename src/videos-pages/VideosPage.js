import React, {Component} from 'react';
import mark from '../images/logo.svg'
import '../styles/videos-page.css'
import menuBars from '../images/buttons_open_menu.png'
import search from '../images/icons_search.png'
import darktrans from '../images/ellipse.svg'
import trans from '../images/ellips_trans.svg'
import homeIcon from '../images/icon_home.svg'
import youtube from '../images/youtube.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Nav, 
    NavDropdown,
     Form,
     FormControl,
      Button, 
      Navbar,
      ListGroup,
      Container,
      Col,
      Row,
      CardDeck,
      Card
    } from 'react-bootstrap'

class VideosPage extends Component{
   state={
       filterCategory: 'none',
       filterDiscussion: 'none',
       filterYear: 'none',
       videos: [],
       isLoaded: false
   }

   componentDidMount(){
    axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/videos?_embed`)
    .then(res =>{
        this.setState({
            videos: res.data,
            isLoaded: true
        })
    })
    .catch(err => console.log(err))
    this.state.videos.length > 0 ? console.log(this.state.videos) : console.log('none')
    console.log("everything got")

       window.localStorage.clear()
   }
 

       //get search text 
       getSearch = (e) =>{
        this.setState({
            searchText: e.target.value
        })
        console.log(this.state.searchText)
      
     }
     
         //    function that toggles dropdowns in filter section
         toggleDropdown = (val) =>{
            switch(val){
                case 'category':
                     this.state.filterCategory == 'none' ? this.setState({filterCategory: 'block'}) : this.setState({filterCategory: 'none'})
                     break;

                
                case 'discussion': 
                     this.state.filterDiscussion == 'none' ? this.setState({filterDiscussion: 'block'}) : this.setState({filterDiscussion: 'none'})
                     break;     
 
                 case 'year': 
                     this.state.filterYear == 'none' ? this.setState({filterYear: 'block'}) : this.setState({filterYear: 'none'})
                     break;    
 
                 default: 
                     console.log('default//:case')    
            }
        }
  

    render(){  

        if(this.state.isLoaded){

        return( 
            // body element    
        <div className="videosPage" >
    
            {/* NAVBAR SECTION STARTS HERE */}
            <Navbar sticky="top" className="menuNav"  style={{height: '95px'}}>
                    <Navbar.Brand href="#home"><img src={mark} style={{marginLeft: '50px', cursor: 'pointer'}}/></Navbar.Brand>
                    <div className="menu-items" style={{display: 'flex', position: 'absolute', right: '200px'}}>
                        <p>Home</p>
                        <p>Upload</p>
                        <p>Donate</p>
                        <p>Contact</p>
                    </div>
                    <img id="menuBtn" src={menuBars}/>
                </Navbar>
                {/* NAVBAR SECTION ENDS HERE */}
    
                <br />
                <br />
                <br />
                
    
                {/* TITLE LIST GROUP STARTS HERE */}
                <section className="title-list-group" >
                   
                      <p>Contemporary African Art: Videos</p>
                    
                    
                  
                    <Form inline style={{position: 'absolute', right: '50px'}}>
                        <FormControl id="searchform" type="text" placeholder="Search" className="mr-sm-2" />
                        <img id="searchbtn" src={search} />
                    </Form>
                </section>
                {/* TITLE LIST GROUP ENDS HERE */}
                <br /> 
                <br />
                <br /><br />
                    {/* BODY SECTION STARTS HERE */}
                        <Container fluid="true" >
                            <Row>
                                {/* NAVIGATION ICONS BELOW */}
                                <Col style={{ width: '20px', position: 'relative', top: '40px'}} sm={1}>
                                <div id="navIcons">  
                                <Link to={"/"}><img src={homeIcon}/></Link> 
                                    <Link to={"/"}><img src={trans}/></Link>
                                    <Link to={"/videos"}><img src={darktrans}/></Link>
                                    <Link to={"/publications"}><img src={trans}/></Link>
    
                                </div>
                                </Col>
                                {/* NAVIGATION ICONS END HERE */}
    
                                {/* VIDEOS GRID CONTAINER BELOW*/}
                                <Col style={{ position: 'relative', top: '-20px'}} sm={8}>
                                    
                                    <CardDeck>
                                    {
                                                    // maps each featuredmedia to an image
                                                this.state.videos.map(video =>{
                                                    return(
                                                        
                                                    <Col sm={4} key={video.id}  >
                                                      <Card onClick={
                                                        () =>{
                                                            window.location.href="/videos-page-content"
                                                            localStorage.setItem('id', video.id)
                                                        }
                                                    }>
                                                            <Card.Img variant="top" src={video._embedded['wp:featuredmedia']['0'].source_url} />
                                                            <img src={youtube} style={{width: '42px', height: '32px', position: 'absolute', top: '40%', left: '40%'}}/>
                                                            <Card.Footer><h4 style={{fontFamily: 'Ubuntu'}} dangerouslySetInnerHTML={{__html: video.title.rendered}}></h4></Card.Footer>
                                                      </Card>   
                                                    </Col>    
                                                        
                                                    
                                                    )
                                                })
                                    }   
                                               
                                    
    
                                    </CardDeck>
                                  
                                 
                       
                                </Col>
                                {/* IMAGES GRID CONTAINER ENDS HERE */}
    
                                {/* FILTER CONTAINER BELOW */}
                                <Col style={{  position: 'relative', top: '40px'}} sm = {3}>
                                    <p className="view-images-title">View Videos</p>
                                    <div className="filterSection">
                                        <div className="filterBox" id="category" onClick={() => {this.toggleDropdown('category')}}>
                                            <p style={{ position: 'relative', right: '95px', top: '5px', width: '180px'}}>Select category</p>
                                            <div className="dropdowns-category" style={{display: this.state.filterCategory}}></div>
                                        </div>
                                        
                                        <div  className="filterBox" id="discussion" style={{position: 'relative', top: '50px'}} onClick={() =>{this.toggleDropdown('discussion')}}>
                                            <p style={{width: '180px', position:'relative', right: '95px', top: '5px'}}>Select a discussion</p>
                                            <div className="dropdowns-discussion" style={{display: this.state.filterDiscussion}}></div>
                                        </div>
                                        <div  className="filterBox" id="year" style={{position: 'relative', top: '90px'}} onClick={() =>{this.toggleDropdown('year')}}>
                                            <p style={{width: '180px', position:'relative', right: '95px', top: '5px'}}>Select a year</p>
                                            <div className="dropdowns-year" style={{display: this.state.filterYear}}></div>
                                        </div>
                                        <Button className="filterBox" id="reset" style={{position: 'relative', top: '115px'}}>RESET</Button>
                                    </div>
                                </Col>
                                {/* FILTER CONTAINER ENDS HERE */}
                            </Row>
                        </Container>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <section style={{width: '100%', textAlign: 'center'}}>
                    <Link to={"/publications"}>
                    <p id="downer">Contemporary African Art: Publications</p>
                    </Link>
    
                    </section>
    
                    <br /><br /><br /><br />
                    <footer>
                        
                        </footer>        
    
         
            </div>
          )
        }
        
        return null
        
    }
}

export default VideosPage;