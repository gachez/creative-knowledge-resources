import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import Menu from '../components/universal-icons/Menu.js'
import backbtn from '../images/buttons_back.svg'
import axios from 'axios'
import { Document, Page,pdfjs } from 'react-pdf';
import '../styles/PublicationPageContent.css'
import {Button} from 'react-bootstrap'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class PublicationPageContent extends Component{

    state={
        publication: [],
        isLoaded: false,
        numPages: null,
        pageNumber: 1
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/publications/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                publication: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

    }
   
    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
          numPages,
          pageNumber: 1,
        });
      };
    
    changePage = offset => this.setState(prevState => ({
       pageNumber: prevState.pageNumber + offset,
      }));

      previousPage = () => this.changePage(-1);

      nextPage = () => this.changePage(1);

    render(){
        if(this.state.isLoaded){
            console.log(this.state.publication)

            const { numPages, pageNumber } = this.state;
        return(
            <div>
                <Menu page="fixed"/>
              <div id="body" >
                  
              <br />
                    <br />
                    <br />
        
                    {/* TITLE LIST GROUP STARTS HERE */}
                    <section className="title-list-group" >
                       
                    <Link to="/">
                        <img src={backbtn} className="back-img" />
                        </Link>

                        <p className="title-name" style={{position: 'absolute', left: '13.4%'}} dangerouslySetInnerHTML={{ __html: this.state.publication.title.rendered}}></p>                                                                                             
                    </section>
                    {/* TITLE LIST GROUP ENDS HERE */}
                    <br />
                    {/* image description */}
                    <div className="image-desc">
                        <strong style={{fontSize: '16px'}}>Synopsis</strong><br /><br />
                    <p style={{fontSize: '14px'}} dangerouslySetInnerHTML={{ __html: this.state.publication.excerpt.rendered}}></p>
                    <div id="credentials">
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.author + '('}} style={{fontSize: '11px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.year_of_publication + '), '}} style={{fontSize: '11px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.title.rendered + ', '}} style={{fontSize: '11px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.publisher + ', Vol '}} style={{fontSize: '11px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.volume}} style={{fontSize: '11px'}}></p>
                    </div>
                    <br />
                    </div>

                    {/* the book */}
                    <div className="books" >
                    
                    <iframe src="https://arthistory.rutgers.edu/images/Documents/Spring2017_syllabi/240-Brett-Smith.pdf" 
                    width="100%" height="100%" allowFullScreen>
                </iframe>
                    {/* <Document
                                
                                file='./brett-smith.pdf'
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                        
                                <Page pageNumber={pageNumber} />
                        
                                <div style={{
                            backgroundColor: '#373A3C',
                            position: 'absolute',
                            top: '130%',
                            width: '100%',
                            height: '50px',
                            display: 'flex'
                        }}>
                        <img src={prev} style={{
                            
                                paddingLeft: '35%',
                                width: 'fit-content',
                                height: 'fit-content',
                                paddingTop: '15px',
                                cursor: 'pointer'
                            }}
                            onClick={this.previousPage}
                            />
                        
                            <img src={next} style={{
                            paddingLeft: '100px',
                            width: 'fit-content',
                            height: 'fit-content',
                            paddingTop: '15px',
                            cursor: 'pointer'
                            }}
                            onClick={this.nextPage}
                            />
                        
                            <img src={downloadicon} style={{
                            paddingLeft: '40%',
                            width: '24px',
                            height: '24px',
                            paddingTop: '15px',
                            cursor: 'pointer'
                            }}/>
                            <img src={max} style={{
                                paddingLeft: '18px',
                                width: '24px',
                                height: '24px',
                                paddingTop: '15px',
                                cursor: 'pointer'
                            }}
                            />

                        </div>
                        
                        </Document> */}

                            
                        
                    </div>
                    <br /><br /><br />

                    {/* container for the comment box */}
                    <div className="comment-container" >

                    <input id="comment" type="textbox" placeholder="What are your thoughts on this work?" />
                    <Button id="post-btn">POST</Button>
                    </div>

                    <br /><br />
                    {/* footer section */}
                    <footer>
                            
                            </footer>   
                  </div>  
                            </div>
                        
        )
        }
       return null 
    }
}

export default PublicationPageContent;