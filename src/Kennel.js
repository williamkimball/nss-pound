
import React, { Component } from 'react';
import EmployeeList from "./EmployeeList";
import Locations from './LocationList';

export default class Kennel extends Component {
    render() {
        return (
            <div>
                <Locations />
                <EmployeeList />
            </div>
        );
    }
}

