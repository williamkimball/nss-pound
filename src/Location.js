import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default props => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.place.name}
                </h5>
                <Link className="card-link"
                    to={{
                        pathname: `/locations/${props.place.id}`,
                        state: { place: props.place }
                    }}>
                    Details
                </Link>
            </div>
        </div>
    )
}