import React from 'react';
import './Crypto.css';
import axios from 'axios';
import CryptoList from './CryptoList.js';


//komponent klasowy
class Crypto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cryptoList: [],
            filteredCryptoList: [],
        }
    }

    componentDidMount() {
        this.getCryptoData();
        this.timer = setInterval(this.getCryptoData, 5000);
    }

    getCryptoData = () => {
        // console.log("minęło 5 sekund");

        axios.get(`https://blockchain.info/ticker`)
            .then(response => {
                let cryptoData = response.data;
                let cryptoListArray = [];
                let lastCryptoList = this.state.cryptoList;

                cryptoListArray = Object.keys(cryptoData).map((key) => {
                    let cryptoObject = {};
                    cryptoObject.currency = key;
                    cryptoObject.symbol = cryptoData[key].symbol;
                    cryptoObject.buy = cryptoData[key].buy;
                    cryptoObject.sell = cryptoData[key].sell;
                    cryptoObject.lastRate = cryptoData[key].last;

                    // console.log(cryptoObject);

                    let lastObject = lastCryptoList.find(lastObject => {
                        return cryptoObject.symbol === lastObject.symbol
                    });

                    if (lastObject !== undefined) {
                        if (cryptoObject.lastRate > lastObject.lastRate) {
                            cryptoObject.class = "green";
                            cryptoObject.arrow = String.fromCharCode(8663)
                        } else if (cryptoObject.lastRate < lastObject.lastRate) {
                            cryptoObject.class = "red";
                            cryptoObject.arrow = String.fromCharCode(8664)
                        } else {
                            cryptoObject.class = "blue";
                            cryptoObject.arrow = String.fromCharCode(8660)
                        }
                    } else {
                        cryptoObject.class = "blue";
                        cryptoObject.arrow = String.fromCharCode(8660);
                    }

                    return cryptoObject;
                });

                // console.log(cryptoData);

                this.setState({
                    cryptoList: cryptoListArray,
                })

                this.filterCryptoList();
                // console.log(this.state.cryptoList);
            });
    }

    filterCryptoList = () => {
        // console.log("filtrujemy");
        this._filterInput.value = this._filterInput.value.trim();

        let filteredCryptoList = this.state.cryptoList;
        let filter = this._filterInput.value.toUpperCase();

        filteredCryptoList = filteredCryptoList.filter(currentObject => {
            return (currentObject.currency.search(filter) !== -1)
        });

        console.log(filteredCryptoList);
        

        this.setState({
            filteredCryptoList: filteredCryptoList
        });

    }

    render() {

        return (
            <div>
                <h1>AKTUALNE KURSY BITCOINA</h1>
                <div className="Crypto">
                    <input type="text" placeholder="Search" ref={element => this._filterInput = element} onChange={this.filterCryptoList} />
                    <CryptoList cryptoList={this.state.filteredCryptoList} />
                </div>
            </div>
        )
    }
}

export default Crypto;