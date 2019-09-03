import React from 'react'

export default props => (


    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{props.nome}</label>
        </div>
        <div className="field-body">
            <div className="field">
                <p className="control">
                    <input className={`input is-${props.cor} is-rounded`}
                        type={ props.type ? `${props.type}` : 'text'} 
                        placeholder={props.placeholder}
                        value={props.value}
                        id={props.id}
                        onChange={props.onChange}
                        ></input>
                </p>
            </div>
        </div>
    </div>
)