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
import fb from '../images/icons_facebook_white.png'
import insta from '../images/icons_instagram_white.png'
import twitter from '../images/icons_twitter_white.png'
import Menu from '../components/universal-icons/Menu'
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

class VideosPage extends Component{
   state={
       filteredVideos: [],
       filteredCategory: [],
       filteredDiscussion: [],
       filteredYear: [],
       filterCategory: 'none',
       filterDiscussion: 'none',
       filterYear: 'none',
       videos: [],
       isLoaded: false,
       textBox: '',
       selectedCategory: 'Select category',
       selectedDiscussion: 'Select discussion',
       selectedYear: 'Select a year',
       defaultVideos: []
   }

   componentDidMount(){
    axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/videos?_embed`)
    .then(res =>{
        this.setState({
            videos: res.data,
            isLoaded: true,
            defaultVideos: res.data
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

                // function that grabs value of an option and highlights it then changes state according to filter and filters the grid of images
                onSelect = (classname, index, placeholder) =>{
                    let selectedVal = document.getElementsByClassName(classname)[index].textContent;
                    let filterCategoryArr = this.state.videos.filter( video => video.acf['discipline'].toLowerCase() === selectedVal.toLowerCase());
                    let filterYearArr = [] 
                    let filterDiscussionArr = []
                    if(true){

                     filterYearArr =  this.state.selectedCategory !== 'Select category' ? filterCategoryArr.filter( video => video.acf['year'] === selectedVal) : this.state.defaultVideos.filter( video => video.acf['year'] === selectedVal);
                     filterDiscussionArr =  this.state.selectedCategory !== 'Select category' ? filterDiscussionArr.filter( video => video.acf['discussion'] === selectedVal) : this.state.defaultVideos.filter( video => video.acf['discussion'] === selectedVal);                   

                }                   
                   
                    if(placeholder === 'placeholder-category'){
                        //set the necessary states
                        this.setState({
                            selectedCategory: selectedVal,
                            videos: filterCategoryArr
                        });
        
                        // set the filter colors
                        document.getElementById(placeholder).style.color = '#ff321a';
                        document.getElementById('category').style.borderColor = '#ff321a';
        
                        //check if any data found and give feedback
                        if(filterCategoryArr.length < 1) {
                            alert('No Videos found in the ' + selectedVal + ' category');
                            this.setState({
                                videos : this.state.defaultVideos,
                                selectedCategory: 'Select a category'
                            });
                            document.getElementById('placeholder-category').style.color = '#000';
                            document.getElementById('category').style.borderColor = '#000';
                        }
                        console.log('Success: Videos found under the category')
                       
                    }

                    if(placeholder === 'placeholder-discussion'){
                        this.setState({
                            selectedDiscussion: selectedVal
                        });
        
                        document.getElementById(placeholder).style.color = '#ff321a';
                        document.getElementById('discussion').style.borderColor = '#ff321a';
        
                        //check if any data found and give feedback
                        if(filterDiscussionArr.length < 1) {
                          alert('No Videos found for tagged: ' + selectedVal  );
                          this.setState({
                              videos : this.state.defaultVideos,
                              selectedDiscussion: 'Select discussion'
                           });
                           document.getElementById('placeholder-discussion').style.color = '#000';
                           document.getElementById('placeholder-year').style.color = '#000';
                           document.getElementById('discussion').style.borderColor = '#000';
                           document.getElementById('discussion').style.borderColor = '#000';
                        }
                        console.log('Success videos found under the discussions filter')
                       
                    }
        
                    if(placeholder === 'placeholder-year'){
                        this.setState({
                            selectedYear: selectedVal
                        });
        
                        document.getElementById(placeholder).style.color = '#ff321a';
                        document.getElementById('year').style.borderColor = '#ff321a';
        
                        //check if any data found and give feedback
                        if(filterYearArr.length < 1) {
                          alert('No Videos found for the year: ' + selectedVal  );
                          this.setState({
                              videos : this.state.defaultVideos,
                              selectedYear: 'Select a year',
                              selectedCategory: 'Select category'
                           });
                           document.getElementById('placeholder-category').style.color = '#000';
                           document.getElementById('placeholder-year').style.color = '#000';
                           document.getElementById('year').style.borderColor = '#000';
                           document.getElementById('category').style.borderColor = '#000';
                        }
                        console.log('Success videos found under the category')
                    }
        
                  
                }
        
        
                //function that filters array according to searchbox text
                onSearch = () =>{
                    this.setState({
                        filteredVideos: this.state.videos.filter(video => video.title.rendered.toLowerCase().indexOf(this.state.textBox.toLowerCase()) >= 0)
                    });
                }
  

    render(){  

        if(this.state.isLoaded){

            console.log(this.state.videos)

        return( 
            // body element    
        <div className="videosPage" >
    
            {/* NAVBAR SECTION STARTS HERE */}
            <Menu />
                {/* NAVBAR SECTION ENDS HERE */}
    
                <br />
                <br />
                <br />
                
    
                {/* TITLE LIST GROUP STARTS HERE */}
                <section className="title-list-group" >
                   
                      <p>Contemporary African Art: Videos</p>
                    
                    
                  
                    <Form inline style={{position: 'absolute', right: '50px'}} onChange={ 
                                () => { 
                                    this.setState({textBox : document.getElementById('searchform').value});
                                    console.log(this.state.textBox);
                                    this.onSearch();
                                    }}>
                        <FormControl id="searchform" type="text" placeholder="Search by title" className="mr-sm-2" />
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
                                             //check if search box works
                                             this.state.filteredVideos.length > 0 ?

                                             this.state.filteredVideos.map(video =>{
                                                return(
                                                    
                                                <Col  key={video.id}  >
                                                  <Card style={{cursor: 'pointer', maxWidth: '350px', minWidth: '300px', marginTop: '30px'}} onClick={
                                                    () =>{
                                                        window.location.href="/videos-page-content"
                                                        localStorage.setItem('id', video.id)
                                                    }
                                                }>
                                                        <Card.Img variant="top" style={{height: '250px'}} src={video._embedded['wp:featuredmedia']['0'].source_url} />
                                                        <Card.Footer><h4 style={{fontFamily: 'Ubuntu', fontSize: '16px'}} dangerouslySetInnerHTML={{__html: video.title.rendered}}></h4></Card.Footer>
                                                  </Card>   
                                                </Col>    
                                                    
                                                
                                                )
                                            })
                                             :

                                                // maps each featuredmedia to an image
                                            this.state.videos.map(video =>{
                                                return(
                                                    
                                                <Col  key={video.id}  >
                                                  <Card style={{cursor: 'pointer', maxWidth: '350px', minWidth: '300px', marginTop: '30px'}} onClick={
                                                    () =>{
                                                        window.location.href="/videos-page-content"
                                                        localStorage.setItem('id', video.id)
                                                    }
                                                }>
                                                        <Card.Img variant="top" style={{height: '250px'}} src={video._embedded['wp:featuredmedia']['0'].source_url} />
                                                        <Card.Footer><h4 style={{fontFamily: 'Ubuntu', fontSize: '16px'}} dangerouslySetInnerHTML={{__html: video.title.rendered}}></h4></Card.Footer>
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
                                    <p className="view-images-title">View Videos</p>
                                        <div className="filterBox" id="category" onClick={() => {this.toggleDropdown('category')}}>
                                        <p style={{ position: 'relative', right: '95px', top: '5px', width: '180px'}} id="placeholder-category">{this.state.selectedCategory}</p>
                                            <div className="dropdowns-category" style={{display: this.state.filterCategory}}>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 0, 'placeholder-category')}}>African games</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 1, 'placeholder-category')}}>Animations</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 2, 'placeholder-category')}}>Paintings</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 3, 'placeholder-category')}}>Architecture</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 4, 'placeholder-category')}}>Dance</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 5, 'placeholder-category')}}>Decorative arts</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 6, 'placeholder-category')}}>African games</h5>
                                            </div>
                                        </div>
                                        
                                        <div  className="filterBox" id="discussion" style={{position: 'relative', top: '50px'}} onClick={() =>{this.toggleDropdown('discussion')}}>
                                        <p style={{width: '180px', position:'relative', right: '95px', top: '5px'}} id="placeholder-discussion">{this.state.selectedDiscussion}</p>
                                            <div className="dropdowns-discussion" style={{display: this.state.filterDiscussion}}>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 7, 'placeholder-discussion')}}>African games</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 8, 'placeholder-discussion')}}>Animations</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 9, 'placeholder-discussion')}}>Paintings</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 10, 'placeholder-discussion')}}>Architecture</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 11, 'placeholder-discussion')}}>Dance</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 12, 'placeholder-discussion')}}>Decorative arts</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 13, 'placeholder-discussion')}}>Ideas</h5>
                                            </div>
                                        </div>
                                        <div  className="filterBox" id="year" style={{position: 'relative', top: '90px'}} onClick={() =>{this.toggleDropdown('year')}}>
                                        <p style={{width: '180px', position:'relative', right: '95px', top: '5px'}} id="placeholder-year">{this.state.selectedYear}</p>
                                            <div className="dropdowns-year" style={{display: this.state.filterYear}}>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 14, 'placeholder-year')}}>2020</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 15, 'placeholder-year')}}>2019</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 16, 'placeholder-year')}}>2018</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 17, 'placeholder-year')}}>2017</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 18, 'placeholder-year')}}>2016</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 19, 'placeholder-year')}}>2015</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 20, 'placeholder-year')}}>2014</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 21, 'placeholder-year')}}>2013</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 22, 'placeholder-year')}}>2012</h5>
                                                    <h5 className="dropdown-items" onClick={() => {this.onSelect('dropdown-items', 23, 'placeholder-year')}}>2011</h5>
                                            </div>
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

export default VideosPage;