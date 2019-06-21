import React from 'react'
import If from '../../common/utils/if'

export default props => (
    <If test={!props.hide}>
        <div className='field'>
        <div className='control'>
        <input {...props.input}
            className='input'
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type} />
                <span className='icon is-small is-right'>
                <i className={`fa fa-${props.icon}`}></i>

                </span>
        </div>
        </div>
    </If>
)