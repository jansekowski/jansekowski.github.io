import React, { Component } from 'react';
import './CryptoList.css';

class CryptoList extends Component {



    createRates = (cryptoObject) => {


        return (
            <li key={cryptoObject.currency} className="CryptoListLi">
                <span className="CryptoLabel">Currency: </span>{cryptoObject.currency},&nbsp;
                {/* <span className="CryptoLabel">symbol: </span>{cryptoObject.symbol},&nbsp; */}
                <span className="CryptoLabel">buy: </span>{cryptoObject.buy},&nbsp;
                <span className="CryptoLabel">sell: </span>{cryptoObject.sell} <span className={cryptoObject.class}>{cryptoObject.arrow}</span>&nbsp; 
                <span className="CryptoLabel">Last rate: </span>{cryptoObject.lastRate}
            </li>
        )
    }

    render() {



        let cryptoList = this.props.cryptoList;
        let rates = cryptoList.map(this.createRates);




        return (
            <div className="CryptoList">
                <ul className="CryptoListUl">
                    {rates}
                </ul>
            </div>)
    };
}

export default CryptoList;