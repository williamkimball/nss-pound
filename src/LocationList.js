import React, { Component } from "react";
import Location from "./Location";

export default class LocationList extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.locations.map(oneLocation => {
          return <Location key={oneLocation.id} place={oneLocation} />;
        })}
      </React.Fragment>
    );
  }
}
