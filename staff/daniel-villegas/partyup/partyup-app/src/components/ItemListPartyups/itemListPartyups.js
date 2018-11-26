import React from 'react'
import "./styles.css"

function ItemListPartyups(props) {
    return <div href="#" onClick={() => props.onPartyupClick(props.id, props.actuallUserId)} className="partyups__event">
        <img className="partyups__picture"src="https://media-cdn.tripadvisor.com/media/photo-s/06/21/79/4c/tiffin-mama.jpg"/>
        <div className="partyups__info">
            <p className="info__date">{props.date}</p>
            <h4 className="info__title">{props.title}</h4>
            <p className="info__description">{props.place}</p>
            <p className="info__host">{props.assistant}</p>
        </div>
    </div>
}

export default ItemListPartyups