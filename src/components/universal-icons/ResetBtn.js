import React, {Component} from 'react'
import '../../styles/reset.css'


class ResetBtn extends Component{
    render(){
        return(
            <React.Fragment>
            
               {/* reset button */}

               <button   value = "RESET" id="reset-btn" style={{
                    position: 'absolute',
                    top: `${105 - this.props.value}%`,
                    left: '90%',
                    width: '100px',
                    height: '40px',
                   
                    padding: '5px',
                    fontFamily: 'Ubuntu',
                                            
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