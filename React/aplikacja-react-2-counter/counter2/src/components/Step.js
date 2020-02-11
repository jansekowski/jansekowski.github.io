import React, { Component } from 'react';
import "./Step.css";

class Step extends Component {

    constructor(props) {
        super(props);

        // let stepNo= this._inputStep.value;

        // this.state = {
        //     step: stepNo
        // }

    }

    updateStep = () => {

        // console.log(this._inputStep.value);
        
        this.props.stepChange(this._inputStep.value);
    }

    render() {


        return (
            <div>
                <p>Zwiększ o: <input ref={(stepNumber) => { this._inputStep = stepNumber }} onChange={this.updateStep} type="text" min="1" value={this.props.step} /></p>
            </div>
        )

    }
}

export default Step;