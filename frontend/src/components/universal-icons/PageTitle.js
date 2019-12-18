import React, {Component} from 'react'
import '../../styles/page-title.css'

class PageTitle extends Component{
    render(){
        return(

<React.Fragment>

        {/* page title */}
        <p id="page-title"> Contemporary African Arts: {this.props.page}</p>
</React.Fragment>

        )
    }
}

export default PageTitle