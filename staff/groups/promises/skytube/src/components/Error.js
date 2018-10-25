import React from 'react'

function Error(props) {
    return <div className="error">
        {props.error && <p className="error__text">{props.error}</p>}
    </div>
}

export default Error