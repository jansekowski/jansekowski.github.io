import React from 'react';
import './Counter.css';

class CounterKlasowy extends React.Component {
    constructor(props) {
        //wywołuuję konstruktor dla React.Component
        super(props);
    }
    render() {
        const text = "Komponent klasowy Counter";
        const color = {
            "backgroundColor": this.props.propColor
        }
        return (
            <div className="counter counter-dark" style={color}>
                {/* nazwa zmiennej musi być w klamrach */}
                <h1>{text}</h1>
            </div>
        )
    }
}

export default CounterKlasowy;