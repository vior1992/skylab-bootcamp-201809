import React from 'react'


function Post(props) {
    
    return <ul className="list-group">
    <button onClick={() => props.popup(props.id)} className="btn btn-info"><i className="far fa-edit"></i></button>
    <li onClick={() => props.complete(props.id)} className="list-group-item list-group-item-warning" >{(props.completeState && props.id=== props.clickID) ? <strike>{props.text}</strike> : props.text }</li>    
    <button  className="btn btn-info" onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>    

    </ul>

    
}

export default Post