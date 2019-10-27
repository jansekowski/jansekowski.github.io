import React, { Component } from 'react';
import ButtonsPanel from "./ButtonsPanel";
import Title from "./Title";

// Tylko komponenty klasowe mają stan - this.state
class Counter extends Component {
    constructor(props) {
        super(props);

        let iVal = (this.props.initValue == undefined) ? 0 : this.props.initValue;

        // stan komponentu inicjujemy w konstruktorach
        this.state = {
            value: iVal
        }
    }

    changeValue = () => {
        this.setState((poprzedniStan) => {
            return {
                value: poprzedniStan.value + 1
            };

        });
        console.log("Wywołuję na click w ButtonsPanel metodę utworzoną w rodzicu (czyli w Counter)");
    }

    zeroValue = () => {
        this.setState(() => {
            return {
                value: this.props.initValue
            };
        });
    }

    resetValue = () => {
        this.setState(() => {
            return {
                value: 0
            };
        });
    }


    render() {
        return (
            <div className="counter-component">
                <Title counterValue={this.state.value} />
                <ButtonsPanel akcja={this.changeValue} zeroAkcja={this.zeroValue} resetAkcja={this.resetValue} />
            </div>
        )
    }
}
export default Counter;