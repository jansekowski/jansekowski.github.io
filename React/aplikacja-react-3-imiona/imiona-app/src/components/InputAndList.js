import React, { Component } from "react";
import "./InputAndList.css";

class InputAndList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            names: [],
            namesExample: ["Adam", "Bronek", "Cezary"]
        }
    }
}

render(){
    return (
        <div>
            <div className="form">
                <input name="imie" onInput={this.handleInput}></input>
                <button>Dodaj imię</button>
                <div className="list">

                </div>
            </div>
        </div>
    )
}