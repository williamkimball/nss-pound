import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker"
import KennelCompany from "./KennelCompany"
import "./index.css"


ReactDOM.render((
    <Router>
        <KennelCompany props={this.props}/>
    </Router>
), document.querySelector("#root"))

registerServiceWorker()