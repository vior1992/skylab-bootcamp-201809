import React, { Component } from 'react'


function MiniCard(props) {

    return <div className="minicard"  >

        <article className="minicard-body">

            <img className="minicard-img-top" src={'https://image.tmdb.org/t/p/w500/'+props.imgRoute} />
            <h5 className="minicard-title">{props.title}</h5>

        </article>

    </div>
}
export default MiniCard