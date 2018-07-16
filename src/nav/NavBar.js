import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <nav>
        <Link to="/">Locations</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/employees">Employees</Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search Database" id="search" />
        </form>
      </nav>
    );
  }
}
