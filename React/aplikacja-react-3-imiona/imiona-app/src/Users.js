import React, { Component } from 'react';
import './Users.css';
import UsersList from './UsersList';

//utworzenie komponentu klasowego. Będzie to div, w którym będzie zawarty nagłówek, input, przycisk i lista imion:
class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
        }
    }

    addUser = (e) => {
        e.preventDefault();
        // console.log(this._inputName.value);

        let newUser = {
            key: Date.now(),
            firstName: this._inputFirstName.value.trim(),
            lastName: this._inputLastName.value.trim()
        }
        console.log(newUser);

        this.setState((previousState) => {
            return ({
                usersList: previousState.usersList.concat(newUser)
            })
        });

        this._inputFirstName.value = '';
        this._inputLastName.value = ''
    }

    deleteUser = (userToRemove) => {
        let filteredUsers = this.state.usersList.filter((user)=>
        {return user.key !== userToRemove.key})
        console.log(filteredUsers);

        this.setState((previousState) =>{
            return{
                usersList: filteredUsers,
            }
        });
    }

    render() {
        let headingTitle = `${this.props.title}`;

        return (
            <div className="users-main">
                <h1>{headingTitle}</h1>
                <form onSubmit={this.addUser}>
                    {/* poniżej "data" i "_inputName" są dowolnymi nazwami */}
                    <input ref={(data) => { this._inputFirstName = data }} type="text" placeholder="Imię"></input>
                    <input ref={(data) => { this._inputLastName = data }} type="text" placeholder="Nazwisko"></input>
                    <button type="submit">Dodaj użytkownika</button>
                </form>
                {/* poniżej ustawiamy props "usersList" */}
                <UsersList usersList={this.state.usersList} deleteUser={this.deleteUser}/>
            </div>
        )

    }

}

export default Users;