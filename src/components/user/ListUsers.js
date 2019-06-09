import React, { Component } from 'react';
import { listUsers } from '../../services/services';
import { searchUser } from './../../services/services';
import User from './User';
import SearchUser from './SearchUser';
import swal from '@sweetalert/with-react';

class ListUsers extends Component {
    state = {users: []}

    removeUser = (id) => {
        let users = this.state.users.filter(user => {
            return user._id !== id;
        });
        this.setState({users});
    }

    async componentDidMount(){
        let users = await listUsers();
        this.setState({users: users.data});
    }

    getSearchUser = async (firstName, lastName) => {
        let users = await searchUser(firstName, lastName);
        if(users.data.length === 0){
            swal("No se encontraron coincidencias", "Por favor ingrese un nombre y apellido validos", "error")
        }
        this.setState({users: users.data})
    }

    render() {
        return (
            <div className="space-padding">
                <h1>Listado de Usuarios</h1>
                <SearchUser getSearchUser={this.getSearchUser}/>
                {this.state.users.map((user, key) => (
                    <User key={key} user={user} removeUser={this.removeUser}/>
                ))}
            </div>
        );
    }
}

export default ListUsers;