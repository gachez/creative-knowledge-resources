import React, {Component} from 'react'



class ResetBtn extends Component{
    render(){
        return(
            <React.Fragment>
            
               {/* reset button */}

               <button  onMouseOver={() => {console.log("juu")}} onMouseOut={() =>{console.log("chini")}} value = "RESET" id="reset-btn" style={{
                   position: 'absolute',
                   top: `${105 - this.props.value}%`,
                   left: '90%',
                     width: '100px',
                     height: '40px',
                     backgroundColor: '#ff8d80',
                     padding: '5px',
                     fontFamily: 'Ubuntu',
                    fontSize: '14px',
  fontWeight: 600,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.1px',
  color: '#ffffff',
  border: 'none' 
                   
                }}>
                    RESET
                </button>
 
            </React.Fragment>
        )
    }
}

export default ResetBtn