import React, { Component } from 'react';

class ListUsers extends Component {

    inputName = React.createRef();
    inputLastName = React.createRef();

    findUser = async e => {
        e.preventDefault();
        this.props.getSearchUser(this.inputName.current.value, this.inputLastName.current.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.findUser}>
                    <div>
                        <label>Nombre</label>
                        <input ref={this.inputName} type="text"></input>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input ref={this.inputLastName} type="text"></input>
                    </div>
                    <button>Buscar</button>
                </form>
            </div>
        );
    }
}

export default ListUsers;