import React, {Component} from 'react';
import Logo from './components/Images-components/Logo'
import down from './images/component.png'
import darktrans from './images/ellipse.svg'
import trans from './images/ellips_trans.svg'
import homeIcon from './images/icon_home.svg'
import search from './images/icons_search.png'
import fb from './images/icons_facebook_white.png'
import insta from './images/icons_instagram_white.png'
import twitter from './images/icons_twitter_white.png'
import './styles/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Menu from './components/universal-icons/Menu'
import {
     Form,
     FormControl,
      Button,  
      Container,
      Col,
      Row,
      CardDeck,
      Card
    } from 'react-bootstrap'


class Home extends Component{
    state={
       filteredImages: [],
       filteredCategory: [],
       filteredYear: [],
       filterBoxConfirmation: false,
       filterCategory: 'none',
       filterYear: 'none',
       menuDisplay: 'none',
       images: [],
       isLoaded: false,
       textBox: '',
       selectedCategory: 'Select category',
       selectedYear: 'Select a year'
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/images?_embed`)
        .then(res =>{
            this.setState({
                images: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
        this.state.images.length > 0 ? console.log(this.state.images) : console.log('none')
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

                case 'year': 
                    this.state.filterYear == 'none' ? this.setState({filterYear: 'block'}) : this.setState({filterYear: 'none'})
                    break;    

                default: 
                    console.log('default//:case')    
           }
       }

          // function that grabs value of an option and highlights it
        onSelect = (classname, index, placeholder) =>{
            let selectedVal = document.getElementsByClassName(classname)[index].textContent;

            if(placeholder === 'placeholder-category'){
                this.setState({
                    selectedCategory: selectedVal
                });

                document.getElementById(placeholder).style.color = '#ff321a';
                document.getElementById('category').style.borderColor = '#ff321a';
               
            }

            if(placeholder === 'placeholder-year'){
                this.setState({
                    selectedYear: selectedVal
                });

                document.getElementById(placeholder).style.color = '#ff321a';
                document.getElementById('year').style.borderColor = '#ff321a';
            }

          
        }


        //function that filters array according to searchbox text
        onSearch = () =>{
            this.setState({
                filteredImages: this.state.images.filter(image => image.title.rendered.toLowerCase().indexOf(this.state.textBox.toLowerCase()) >= 0)
            });

            console.log(this.state.filteredImages)
        }
 

        //function to filter array according to filters chosen
        // onFilterSelect = (selector, index) =>{
        //     let value = document.getElementsByClassName(selector)[index].textContent;

        //     this.setState({
        //         filteredCategory: this.state.images.filter(image => image.acf['category'].toLowerCase() === value.toLowerCase()),
        //         filterBoxConfirmation: true
        //     });
        // }
       
       

    render(){  

      if(this.state.isLoaded){
        
            
            return( 
                <div className="Homepage">
                    <Logo />
                    {/* NAVBAR SECTION STARTS HERE */}
                    <Menu />
                    {/* NAVBAR SECTION ENDS HERE */}
                    <br />
                    <br />
                    <br />
        
                    {/* TITLE LIST GROUP STARTS HERE */}
                    <section className="title-list-group" >
                       
                          <p>Contemporary African Art: Images</p>
                        
                        
                      
                        <Form inline style={{position: 'absolute', right: '50px'}}>
                            <FormControl id="searchform" type="text" placeholder="Search" className="mr-sm-2" onChange={ 
                                () => { 
                                    this.setState({textBox : document.getElementById('searchform').value});
                                    console.log(this.state.textBox)
                                    this.onSearch()
                                    }}/>
                            <img id="searchbtn" src={search} onClick={this.filterSearchBox} />
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
                                        <Link to={"/"}><img src={darktrans}/></Link>
                                        <Link to={"/videos"}><img src={trans}/></Link>
                                        <Link to={"/publications"}><img src={trans}/></Link>
        
                                    </div>
                                    </Col>
                                    {/* NAVIGATION ICONS END HERE */}
        
                                    {/* IMAGES GRID CONTAINER BELOW*/}
                                    <Col style={{ position: 'relative', top: '-20px'}} sm={8}>
                                        <CardDeck>

                                         {
                                             //check if search box works
                                             this.state.filteredImages.length > 0 ?

                                             this.state.filteredImages.map(image =>{
                                                return(
                                                    
                                                <Col  key={image.id}  >
                                                  <Card style={{cursor: 'pointer', maxWidth: '250px', minWidth: '200px', marginTop: '30px'}} onClick={
                                                    () =>{
                                                        window.location.href="/images-page"
                                                        localStorage.setItem('id', image.id)
                                                    }
                                                }>
                                                        <Card.Img variant="top" style={{height: '200px'}} src={image._embedded['wp:featuredmedia']['0'].source_url} />
                                                        <Card.Footer><h4 style={{fontFamily: 'Ubuntu', fontSize: '16px'}} dangerouslySetInnerHTML={{__html: image.title.rendered}}></h4></Card.Footer>
                                                  </Card>   
                                                </Col>    
                                                    
                                                
                                                )
                                            })
                                             :

                                                // maps each featuredmedia to an image
                                            this.state.images.map(image =>{
                                                return(
                                                    
                                                <Col  key={image.id}  >
                                                  <Card style={{cursor: 'pointer', maxWidth: '250px', minWidth: '200px', marginTop: '30px'}} onClick={
                                                    () =>{
                                                        window.location.href="/images-page"
                                                        localStorage.setItem('id', image.id)
                                                    }
                                                }>
                                                        <Card.Img variant="top" style={{height: '200px'}} src={image._embedded['wp:featuredmedia']['0'].source_url} />
                                                        <Card.Footer><h4 style={{fontFamily: 'Ubuntu', fontSize: '16px'}} dangerouslySetInnerHTML={{__html: image.title.rendered}}></h4></Card.Footer>
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
                                        
                                        <div className="filterSection">
                                        <p className="view-images-title">View Images</p>
                                            <div className="filterBox" id="category" onClick={() => {this.toggleDropdown('category')}}>
                                        <p style={{ position: 'relative', right: '95px', top: '5px', width: '180px'}} id="placeholder-category">{this.state.selectedCategory}</p>
                                                <div className="dropdowns-category" style={{display: this.state.filterCategory, top: '40%'}}>
                                                    <h5 className="dropdown-items" onClick={() => {
                                                        this.onSelect('dropdown-items', 0, 'placeholder-category');
                                                        
                                                                                    }}
                                                >African games</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 1, 'placeholder-category')}}>Animations</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 2, 'placeholder-category')}}>Paintings</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 3, 'placeholder-category')}}>Architecture</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 4, 'placeholder-category')}}>Dance</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 5, 'placeholder-category')}}>Decorative arts</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 6, 'placeholder-category')}}>African games</h5>
                                                </div>
                                            </div>
                                            <div  className="filterBox" id="year" style={{position: 'relative', top: '50px'}} onClick={() => {this.toggleDropdown('year')}}>
                                        <p style={{width: '180px', position:'relative', right: '95px', top: '5px'}} id="placeholder-year">{this.state.selectedYear}</p>
                                                <div className="dropdowns-year" style={{display: this.state.filterYear}}>
                                                    <h5 className="dropdown-items"onClick={() => {this.onSelect('dropdown-items', 7, 'placeholder-year')}} >2020</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 8, 'placeholder-year')}}>2019</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 9, 'placeholder-year')}}>2018</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 10, 'placeholder-year')}}>2017</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 11, 'placeholder-year')}}>2016</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 12, 'placeholder-year')}}>2015</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 13, 'placeholder-year')}}>2014</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 14, 'placeholder-year')}}>2013</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 15, 'placeholder-year')}}>2012</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 16, 'placeholder-year')}}>2011</h5>

                                                </div>
                                            </div>
                                            <Button className="filterBox" id="reset" style={{position: 'relative', top: '70px'}} onClick={
                                                () =>{
                                                    this.setState({
                                                        selectedCategory: 'Select category',
                                                        selectedYear: 'Select a year'
                                                    });
                                                    document.getElementById('placeholder-year').style.color = '#000';
                                                    document.getElementById('placeholder-category').style.color = '#000';
                                                    document.getElementById('category').style.borderColor = '#000';
                                                    document.getElementById('year').style.borderColor = '#000';

                                                }
                                            }>RESET</Button>
                                        </div>
                                    </Col>
                                    {/* FILTER CONTAINER ENDS HERE */}
                                </Row>
                            </Container>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <section style={{width: '100%', textAlign: 'center'}}>
                        <Link to={"/videos"}>
                            <p id="downer">Contemporary African Art: Videos</p>
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

export default Home;