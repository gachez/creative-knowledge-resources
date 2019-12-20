import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import home_icon from '../../images/icon_home.svg'




class SideBarIcons extends Component{
    render(){
        return(
            <React.Fragment>
            
        {/* left side bar icons */}
<Link to={'/'}  style={{
            position: 'absolute',
            top:`${82.5 - this.props.value}%`,
            left: '55.5px'
        }}>
<img src={home_icon} alt="home icon"/>
</Link>

<Link to={'/'}  style={{
            position: 'absolute',
            top:`${90 - this.props.value}%`,
            left: '58.5px',
            fill: 'orange'
        }}>
<img src={this.props.iconColor} alt="ellipse icon" />


</Link>

<Link to={'/videos'}  style={{
            position: 'absolute',
            top:`${95 - this.props.value}%`,
            left: '58.5px'
        }}>
<img src={this.props.transell1} alt="ellipse icon tranparent" />

</Link>        

<Link to={'/publications'}  style={{
            position: 'absolute',
            top:`${99.5 - this.props.value}%`,
            left: '58.5px'
        }}>
<img src={this.props.transell2} onClick={document.location.reload} alt="ellipse icon tranparent 3" />

</Link>

            </React.Fragment>
        )
    }
}

export default SideBarIcons