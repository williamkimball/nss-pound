import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            {
                this.props.locations.map(location =>
                    <div>
                        {location.name}
                    </div>
                )
            }
            </React.Fragment>
        )
    }
}
