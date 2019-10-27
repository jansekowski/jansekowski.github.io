import React, { Component } from 'react';
import "./Title.css";

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h3>Stan licznika: {this.props.counterValue}</h3>
        )
    }
}

export default Title;