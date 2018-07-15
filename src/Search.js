import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default props => {
  console.log(props)
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{props.children}</h5>
        {/* <Link
          className="card-link"
          to={{
            pathname: `/results/${props.results.id}`,
            state: { result: this.props.results }
          }}
        >
          Details
        </Link> */}
      </div>
    </div>
  );
};