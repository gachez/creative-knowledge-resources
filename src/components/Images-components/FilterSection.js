import React, {Component} from 'react'
import '../../styles/FilterSection.css'
import downIcon from '../../images/downiconorange.png'




class FilterSection extends Component{
    render(){
        return(
            <div className="filter-section-container" > 
       
                {/* categories div */}
                <div className="categories" onClick={
                    ()=>{
                        document.getElementsByClassName('categories-dropdown')[0].style.display==="none" ? document.getElementsByClassName('categories-dropdown')[0].style.display = "block" : document.getElementsByClassName('categories-dropdown')[0].style.display = "none"
                    }
                }>
                    <p>Select a category</p>
                        <ul className="categories-dropdown">
                            <li>African games</li>
                            <li>Animations</li>
                            <li>Decorative Arts</li>
                            <li>Dance</li>
                        </ul>
                    
                </div>

                {/* years div */}
                <div className="year" onClick={
                    ()=>{
                        document.getElementsByClassName('years-dropdown')[0].style.display==="none" ? document.getElementsByClassName('years-dropdown')[0].style.display = "block" : document.getElementsByClassName('years-dropdown')[0].style.display = "none"
                    }
                }>
                    <p>Select a year</p>
                      <ul className="years-dropdown">
                        <li>2019</li>
                        <li>2018</li>
                        <li>2017</li>
                        <li>2016</li>
                        <li>2015</li>
                        <li>2014</li>
                        <li>2013</li>
                        <li>2012</li>
                        <li>2011</li>
                        <li>2010</li>
                        <li>2009</li>
                      </ul>
                </div>

                <div className="reset-btn">
                    <p>
                    RESET
                    </p>
                    </div>
                

            </div>
        )
    }
}


export default FilterSection;