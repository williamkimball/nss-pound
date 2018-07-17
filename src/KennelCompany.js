import React, { Component } from "react"

import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "bootstrap/dist/css/bootstrap.min.css"


export default class KennelCompany extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar props={this.props}/>
                <ApplicationViews />
            </React.Fragment>
        )
    }
}