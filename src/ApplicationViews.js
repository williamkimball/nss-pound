import { Route } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom'
import React, { Component } from "../../../Library/Caches/typescript/2.9/node_modules/@types/react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList} />
                <Route path="/animals" component={AnimalList} />
                <Route path="/employees" component={EmployeeList} />
            </React.Fragment>
        )
    }
}