import React, { Component } from 'react';

export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                </div>
                <div>
                <h3>Student Kennels 2</h3>
                <h4>Nashville South Location</h4>
                <h5>123 Dog Way</h5>
                </div>
                <div>
                <h3>Student Kennels 3</h3>
                <h4>Nashville East Location</h4>
                <h5> 453 Main Way</h5>
                </div>
            </article>
        );
    }
}