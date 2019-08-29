import React from 'react'

export default props => (


    <div className="field">
        <label className="label">{props.nome}</label>        
        <div className="control">
            <textarea 
                id={props.id}
                onChange={props.onChange}
                className="textarea is-rounded" 
                value={props.valor}
                placeholder={props.placeholder} 
                rows={props.rows}></textarea>
        </div>
    </div>
)