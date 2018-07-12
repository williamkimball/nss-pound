import React, { Component } from "react"


export default class EmployeeList extends Component {
    state = {
        employees: [
          { id: 1, name: "Jessica Younker" },
          { id: 2, name: "Jordan Nelson" },
          { id: 3, name: "Zoe LeBlanc" },
          { id: 4, name: "Blaise Roberts" }
        ],
    }
    render() {
        return (
            <React.Fragment>
            {
                this.state.employees.map(employee =>
                    <div key = {employee.id} >
                        {employee.name}
                    </div>
                )
            }
            </React.Fragment>
        )
    }
}