import React, { Component } from 'react';
import "./ButtonsPanel.css";

class ButtonsPanel extends Component {
    constructor(props) {
        super(props);


    }

    handleClick = () => {
        // console.log('Klikłem');
        this.props.akcja();
    }

    zeroClick = () => {
        this.props.zeroAkcja();
    }

    resetClick = () => {
        this.props.resetAkcja();
        console.log("Reset licznika");
    }

    render() {
        return (
            <div className="btns">
                <button onClick={this.handleClick}> Zwiększ licznik</button>
                <button onClick={this.zeroClick}> Wyzeruj licznik</button>
                <button onClick={this.resetClick}> Przywróć wartość początkową</button>
            </div>
        );
    }
}

export default ButtonsPanel;