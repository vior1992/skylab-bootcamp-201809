import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'


function Sidebar(props) {
    return <nav>

        <ul>

            <li>
                <a>Hola</a>
            </li>

            <li>
                <a>Paco,</a>
            </li>

            <li>
                <a>Que</a>
            </li>

            <li>
                <a>Tal</a>
            </li>

            <li>
                <a>Te</a>
            </li>

            <li>
                <a>Va?</a>
            </li>

        </ul>


    </nav>
}

export default Sidebar