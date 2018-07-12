import React, { Component } from "react"
import Location from "./ListItems"

export default class EmployeeList extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.locations.map(Location)}
      </React.Fragment>
    );
  }
}
