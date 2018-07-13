import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";
import Animal from "./Animal";
import Employee from "./Employee";
import Location from "./Location";
import Login from "./Login";

export default class ApplicationViews extends Component {
  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList />;
            } else {
              return <Login />;
            }
          }}
        />
        {/* <Route exact path="/locations" component={LocationList} /> */}
        
        <Route
          path="/locations/:locationId"
          render={props => {
            if (this.isAuthenticated()) {
              return <Location place={props.location.state.place} />;
            } else {
              return <Login />;
            }
          }}
        />
        {/* <Route exact path="/animals" component={AnimalList} /> */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/animals/:animalId"
          render={props => {
            if (this.isAuthenticated()) {
              return <Animal place={props.location.state.animal} />;
            } else {
              return <Login />;
            }
          }}
        />
        {/* <Route exact path="/employees" component={EmployeeList} /> */}
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return <EmployeeList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/employees/:employeeId"
          render={props => {
            if (this.isAuthenticated()) {
              return <Employee employee={props.location.state.employee} />;
            } else {
              return <Login />;
            }
          }}
        />
      </React.Fragment>
    );
  }
}
