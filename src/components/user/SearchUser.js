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
            
            <form onSubmit={this.findUser}>
                <div className="form-row search-container">
                    <div className="col-md-4 mb-3">
                        <label>Nombre</label>
                        <input className="form-control" ref={this.inputName} type="text"></input>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Apellido</label>
                        <input className="form-control" ref={this.inputLastName} type="text"></input>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button className="btn btn-primary">Buscar</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ListUsers;