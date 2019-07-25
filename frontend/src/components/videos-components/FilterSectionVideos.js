import React, {Component} from 'react'

import downIcon from '../../images/downiconorange.png'

const dropDownFontStyle = {
    marginLeft: '15px',
    marginTop: '26px',
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff',
    cursor: 'pointer'
}

class FilterSectionVideos extends Component{
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
             color: '#373a3c'        }}>By discipline</p>

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
                <p id="discipline" style={{
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
                }}> Select a discipline</p>

                <img src={downIcon} alt="down" style={{
                    position: 'absolute',
                    left: '168px',
                    top: '20px',
                    color: 'orange',
                    cursor: 'pointer'
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

                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[0].innerText
                }
                   
                    
                }>African games</p>
                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[1].innerText
                }
                   
                    
                }>Animation</p>
                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[2].innerText
                }
                   
                    
                }>Architecture</p>
                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[3].innerText
                }
                   
                    
                }>Dance</p>
                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[4].innerText
                }
                   
                    
                }>Decorative arts</p>
                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[5].innerText
                }
                   
                    
                }>Decorative arts</p>
                <p className="disciplines" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('discipline').style.color = "#ff321a"
                    document.getElementById('discipline').innerText = document.getElementsByClassName('disciplines')[6].innerText
                }
                   
                    
                }>Decorative arts</p>
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
             color: '#373a3c'        }}>By discussion</p>

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
                <p id="discussion" style={{
                      
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
                }}> Select a discussion</p>

                <img src={downIcon} alt="down" style={{
                    position: 'absolute',
                    left: '168px',
                    top: '20px',
                    color: 'orange',
                    cursor: 'pointer'
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

                <p className="discussions" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('discussion-dropdown').style.display = 'none'
                        document.getElementById('discussion').style.color = '#ff321a'
                        document.getElementById('discussion').innerText = document.getElementsByClassName('discussions')[0].innerText

                    }
                }>Ideas</p>
                <p className="discussions" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('discussion-dropdown').style.display = 'none'
                        document.getElementById('discussion').style.color = '#ff321a'
                        document.getElementById('discussion').innerText = document.getElementsByClassName('discussions')[1].innerText
                        
                    }
                }>Interviews</p>
                <p className="discussions" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('discussion-dropdown').style.display = 'none'
                        document.getElementById('discussion').style.color = '#ff321a'
                        document.getElementById('discussion').innerText = document.getElementsByClassName('discussions')[2].innerText
                        
                    }
                }>Architecture</p>
                <p className="discussions" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('discussion-dropdown').style.display = 'none'
                        document.getElementById('discussion').style.color = '#ff321a'
                        document.getElementById('discussion').innerText = document.getElementsByClassName('discussions')[3].innerText
                        
                    }
                }>Dance</p>
            
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

            
            <p id="year" style={{
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
                    top: '20px',
                    color: 'orange',
                    cursor: 'pointer'
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

                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[0].innerText
                        
                    }
                }>2019</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[1].innerText
                        
                    }
                }>2018</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[2].innerText
                        
                    }
                }>2017</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[3].innerText
                        
                    }
                }>2016</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('discussions')[4].innerText
                        
                    }
                }>2015</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[5].innerText
                        
                    }
                }>2014</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[6].innerText
                        
                    }
                }>2013</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[7].innerText
                        
                    }
                }>2012</p>
                <p className="years" style={dropDownFontStyle} onClick={
                    () =>{
                        document.getElementById('year-dropdown').style.display = 'none'
                        document.getElementById('year').style.color = '#ff321a'
                        document.getElementById('year').innerText = document.getElementsByClassName('years')[8].innerText
                        
                    }
                }>2011</p>
                
                </div>

                   {/* reset button */}

               <button   value = "RESET" id="reset-btn" style={{
                    position: 'absolute',
                    top: `${105 - this.props.valuebtn}%`,
                    left: '90%',
                    width: '100px',
                    height: '40px',
                   
                    padding: '5px',
                    fontFamily: 'Ubuntu',
                                            
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: '-0.1px',
                    color: '#ffffff',
                    border: 'none' 
                                        
                }} onClick={
                    () =>{
                        document.getElementById('discussion').innerText = "Select a discussion"
                        document.getElementById('discussion').style.color = 'black'
                        document.getElementById('discipline').innerText = "Select a discipline"
                        document.getElementById('discipline').style.color = 'black'
                        document.getElementById('year').innerText = "Select a year"
                        document.getElementById('year').style.color = 'black'
                    }
                }>
                    RESET
                </button>
 
            
    
            </React.Fragment>
        )
    }
}


export default FilterSectionVideos;