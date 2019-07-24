import React, {Component} from 'react'

import downIcon from '../../images/icons_down.svg'

const dropDownFontStyle = {
    marginLeft: '15px',
    marginTop: '26px',
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff'
}

class FilterSectionPublication extends Component{
    render(){
        return(
            <React.Fragment>
                
        {/* right side bar filters */}

        <p id="category-title" style={{
            position: 'absolute',
            top: '42.5%',
            left: '83.25%',
             height: '17px',
             fontFamily: 'Ubuntu',
             fontSize: '14px',
             fontWeight: 700,
             fontStyle: 'normal',
             fontStretch: 'normal',
             lineHeight: 'normal',
             letterSpacing: 'normal',
             color: '#373a3c'        }}>By format</p>

             {/* category filter box */}

            <div id="filter-box-categories" style={{
                position: 'absolute',
                top: '48%',
                left: '83.25%',
                 width: '200px',
                 height: '45px',
                 border: 'solid 1px #373a3c',
                 backgroundColor: '#ffffff'
               
            }}>
                <p style={{
                      width: '117px',
                      height: '17px',
                      fontFamily: 'Ubuntu',
                      fontSize: '14px',
                      fontWeight: 550,
                      fontStyle: 'normal',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#373a3c',
                      marginLeft: '15px'
                }}> Select a format</p>

                <img src={downIcon} alt="down" style={{
                    position: 'absolute',
                    left: '168px',
                    top: '10.5px',
                    color: 'orange'
                }}
                onClick={
                    ()=>{
                        let drop = document.getElementById('categories-dropdown')
                        if(drop.style.display==="block"){
                            drop.style.display="none"
                        }

                        else if(drop.style.display==="none"){
                            drop.style.display="block"
                        }

                        else{
                            console.log("elsed")
                        }
                        
                    }
                }
                />

              
            </div>
   {/* dropdown for the categories filter */}
            <div id="categories-dropdown" style={{
                   position: 'absolute',
                   top: '54.15%',
                   left: '83.27%',
                   width: '200px',
                     height: '236px',
                     backgroundColor: '#373a3c',
                     zIndex: 999,
                     overflowY: 'scroll',
                     display: 'none'
                   
                }}>

                <p style={dropDownFontStyle}>PDF</p>
                <p style={dropDownFontStyle}>Epub</p>
                <p style={dropDownFontStyle}>DOC</p>
                <p style={dropDownFontStyle}>Mobi</p>

                </div>
            

        {/* right side bar filters */}

        <p id="discussion-title" style={{
            position: 'absolute',
            top: '55%',
            left: '83.25%',
             
             height: '17px',
             fontFamily: 'Ubuntu',
             fontSize: '14px',
             fontWeight: 700,
             fontStyle: 'normal',
             fontStretch: 'normal',
             lineHeight: 'normal',
             letterSpacing: 'normal',
             color: '#373a3c'        }}>By discipline</p>

             {/* category filter box */}

            <div id="filter-box-categories" style={{
                position: 'absolute',
                top: '60.5%',
                left: '83.25%',
                 width: '200px',
                 height: '45px',
                 border: 'solid 1px #373a3c',
                 backgroundColor: '#ffffff'
               
            }}>
                <p style={{
                      
                      height: '17px',
                      fontFamily: 'Ubuntu',
                      fontSize: '14px',
                      fontWeight: 550,
                      fontStyle: 'normal',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#373a3c',
                      marginLeft: '15px'
                }}> Select a discipline</p>

                <img src={downIcon} alt="down" style={{
                    position: 'absolute',
                    left: '168px',
                    top: '10.5px',
                    color: 'orange'
                }}
                onClick={
                    ()=>{
                        let drop = document.getElementById('discussion-dropdown')
                        if(drop.style.display==="block"){
                            drop.style.display="none"
                        }

                        else if(drop.style.display==="none"){
                            drop.style.display="block"
                        }

                        else{
                            console.log("elsed")
                        }
                        
                    }
                }
                />

              
            </div>
   {/* dropdown for the categories filter */}
            <div id="discussion-dropdown" style={{
                   position: 'absolute',
                   top: '66.75%',
                   left: '83.27%',
                   width: '200px',
                     height: '236px',
                     backgroundColor: '#373a3c',
                     zIndex: 999,
                     overflowY: 'scroll',
                     display: 'none'
                   
                }}>

                <p style={dropDownFontStyle}>Ideas</p>
                <p style={dropDownFontStyle}>Interviews</p>
                <p style={dropDownFontStyle}>Architecture</p>
                <p style={dropDownFontStyle}>Dance</p>
                <p style={dropDownFontStyle}>Decorative arts</p>
                <p style={dropDownFontStyle}>Decorative arts</p>
                <p style={dropDownFontStyle}>Decorative arts</p>
                <p style={dropDownFontStyle}>Decorative arts</p>

                </div>


              {/* year filter title   */}

              <p id="filter-title" style={{
                  position: 'absolute',
                  top: '67.5%',
                  left: '83.25%',
                   width: '76px',
                   height: '17px',
                   fontFamily: 'Ubuntu',
                   fontSize: '14px',
                   fontWeight: 700,
                   fontStyle: 'normal',
                   fontStretch: 'normal',
                   lineHeight: 'normal',
                   letterSpacing: 'normal',
                   color: '#373a3c'
              }}>
            By year
              </p>

              
             {/* year filter box */}

            <div id="filter-box-categories" style={{
                position: 'absolute',
                top: '73%',
                left: '83.25%',
                 width: '200px',
                 height: '45px',
                 border: 'solid 1px #373a3c',
                 backgroundColor: '#ffffff'
               
            }}>

            
<p style={{
                      width: '117px',
                      height: '17px',
                      fontFamily: 'Ubuntu',
                      fontSize: '14px',
                      fontWeight: 550,
                      fontStyle: 'normal',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#373a3c',
                      marginLeft: '15px'
                }}> Select a year</p>

                <img src={downIcon} alt="down" style={{
                    position: 'absolute',
                    left: '168px',
                    top: '10.5px',
                    color: 'orange'
                }}
                
                onClick={
                    ()=>{
                        let drop = document.getElementById('year-dropdown')
                        if(drop.style.display==="block"){
                            drop.style.display="none"
                        }

                        else if(drop.style.display==="none"){
                            drop.style.display="block"
                        }

                        else{
                            console.log("elsed")
                        }
                        
                    }
                }
                />

            </div>

                 {/* dropdown for the year filter */}
            <div id="year-dropdown" style={{
                   position: 'absolute',
                   top: '79.15%',
                   left: '83.27%',
                   width: '200px',
                   display: 'none',
                     height: '236px',
                     backgroundColor: '#373a3c',
                     zIndex: 999,
                     overflowY: 'scroll'
                   
                }}>

                <p style={dropDownFontStyle}>2019</p>
                <p style={dropDownFontStyle}>2018</p>
                <p style={dropDownFontStyle}>2017</p>
                <p style={dropDownFontStyle}>2016</p>
                <p style={dropDownFontStyle}>2015</p>
                <p style={dropDownFontStyle}>2014</p>
                <p style={dropDownFontStyle}>2013</p>
                <p style={dropDownFontStyle}>2012</p>
                <p style={dropDownFontStyle}>2011</p>
                <p style={dropDownFontStyle}>2010</p>
                <p style={dropDownFontStyle}>2009</p>
                <p style={dropDownFontStyle}>2008</p>
                <p style={dropDownFontStyle}>2007</p>
                <p style={dropDownFontStyle}>2006</p>
                <p style={dropDownFontStyle}>2005</p>

                </div>
            
    
            </React.Fragment>
        )
    }
}


export default FilterSectionPublication;