import React from "react"

export default props => {
    console.log(props)
    return <li>{props.employee.name}</li>
}