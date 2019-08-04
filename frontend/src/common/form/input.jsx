import React from 'react'
import PropTypes from 'prop-types'

const input = props => (
    <input data-test='input' {...props.input}
        className='input'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)

input.propTypes = {
    placeholder: PropTypes.string, 
    readOnly: PropTypes.bool, 
    type: PropTypes.string, 
}
export default input