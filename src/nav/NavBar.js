import React, { Component } from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react"
import { Link } from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom"
import "./NavBar.css"


export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Locations</Link>
                <Link to="/animals">Animals</Link>
                <Link to="/employees">Employees</Link>
            </nav>
        )
    }
}