
import React, { Component } from "react";
import Search from "./Search";
import APIManager from "./APIManager"

export default class SearchList extends Component {
  // state = {
  //   results: []
  // };
  // componentDidMount() {
  // APIManager.getAllResults(this.props.search).then(results => this.setState({ results: results }));
  // }

  render() {
    return (
      <React.Fragment>
        <h1>Yo</h1>
        {/* {this.props.results.map(result => (
          <Search key={result.id} result={result}>
            {result.name}
          </Search>
        ))} */}
      </React.Fragment>
    );
  }
}

