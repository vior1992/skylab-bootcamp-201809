import React from 'react'

function Error(props) {

    return <div>{props.error && <p className="error">{props.error}</p>}</div>
}

export default Error