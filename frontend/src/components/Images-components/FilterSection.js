import React, {Component} from 'react'
import '../../styles/FilterSection.css'
import downIcon from '../../images/downiconorange.png'




class FilterSection extends Component{
    render(){
        return(
            <div > 
       
                {/* categories div */}
                <div className="categories">
                    <p>Select a category</p>
                </div>

                {/* years div */}
                <div className="year">
                    <p>Select a year</p>
                </div>
                

            </div>
        )
    }
}


export default FilterSection;