import React, { Component } from "react";

export default class AnimalsList extends Component {
    
     checkOwner (animal) {
        let person = ""
        this.props.animalOwners.forEach(relationship => {
            if (animal === relationship.animalId) {
            person = this.props.owners[relationship.ownerId-1]
        }
    });
    return person.name 
    }
render() {
    return (
        <React.Fragment>
        {
            this.props.animals.map(animal =>
        <div>
                Animal: {animal.name} 
                Owner: {this.checkOwner(animal.id)}
        </div>
            )}
      </React.Fragment>
    );
  }
}
