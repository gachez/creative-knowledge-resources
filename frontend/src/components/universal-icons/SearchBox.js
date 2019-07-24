import React, {Component} from 'react'

import search from '../../images/search.svg';
class SearchBox extends Component{
    render(){
        return(
            <React.Fragment>
            
        {/* search textbox */}
        <img src={search} alt="search" style={{
            position: 'absolute',
            top: `${this.props.value}`,
            left: '83%'
        }}/>

            </React.Fragment>
        )
    }


}

export default SearchBox