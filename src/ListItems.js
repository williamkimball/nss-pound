import React from "react"

export default props => {
    return <li key={props.id}>{props.name}</li>
}