import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";
import Animal from "./Animal";
import Employee from "./Employee";
import Location from "./Location";
import Login from "./Login";
import SearchResultsList from "./SearchResultsList"

export default class ApplicationViews extends Component {
  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  seshIsAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <LocationList {...props} />;
            } else {
              return <Login />;
            }
          }}
        />
        {/* <Route exact path="/locations" component={LocationList} /> */}
        
        <Route
          path="/locations/:locationId"
          render={props => {
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <Location location={props.location.state.location} {...props}>
              {props.location.state.location.name}
          </Location>
      
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
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <AnimalList {...props}/>
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/animals/:animalId"
          render={props => {
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <Animal animal={props.location.state.animal} {...props}>
              {props.location.state.animal.name}
          </Animal>
      
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
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <EmployeeList {...props}/>;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/employees/:employeeId"
          render={props => {
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <Employee employee={props.location.state.employee} {...props}>
              {props.location.state.employee.name}
          </Employee>      
            } else {
              return <Login />;
            }
          }}
        />
                <Route
          exact
          path="/search"
          render={props => {
            if (this.isAuthenticated()||this.seshIsAuthenticated()) {
              return <SearchResultsList {...props}/>;
            } else {
              return <Login />;
            }
          }}
        />
      </React.Fragment>
    );
  }
}
