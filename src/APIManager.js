const APIManager = Object.create(
  {},
  {
    getAllEmployees: {
      value: () => {
        return fetch("http://localhost:5002/employees").then(e => e.json());
      }
    },
    getAllLocations: {
      value: () => {
        return fetch("http://localhost:5002/locations").then(e => e.json());
      }
    },
    getAllAnimals: {
      value: () => {
        return fetch("http://localhost:5002/animals").then(e => e.json());
      }
    },
    getAllResults: {
      value: terms => { 
      return fetch(`http://localhost:5002/animals/?q=${terms}`).then(e => e.json())

      }
    }
  }
);

export default APIManager;
