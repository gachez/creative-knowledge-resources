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

class FilterSection extends Component{
    render(){
        return(
            <div > 
                
        {/* right side bar filters */}

        <p id="category-title" style={{
            position: 'absolute',
            top: '76%',
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
             color: '#373a3c'        }}>By category</p>

             {/* category filter box */}

            <div id="filter-box-categories" style={{
                position: 'absolute',
                top: '82%',
                left: '83.25%',
                 width: '200px',
                 height: '45px',
                 border: 'solid 1px #373a3c',
                 backgroundColor: '#ffffff',
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
            >
                <p id = "category" style={{
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
                }}> Select a category</p>

                <img src={downIcon} alt="down" style={{
                    position: 'absolute',
                    left: '168px',
                    top: '20px',
                    color: 'orange',
                    cursor: 'pointer'
                }}
                />

              
            </div>
   {/* dropdown for the categories filter */}
            <div id="categories-dropdown" style={{
                   position: 'absolute',
                   top: '88.25%',
                   left: '83.27%',
                   width: '200px',
                     height: '236px',
                     backgroundColor: '#373a3c',
                     zIndex: 999,
                     overflowY: 'scroll',
                     display: 'none'
                   
                }}>

                <p className = "categories" style={dropDownFontStyle} onClick={
                   () =>{

                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[0].innerText
                    document.getElementById('categories-dropdown').style.display = 'none'
                    this.props.filterfunc('African games', 'category')         
                }
                   
                    
                }>African games</p>
                <p className = "categories" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[1].innerText
                   

                    this.props.filterfunc(document.getElementsByClassName('categories')[1].innerText, 'category')
                    
                }
                   
                    
                }>Animation</p>
                <p className = "categories" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[2].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('categories')[2].innerText, 'category')
                    
                }
                   
                    
                }>Architecture</p>
                <p className = "categories" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[3].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('categories')[3].innerText, 'category')
                    
                }
                   
                    
                }>Dance</p>
                <p className = "categories" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[4].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('categories')[4].innerText, 'category')
                    
                }
                   
                    
                }>Decorative arts</p>

                </div>
            
              {/* year filter title   */}

              <p id="filter-title" style={{
                  position: 'absolute',
                  top: '89.5%',
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
                top: '95%',
                left: '83.25%',
                 width: '200px',
                 height: '45px',
                 border: 'solid 1px #373a3c',
                 backgroundColor: '#ffffff',
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
            >

            
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
                
          
                />

            </div>

                 {/* dropdown for the year filter */}
            <div id="year-dropdown" style={{
                   position: 'absolute',
                   top: '101.45%',
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
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[0].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[0].innerText, 'year')
                    
                }
                   
                    
                }>2019</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[1].innerText
                    
                    this.props.filterfunc(document.getElementsByClassName('years')[1].innerText, 'year')    
                }
                   
                    
                }>2018</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[2].innerText

                    this.props.filterfunc(document.getElementsByClassName('years')[2].innerText, 'year')
                }
                   
                    
                }>2017</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[3].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[3].innerText, 'year')
                }
                   
                    
                }>2016</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[4].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[4].innerText, 'year')
                }
                   
                    
                }> 2015</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[5].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[5].innerText, 'year')
                }
                   
                    
                }>2014</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[6].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[6].innerText, 'year')
                }
                   
                    
                }>2013</p>
                <p className="years" style={dropDownFontStyle} onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[7].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[7].innerText, 'year')
                }
                   
                    
                }>2012</p>

                </div>
            
            {/* reset button */}

            <button   value = "RESET" id="reset-btn" style={{
                    position: 'absolute',
                    top: `${105 - this.props.value}%`,
                    left: '90%',
                    width: '100px',
                    height: '40px',
                    backgroundColor: 'rgb(255, 50, 26)',
                    padding: '5px',
                    fontFamily: 'Ubuntu',
                    cursor: 'pointer',                        
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: '-0.1px',
                    color: '#ffffff',
                    border: 'none' 
                                        
                }} onClick={
                    () =>{
                        document.getElementById('category').innerText = "Select a category"
                        document.getElementById('category').style.color = 'black'
                       document.getElementById('year').innerText = "Select a year"
                        document.getElementById('year').style.color = 'black'
                        
                    }
                }>
                    RESET
                </button>
    
            </div>
        )
    }
}


export default FilterSection;