import React, { Component } from 'react';
import moment from 'moment';
import { createUser } from './../../services/services';
import swal from '@sweetalert/with-react';

class ListUsers extends Component {
    inputName = React.createRef();
    inputLastName = React.createRef();
    inputDocument = React.createRef();
    inputPassword = React.createRef();
    inputBirthDay = React.createRef();
    
    addUser = async e => {
        e.preventDefault();
        let birthDay = new moment(this.inputBirthDay.current.value).format('DD-MM-YYYY');
        const dataUser = {
            "firstName": this.inputName.current.value,
            "lastName": this.inputLastName.current.value,
            "documentId": this.inputDocument.current.value,
            "password": this.inputPassword.current.value,
            "birthDay": birthDay,
            "hobbies": []
        }
        let data  = await createUser(dataUser);
        console.log(data)
        if(data.success){
            swal("Usuario creado con exito")
        }else{
            swal("El usuario no fue creado")
        }
    }

    render() {
        return (
            <div className="space-padding middle-width">
                <h1>Crear Usuario</h1>
                <p>Por favor ingrese la siguiente información</p>
                <form onSubmit={this.addUser}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Nombre</label>
                        <input className="col-sm-6 form-control" ref={this.inputName} type="text"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Apellido</label>
                        <input className="col-sm-6 form-control" ref={this.inputLastName} type="text"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Documento de identificación</label>
                        <input className="col-sm-6 form-control" ref={this.inputDocument} type="text"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Contraseña</label>
                        <input className="col-sm-6 form-control" ref={this.inputPassword} type="password"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Fecha de nacimiento</label>
                        <input className="col-sm-6 form-control" ref={this.inputBirthDay} type="date"></input>
                    </div>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
        );
    }
}

export default ListUsers;
