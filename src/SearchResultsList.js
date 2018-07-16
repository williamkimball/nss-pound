
import React, { Component } from "react";
import Search from "./Search";
import APIManager from "./APIManager"

export default class SearchList extends Component {
  state = {
    results: [],
    search:""
  };
  // componentDidMount() {
  // APIManager.getAllResults(this.props.search).then(results => this.setState({ results: results }));
  // }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

//   getSearch(){
//     let searchBar = document.querySelector("#search")
//     searchBar.onchange = function() {
//       this.state.search = searchBar.value;
//       console.log(this.state.search)
//     }
//   }
//   componentDidMount() {
// this.getSearch()
//   }

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

