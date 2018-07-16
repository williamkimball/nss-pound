import React, { Component } from "react";
import { Link}  from "react-router-dom";
import "./NavBar.css";
import APIManager from "./../APIManager"
import { Redirect } from 'react-router-dom'
// import { browserHistory } from 'react-router';

export default class NavBar extends Component {
  state = {
    search: ""
  };

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    APIManager.getAllResults(this.state.search).then(results => this.setState({ results: results }));
//do something...
return <Redirect to='/Search'  />
  }

  render() {
    // const { redirect } = this.state.redirect;

    // if (redirect) {
    //   return <Redirect to={{
    //     pathname: "/search",
    //     state: state.results
    //   }}/>;
    // }
    return (
      <nav>
        <Link to="/">Locations</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/Search">Search Results</Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search Database" id="search" onChange={this.handleFieldChange} />
        </form>
      </nav>
    );
  }
}
