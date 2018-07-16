import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  state = {
    animals: []
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  checkOutAnimal = animalId => {
    // Delete the specified animal from the API
    fetch(`http://localhost:5002/animals/${animalId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/animals");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({
          animals: animalList
        });
      });
  };

  addNewAnimal = () => {
    // Add new animal to the API
    fetch(`http://localhost:5002/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
      body: JSON.stringify({ name: this.state.newAnimalName,
        breed: this.state.newAnimalBreed})
    })
      // When POST is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/animals");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({
          animals: animalList
        });
      });
  };

  componentDidMount() {
    fetch("http://localhost:5002/animals")
      .then(e => e.json())
      .then(animals => this.setState({ animals: animals }));
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addNewAnimal}>
          <input
            type="text"
            placeholder="New Animal Name"
            id="newAnimalName"
            onChange={this.handleFieldChange}
          />
          <input
            type="text"
            placeholder="New Animal Breed"
            id="newAnimalBreed"
            onChange={this.handleFieldChange}
          />
          <button type="submit">Submit New Animal</button>
        </form>
        {this.state.animals.map(animal => (
          <Animal
            key={animal.id}
            animal={animal}
            checkOutAnimal={this.checkOutAnimal}
          />
        ))}
      </React.Fragment>
    );
  }
}
