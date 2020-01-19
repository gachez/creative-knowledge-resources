import React, {Component} from 'react';
import '../styles/PublicationPage.css'
import mark from '../images/logo.svg'
import '../styles/videos-page.css'
import menuBars from '../images/buttons_open_menu.png'
import search from '../images/icons_search.png'
import darktrans from '../images/ellipse.svg'
import trans from '../images/ellips_trans.svg'
import homeIcon from '../images/icon_home.svg'
import axios from 'axios'
import fb from '../images/icons_facebook_white.png'
import insta from '../images/icons_instagram_white.png'
import twitter from '../images/icons_twitter_white.png'
import Menu from '../components/universal-icons/Menu'
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
import {Link} from 'react-router-dom'    




class PublicationPage extends Component{
    state={
        filterCategory: 'none',
        filterYear: 'none',
        isLoaded: false,
        publications: []
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/publications?_embed`)
        .then(res =>{
            this.setState({
                publications: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
        this.state.publications.length > 0 ? console.log(this.state.publications) : console.log('none')
        console.log("everything got")
    
           window.localStorage.clear()
       }



    //    function that toggles dropdowns in filter section
       toggleDropdown = (val) =>{
        switch(val){
            case 'category':
                 this.state.filterCategory == 'none' ? this.setState({filterCategory: 'block'}) : this.setState({filterCategory: 'none'})
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
                <div className="publicationPage">
    
            {/* NAVBAR SECTION STARTS HERE */}
                <Menu />
                {/* NAVBAR SECTION ENDS HERE */}
    
                <br />
                <br />
                <br />
                
    
                {/* TITLE LIST GROUP STARTS HERE */}
                <section className="title-list-group" >
                   
                      <p>Contemporary African Art: Publications</p>
                    
                    
                  
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
                                    <Link to={"/videos"}><img src={trans}/></Link>
                                    <Link to={"/publications"}><img src={darktrans}/></Link>
    
                                </div>
                                </Col>
                                {/* NAVIGATION ICONS END HERE */}
    
                                {/* VIDEOS GRID CONTAINER BELOW*/}
                                <Col style={{ position: 'relative', top: '-20px'}} sm={8}>
                                    <CardDeck>

                                    {
                                                    // maps each featuredmedia to an image
                                                this.state.publications.map(publication =>{
                                                    return(
                                                        
                                                    <Col sm={4} key={publication.id}  >
                                                      <Card onClick={
                                                        () =>{
                                                            window.location.href="/publication-page-content"
                                                            localStorage.setItem('id', publication.id)
                                                        }
                                                    }>
                                                            <Card.Img variant="top" src={publication._embedded['wp:featuredmedia']['0'].source_url} />
                                                            <Card.Footer><h4 style={{fontFamily: 'Ubuntu'}} dangerouslySetInnerHTML={{__html: publication.title.rendered}}></h4></Card.Footer>
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
                                    <p className="view-images-title" style={{marginBottom: '20px'}}>View Publications</p>
                                    <div className="filterSection">
                                        <div className="filterBox" id="category" onClick={() =>{this.toggleDropdown('category')}}>
                                            <p style={{ position: 'relative', right: '95px', top: '5px', width: '180px'}}>Select category</p>
                                            <div className="dropdowns-category" style={{display: this.state.filterCategory, position: 'absolute', top: '40%'}}>
                                                   <h5 className="dropdown-items">African games</h5>
                                                    <h5 className="dropdown-items">Animations</h5>
                                                    <h5 className="dropdown-items">Paintings</h5>
                                                    <h5 className="dropdown-items">Architecture</h5>
                                                    <h5 className="dropdown-items">Dance</h5>
                                                    <h5 className="dropdown-items">Decorative arts</h5>
                                                    <h5 className="dropdown-items">African games</h5>
                                            </div>
                                        </div>
                                        
                                        <div  className="filterBox" id="year" style={{position: 'relative', top: '50px'}} onClick={() => {this.toggleDropdown('year')}}>
                                            <p style={{width: '180px', position:'relative', right: '95px', top: '5px'}}>Select a year</p>
                                            <div className="dropdowns-year" style={{display: this.state.filterYear}}>
                                            <h5 className="dropdown-items">2020</h5>
                                                    <h5 className="dropdown-items">2019</h5>
                                                    <h5 className="dropdown-items">2018</h5>
                                                    <h5 className="dropdown-items">2017</h5>
                                                    <h5 className="dropdown-items">2016</h5>
                                                    <h5 className="dropdown-items">2015</h5>
                                                    <h5 className="dropdown-items">2014</h5>
                                                    <h5 className="dropdown-items">2013</h5>
                                                    <h5 className="dropdown-items">2012</h5>
                                                    <h5 className="dropdown-items">2011</h5>
                                            </div>
                                        </div>
                                   
                                        <Button className="filterBox" id="reset" style={{position: 'relative', top: '70px'}}>RESET</Button>
                                    </div>
                                </Col>
                                {/* FILTER CONTAINER ENDS HERE */}
                            </Row>
                        </Container>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <section style={{width: '100%', textAlign: 'center'}}>
                    <Link to={"/"}>
                    <p id="downer">Contemporary African Art: Images</p>
                    </Link> 
    
                    </section>
    
                    <br /><br /><br /><br />
                    <footer>
                    <img style={{position: 'relative', left: '41%', top: '26px'}} src={fb} />
                            <img style={{position: 'relative', left: '46.4%', top: '26px'}} src={insta} />
                            <img style={{position: 'relative', left: '51.8%', top: '26px'}} src={twitter} />
                        </footer>        
    
         
    
                </div>
          )
        }
        return null
    }
}

export default PublicationPage;