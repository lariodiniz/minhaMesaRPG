import React from 'react'
import PropTypes from 'prop-types'

const button =  props => {
    
    let {type, classes, click, buttonText} = props

    if (type) {
        return (
        <button 
            type={type}
            data-test='button'
            className={`button ${classes}`}
            >
            {buttonText}
        </button> 
        )
    }else {
        return (
            <button 
                data-test='button'
                className={`button ${classes}`}
                onClick={click}
                >                    
                {buttonText}
                {props.children} 
            </button> 
            )       
    }
}


button.propTypes = {
    classes: PropTypes.string, 
    click: PropTypes.func, 
    type: PropTypes.string, 
    buttonText: PropTypes.string
}

export default button