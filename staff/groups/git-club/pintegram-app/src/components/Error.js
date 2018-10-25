import React from 'react'

function Error(props) {
    return <div className="div__error">
        <div className="div__x">
            <i onClick={props.onErrorClose} className="far fa-times-circle x"></i>
        </div>
        <div className="div__error-center">
            <p className="error">{props.message}</p>
        </div>
    </div>
}

export default Error