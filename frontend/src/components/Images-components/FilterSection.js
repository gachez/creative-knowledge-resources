import React, {Component} from 'react'
import '../../styles/FilterSection.css'
import downIcon from '../../images/downiconorange.png'




class FilterSection extends Component{
    render(){
        return(
            <div > 
                
        {/* right side bar filters */}

        <p id="category-title">By category</p>

             {/* category filter box */}
 
            <div id="filter-box-categories" 
            
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
                <p id = "category" > Select a category</p>

                <img id="down" src={downIcon} alt="down" 
                />

              
            </div>
   {/* dropdown for the categories filter */}
            <div id="categories-dropdown" >

                <p className = "categories dropdownfontstyle"  onClick={
                   () =>{

                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[0].innerText
                    document.getElementById('categories-dropdown').style.display = 'none'
                    this.props.filterfunc('African games', 'category')         
                }
                   
                    
                }>African games</p>
                <p className = "categories dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[1].innerText
                   

                    this.props.filterfunc(document.getElementsByClassName('categories')[1].innerText, 'category')
                    
                }
                   
                    
                }>Animation</p>
                <p className = "categories dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[2].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('categories')[2].innerText, 'category')
                    
                }
                   
                    
                }>Architecture</p>
                <p className = "categories dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[3].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('categories')[3].innerText, 'category')
                    
                }
                   
                    
                }>Dance</p>
                <p className = "categories dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('categories-dropdown').style.display = 'none'   
                    document.getElementById('category').style.color = "#ff321a"
                    document.getElementById('category').innerText = document.getElementsByClassName('categories')[4].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('categories')[4].innerText, 'category')
                    
                }
                   
                    
                }>Decorative arts</p>

                </div>
            
              {/* year filter title   */}

              <p id="filter-title">
            By year
              </p>

              
             {/* year filter box */}

            <div id="filter-box-categories"
            
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

            
<p id="year" > Select a year</p>

                <img id="down" src={downIcon} alt="down" 
                
          
                />

            </div>

                 {/* dropdown for the year filter */}
            <div id="year-dropdown">

                <p className="years dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[0].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[0].innerText, 'year')
                    
                }
                   
                    
                }>2019</p>
                <p className="years dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[1].innerText
                    
                    this.props.filterfunc(document.getElementsByClassName('years')[1].innerText, 'year')    
                }
                   
                    
                }>2018</p>
                <p className="years dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[2].innerText

                    this.props.filterfunc(document.getElementsByClassName('years')[2].innerText, 'year')
                }
                   
                    
                }>2017</p>
                <p className="years dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[3].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[3].innerText, 'year')
                }
                   
                    
                }>2016</p>
                <p className="years dropdownfontstyle"  onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[4].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[4].innerText, 'year')
                }
                   
                    
                }> 2015</p>
                <p className="years dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[5].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[5].innerText, 'year')
                }
                   
                    
                }>2014</p>
                <p className="years dropdownfontstyle" onClick={
                   () =>{
                    document.getElementById('year-dropdown').style.display = 'none'   
                    document.getElementById('year').style.color = "#ff321a"
                    document.getElementById('year').innerText = document.getElementsByClassName('years')[6].innerText
                
                    this.props.filterfunc(document.getElementsByClassName('years')[6].innerText, 'year')
                }
                   
                    
                }>2013</p>
                <p className="years dropdownfontstyle" onClick={
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
                  top: `${105 - this.props.value}%`,
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