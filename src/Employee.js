import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css";

const Employee = ({ employee, children }) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        <Link
          className="card-link"
          to={{
            pathname: `/employees/${employee.id}`,
            state: { employee: employee }
          }}
        >
          Details
        </Link>
        <a href="#" onClick={() => this.props.checkOutEmployee(employee.id)}>Delete</a>
      </div>
    </div>
  );
};


Employee.propTypes = {
  // This rule ensures that `employee` is passed a property
  // and that is an object - not a string or number
  employee: PropTypes.object.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,

customProp: function(props, propName, componentName) {
  if (!/matchme/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
},
}

export default Employee