import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import icon_facebook from '../images/icons_facebook_white.png'
import icon_twitter from '../images/icons_twitter_white.png'
import icon_instagram from '../images/icons_instagram_white.png'
import icon_linkedin from '../images/icons_linkedin_white.png'
import Menu from '../components/universal-icons/Menu.js'
import backbtn from '../images/buttons_back.svg'
import leftwhite from '../images/icons_left.png'
import rightwhite from '../images/icons_right.png'
import downloadicon from '../images/icons_download.png'
import download from '../images/download_text.png'
import max from '../images/icons_maximize.png'
import axios from 'axios'
import { Document, Page,pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class PublicationPageContent extends Component{

    state={
        publication: [],
        isLoaded: false,
        numPages: null,
        pageNumber: 1
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp/wp-json/wp/v2/publications/${parseInt(localStorage.id)}`)
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
              <div style={{
                  display: 'grid'
              }}>
                  
                <div id="back-title" style={{display: 'flex'}}>

                    {/* back icon */}
                    <Link to={"/publications"}>
                    <img src={backbtn} style={{
                        position: 'absolute',
                        top: '25.5%',
                        left: '4.5%'
                    }}/>

                    </Link>

                    {/* page title */}
                    <p style={{
                        position:'absolute',
                        top: '20%',
                        left: '13.4%',
                        fontFamily: 'Ubuntu',
                        fontSize: '24px',
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }} dangerouslySetInnerHTML={{ __html: this.state.publication.title.rendered}}>
                    </p>


                    </div>

                    {/* image description */}
                    <div style={{
                        position: 'absolute',
                        top: '31%',
                        left: '13.4%',
                        width: '72%',
                        fontFamily: 'Ubuntu',
                        fontSize: '16px',
                        fontWeight: 100,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 1.35,
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>
                        <strong>Synopsis</strong><br />
                    <p dangerouslySetInnerHTML={{ __html: this.state.publication.excerpt.rendered}}></p>
                    <div style={{display: 'flex', position: 'relative', left: '50%', width: 'fit-content'}}>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.author + '('}} style={{fontSize: '14px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.year_of_publication + '), '}} style={{fontSize: '14px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.title.rendered + ', '}} style={{fontSize: '14px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.publisher + ', Vol '}} style={{fontSize: '14px'}}></p>
                    <p dangerouslySetInnerHTML={{__html: this.state.publication.acf.volume}} style={{fontSize: '14px'}}></p>
                    </div>
                    <br />
                    </div>

                    {/* the book */}



                    <div style={{
                        position: 'absolute',
                        top:'70%',
                        left: '13.4%',
                        width: '72%',
                        height: '550px'
                    
                    }}>
                    

                        <Document
                                
                                file='./brett-smith.pdf'
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                                <Page pageNumber={pageNumber} />
                        </Document>

                        <div style={{
                            backgroundColor: '#373A3C',
                            position: 'absolute',
                            top: '130%',
                            width: '100%',
                            height: '50px',
                            display: 'flex'
                        }}>
                        <img src={leftwhite} style={{
                            
                                paddingLeft: '35%',
                                width: '24px',
                                height: '24px',
                                paddingTop: '15px',
                                cursor: 'pointer'
                            }}
                            onClick={this.previousPage}
                            />
                            <img src={rightwhite} style={{
                            paddingLeft: '100px',
                            width: '24px',
                            height: '24px',
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
                            
                        
                    </div>


                    {/* container for the comment box */}
                    <div style={{
                        position: 'absolute',
                        left: '13.4%',
                        top: '210.5%',
                        width: '72%',
                        height: '700px',
                        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                        backgroundColor: '#ffffff'
                    }}>

                    <input type="textbox" placeholder="What are your thoughts on this work?" style={{
                        position: 'absolute',
                        top: '7.1%',
                        left: '7.5%',
                        width: '85%',
                        height: '25%',
                        border: 'solid 1px #373a3c',
                        fontFamily: 'Ubuntu',
                        paddingLeft : '20px',
                        paddingTop: '20px',
                        fontSize: '18px',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 1.35,
                        letterSpacing: 'normal',
                        color: '#8d8d8d'
                    }}/>

                    <button style={{
                        position: 'absolute',
                        top: '38.5%',
                        border: 'none',
                        left: '85.5%',
                        width: '100px',
                        height: '40px',
                        backgroundColor: '#ff8d80',

                        fontFamily: 'Ubuntu',
                    fontSize: '14px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: '-0.1px',
                    color: '#ffffff'

                    }}>POST</button>
                    </div>

                    {/* the footer */}
                        <div style={{
                            position: 'absolute',
                            top: '315%',
                            width: '100%',
                            height: '75px',
                            backgroundColor: '#373a3c'
                            
                        }}>

                        <img src={icon_facebook} style={{
                            position:'absolute',
                            top: '34.7%',
                            left: '41%'
                        }}/>
                        <img style={{
                            position:'absolute',
                            top: '34.7%',
                            left: '46.4%'
                        }} src={icon_twitter}/>
                        <img style={{
                            position:'absolute',
                            top: '34.7%',
                            left: '51.8%'
                        }} src={icon_instagram}/>
                        <img style={{
                            position:'absolute',
                            top: '34.7%',
                            left: '57.2%'
                        }} src={icon_linkedin}/>
                        </div>
                  </div>  
                            </div>
                        
        )
        }
       return null 
    }
}

export default PublicationPageContent;