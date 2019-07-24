import React, {Component} from 'react'

class PageTitle extends Component{
    render(){
        return(

<React.Fragment>

        {/* page title */}
        <p id="page-title" style={{
            position: 'absolute',
            top: `${55.7 - this.props.value}%`,
            left: '130px',
             width: '376px',
             height: '35px',
             fontFamily: 'Ubuntu',
             fontSize: '30px',
             fontWeight: 700,
             fontStyle: 'normal',
             fontStretch: 'normal',
             lineHeight: 'normal',
             letterSpacing: 'normal',
             color: '#373a3c'
        }}>Contemporary African Arts</p>
</React.Fragment>

        )
    }
}

export default PageTitle