import React from 'react';
import './Counter.css';
import CounterKlasowy from './CounterKlasowy';

//poniżej props musi się nazywać props. 
const Counter = (props) => {
    {/* propText stworzyłem w App.js (nazwa moja, dowolna). Bez "this" na początku, bo to komponent funkcyjny. W klasowym trzeba todać z przodu this.*/ }
    let text = (props.propText == '' ? "Domyślny tekst" : props.propText);
    return (
        <div className="counter">
            <h1>{text}</h1>
            {/* możemy tez dodać inny stworzony komponent: */}
            <CounterKlasowy propColor="red" />
        </div>
    )
}

export default Counter;