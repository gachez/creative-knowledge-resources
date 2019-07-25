import React, {Component} from 'react'

import search from '../../images/search.svg';
class SearchBox extends Component{
    render(){
        return(
            <React.Fragment>
            
        {/* search textbox */}
        <input placeholder = "Search" style={{
            position: 'absolute',
            top: `${this.props.value}`,
            left: '83%',
            border: 'none',
            borderBottom: 'solid 1px #373a3c',
            height: '17px',
            fontFamily: 'Ubuntu',
            fontSize: '14px',
            fontWeight: 300,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#373a3c'

        }} />

            </React.Fragment>
        )
    }


}

export default SearchBox