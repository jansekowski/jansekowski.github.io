import React, { Component } from 'react';

class UsersList extends Component {

    createUser = (user) => {
        return (
            <li key={user.key} onClick={() => this.removeUser(user)}>
                <div>{user.firstName} {user.lastName} </div>
            </li>
        )
    }


    removeUser = (user) => {
        this.props.deleteUser(user);
        console.log(`Usunięty użytkownik to ${user.firstName} ${user.lastName} o numerze ${user.key}.`)
    }

    render() {

        let listOfUsers = this.props.usersList;
        let users = listOfUsers.map(this.createUser);

        return (
            <ul className="the-list">
                {users}
            </ul>
        );

    }
}

export default UsersList;