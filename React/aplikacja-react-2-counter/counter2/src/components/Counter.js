import React, { Component } from 'react';
import ButtonsPanel from "./ButtonsPanel";
import Title from "./Title";
import Step from "./Step";

// Tylko komponenty klasowe mają stan - this.state
class Counter extends Component {
    constructor(props) {
        super(props);

        let iVal = (this.props.initValue == undefined) ? 0 : this.props.initValue;


        // stan komponentu inicjujemy w konstruktorach
        this.state = {
            value: iVal,
            step: 1
        }
    }

    changeValue = () => {
        this.setState((poprzedniStan) => {
            return {
                value: parseFloat(poprzedniStan.value) + parseFloat(this.state.step)
            };

        });

    }

    zeroValue = () => {
        this.setState(() => {
            return {
                value: 0
            };
        });
    }

    resetValue = () => {
        this.setState(() => {
            return {
                value: this.props.initValue
            };
        });
    }

    addStep = (step) => {
        console.log(step);

        this.setState(() => {
            return {
                step: step
            };

        })
    }


    render() {
        return (
            <div className="counter-component">
                <Title counterValue={this.state.value} />
                <ButtonsPanel akcja={this.changeValue} zeroAkcja={this.zeroValue} resetAkcja={this.resetValue} />
                <Step step={this.state.step} stepChange={this.addStep} />
            </div>
        )
    }
}
export default Counter;